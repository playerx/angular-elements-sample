import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatToolbarModule,
  MatCardModule
} from '@angular/material';


@NgModule({
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatCardModule
  ],
})
export class MaterialModule { }
