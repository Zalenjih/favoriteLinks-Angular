import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Pages routes
import { PagesRoutingModule } from './pages-routing.module';


import { SharedModule } from '../shared/shared.module';


// Components
import { LinksListComponent } from './links/links-list/links-list.component';

@NgModule({
  declarations: [
    //PagesComponent,
    LinksListComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    SharedModule,
  ],
  exports: [
    //PagesComponent,
    LinksListComponent,
  ]
})
export class PagesModule { }
