// async function countBookmarks(){
//   // This part recursively checks for all existing childrens and updates count to total number of bookmarks
//   function logItems(bookmarkItem) {
//     if (bookmarkItem.url) {
//       count++;
//     }
//     if (bookmarkItem.children) {
//       for (child of bookmarkItem.children) {
//         logItems(child);
//       }
//     }
//   }

//   function logTree(bookmarkItems) {
//     logItems(bookmarkItems[0]);
//   }
 
//   let gettingTree = await browser.bookmarks.getTree();

//   // handling error
//   try {
//     logTree(gettingTree)
//     return count
//   } catch (error) {
//     return error
//   }
// }

// async function getBookmarks(index){
//   var arrayOfBookmarks = [];

//   let recents = await browser.bookmarks.getRecent(index) // example ke liye 10 deh diye
//   for (let i = 1; i < recents.length; i++) {
//     let bookmark = recents[i];
//     let parentInfo = await browser.bookmarks.get(bookmark.parentId)
//     let temp = {
//       name: bookmark.title,
//       url: bookmark.url,
//       topic: title
//     }
//     arrayOfBookmarks.push(temp)
//   } 
//   return arrayOfBookmarks
// }

async function logItems(bookmarkItem, b) {
  if (bookmarkItem.url) {
    let temp = {
      name: bookmarkItem.title,
      url: bookmarkItem.url,
    }
    let parentInfo = await browser.bookmarks.get(bookmarkItem.parentId)
    let title = parentInfo[0].title
    title = title.replaceAll(" ", "_")

    if(b[title] == undefined){
      b[title] = []
      b[title].push(temp)
    }else{
      b[title].push(temp)
    }
  }
  if (bookmarkItem.children) {
    for (child of bookmarkItem.children) {
      await logItems(child,b);
    }
  }
}

async function postReq(path, data){
  const response = await fetch(`https://33bd-2401-4900-1c67-48a6-2c02-ad46-3376-6305.in.ngrok.io/${path}`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

async function handleBookmarkEvent() {
  let bookmarksObject = {}  
  let gettingTree = await browser.bookmarks.getTree();
  await logItems(gettingTree[0], bookmarksObject)
  console.log(bookmarksObject)
  
  let response = await postReq("sendBookmarks",bookmarksObject)
  console.log(response)
}

// This will run when a bookmark is created.
browser.bookmarks.onCreated.addListener(
  handleBookmarkEvent
);