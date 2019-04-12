import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  LinksService,

} from './service.index';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    LinksService,
  ]
})
export class ServiceModule { }
