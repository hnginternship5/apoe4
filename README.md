# Apoe4
<img width="100%" src="https://trello-attachments.s3.amazonaws.com/5cb6833cc18511147738e4f7/1018x432/c6c2411b2a2dcc0f42fefab52035ce73/image.png">

Standard Web App for Apoe4. <br>
[Demo](https://#/) <br>
Version: 1.0.0

## Overview

This app is to help one live healthy and to detect when changes occur, 
this will enable them prevent having Alzheimer or delay them having it. 
This app is going to add value and some ease to the health sector and humans in general, 
since having an idea of the state of your health is just one click away.

## Features
| Feature | Description |
|---|---|
| **Fast and optimized** | PWA on Lighthouse |
| **Works offline** | Can works offline |
| **Mobile first** | Mobo Friendly Web app can be installed as a native app on your phone |
| **SEO optimized** | index all content and get to the top in search results |
| **Easy in management** | keep and update all information in the JSON File |


## Getting Started
1. [Fork repository](https://github.com/hnginternship5/apoe4/fork) and clone it locally
1. Install dependencies if you dont have them install.
```
npm install -g vue-cli
npm install -g @vue/cli-service
```
1. Install project dependencies: `npm install` 
1. Compiles and hot-reloads for development: `npm run serve`
1. For the production: `npm run build` and then one dir will be created `dist`
1. For testing: `npm run test`

## Deploy your Web App on Firebase

1. Setup Environment for the Firebase deployment
   * Install Firebase CLI: `npm i -g firebase-tools` or `yarn global add firebase-tools`
1. Create [Firebase account](https://console.firebase.google.com) and login into [Firebase CLI](https://firebase.google.com/docs/cli/): `firebase login`
1. Open Terminal/CMD/Powershell in your dir.
1. Now type `firebase login` command in your Terminal/CMD/Powershell. 
1. Type `firebase init`.
1. Select the project by using the arrow keys.
1. Then Select the `Firebase Hosting` by using Spacebar and arrow key.
1. Click `Yes` for Single page web app.
1. Type `dist`.
1. Some by default file will be created successfully.
1. Run locally
   * `firebase serve` or `npm run serve` or `yarn serve` 
1. Build and deploy
   * `firebase deploy` or `npm run deploy` or `yarn deploy`


### Run your tests
1. For Test: `npm run test`


### Lints and fixes files
1. For Lints and Fixes files: `npm run lint`


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Technology Stack

* [VueJS](https://vuejs.org/)
* [Firebase](https://firebase.google.com/)
* [Service Worker & PWA](https://www.npmjs.com/package/vue-pwa)

### View Website Built with Project 

| App Name | Web App Link | 
| --- | --- | 
| Apoe4 | [View Now](https://apoe4.app) |

Project is published under the [MIT license](/LICENSE.md).  
Feel free to clone and modify repo as you want, but don't forget to add reference to authors :)
