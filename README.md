# BOOKIT

Collects information of your bookmarks in your browser and then update that to your github profile's readme.md automatically. 

Basically I made this so that:
- One can share the articles they read in their profile's readme automatically.

- Plus I haven't seen any implementation where I can view articles of my favourite developers on github so yea :) 

- **Main reason**
> This project is in a very initial state which only consist of a very simple firefox extesion(frontend), an api written in go(backend), a database and CI/CD pipeline to update my README.md. 

## FireFox Extension

- ![Background Scripts](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Background_scripts) enable you to monitor and react to events in the browser, such as navigating to a new page, **add/removing a bookmark**, or closing a tab.

    Background scripts or a page are of type persistant or non-persistant. For my project I have chosen **non-persistant** one where I will send a post request(which contains the bookmark data) to my server.

- Used ![BookMark API]()

- 

## Go Microservice

- For now making a simple `go-api` to handle **POST & GETrequest**. 

## Github Actions

### workflows
Github is a plarform for open source projects so when a team manage those project then people can contribute to them. But as the project gets bigger more and more contributors join because of which it can become difficult for the maintainers to main the project. Thus you can automate your workflow using github actions

1. Listen to event
2. Trigger Workflow
