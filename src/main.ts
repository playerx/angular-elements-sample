import './polyfills';

import { enableProdMode, destroyPlatform, Type, NgModuleFactory, CompilerFactory } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { registerAsCustomElements } from '@angular/elements';

import { AppModule, webComponents } from './app/app.module';
import { environment } from './environments/environment';
import { platformBrowser } from '@angular/platform-browser';

if (environment.production) {
  enableProdMode();
}

destroyPlatform();

const bootstrapFn = () => platformBrowserDynamic().bootstrapModule(AppModule);
registerAsCustomElements(webComponents, bootstrapFn)
  .then(() => console.log('Web Components are ready!'))
  .catch(err => console.log(err));
