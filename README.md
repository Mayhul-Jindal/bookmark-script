# BOOKIT

Collects information of your bookmarks in your browser and then update that to your github profile's readme.md automatically. 

## Reason to start this:
- One can share the articles they read if they want to.

- Plus I haven't seen any implementation where I can view articles of my favourite developers on github so yea :) 

> This project is in a very initial state which only consist of a very simple firefox extesion(frontend), an api written in javascript(backend), and a CI/CD pipeline to update my README.md which i have commented out for now.

## FireFox Extension

- [Background Scripts](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Background_scripts) enable you to monitor and react to events in the browser, such as navigating to a new page, **add/removing a bookmark**, or closing a tab.

    Background scripts or a page are of type persistant or non-persistant. For my project I have chosen **non-persistant** one where I will send a post request which contains the bookmark data to my server.

- Used [BookMark API](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Work_with_the_Bookmarks_API) to get all the bookmarks of the user

## Server

Made the simplest api which can ever exsist which helps serves the bookmarks

## Profile README.md

Here used pug templating to update my readme by getting updated bookmarks from the api in a fixed interval. For the fixed interval thing I used github actions.
