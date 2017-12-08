import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './common/material.module';
import { AppComponent } from './app.component';
import { LikeButtonComponent } from './like-button/like-button.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

export const webComponents = [
  AppComponent,
  LikeButtonComponent
];


@NgModule({
  declarations: [
    ...webComponents,
    Page1Component,
    Page2Component
  ],
  entryComponents: [
    ...webComponents
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
})
export class AppModule {
  ngDoBootstrap() { }
}
