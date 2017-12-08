# AngularElementsSample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.0. and demonstrates how web components can be generated using standard angular components

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. 


## How to implement
Please review the commits, I've created step by step commits. 


## How to use
After build `npm run build` there will be three js files (inline.bundle.js, main.bundle.js, styles.bundle.js) include them in any html file and you will have access to your web components, created in angular!


## @angular/elements
this package is coppied from angular repository labs/elements branch, it's folder can be removed after this package will be released and will be available on npm


## Summarize
We don't have bootstrap component in AppModule, instead of that we can have any number of entry components and they all will be web components!

For demonstration I've commented standard app-root component in index.html and placed multiple app-like-button components.

To create more web components using angular, just generate new component `ng g component my-new-comp` and place in AppModule's entryComponent's list, thats it, really simple :)

## Video
[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/ljsOPm4MMEo/0.jpg)](https://www.youtube.com/watch?v=ljsOPm4MMEo)
