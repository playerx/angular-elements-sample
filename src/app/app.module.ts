import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './common/material.module';
import { AppComponent } from './app.component';
import { LikeButtonComponent } from './like-button/like-button.component';

export const webComponents = [
  AppComponent,
  LikeButtonComponent
];


@NgModule({
  declarations: [
    ...webComponents
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
