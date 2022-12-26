import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GotRoutingModule } from './got-routing.module';
import { GotComponent } from './got.component';


@NgModule({
  declarations: [
    GotComponent
  ],
  imports: [
    CommonModule,
    GotRoutingModule
  ]
})
export class GotModule { }
