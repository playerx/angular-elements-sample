# AngularElementsSample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.0. and demonstrates how web components can be generated using standard angular components

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. 

## Summarize
We don't have bootstrap component in AppModule, instead we can have any number of entry components and they all will be web components!

for demonstration I've commented standard app-root component in index.html and placed multiple app-like-button components.

To create more web components using angular, just generate new component `ng g component my-new-comp` and place in AppModule's entryComponent's list, thats it, really simple :)
