import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './common/material.module';
import { AppComponent } from './app.component';
import { LikeButtonComponent } from './like-button/like-button.component';


@NgModule({
  declarations: [
    AppComponent,
    LikeButtonComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
