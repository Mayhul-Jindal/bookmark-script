let helperBool = false

async function getBookmark(){
    let temp = await browser.bookmarks.getRecent(1)
    let parentInfo = await browser.bookmarks.get(temp[0].parentId)
    let test = {
        name: temp[0].title,
        url: temp[0].url,
        topic: parentInfo[0].title
    }

    return test
}

async function postReq(data = {}){
  const response = await fetch('https://5093-182-79-4-250.in.ngrok.io/send', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

async function handleBookmarkEvent(_, bookmarkInfo) {
    let result = await getBookmark()
    let response = await postReq(result)
    console.log(response)
    // if (bookmarkInfo.type == 'folder') {
    //     helperBool = false
    //     console.log("folder detected")
    // }
    // else if(bookmarkInfo.type == 'bookmark' && helperBool == true){
    //     console.log(getBookmark())
    //     // let parentInfo = await browser.bookmarks.get(bookmarkInfo.parentId)
    //     // console.log(`Your bookmark Name ${bookmarkInfo.title}}`)
    //     // console.log(`Your bookmark URL ${bookmarkInfo.url}`)
    //     // console.log(`Your bookmark topic ${parentInfo[0].title}`)
    // }
    // else{
    //     console.log("Skipping this bookmark event to get correct bookmark topic")
    //     helperBool = true
    // }
}


// This will run when a bookmark is created.
browser.bookmarks.onCreated.addListener(
    handleBookmarkEvent
);