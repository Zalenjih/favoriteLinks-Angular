import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Pages routes
import { PagesRoutingModule } from './pages-routing.module';

// Components
import { LinksListComponent } from './links/links-list/links-list.component';
//import { PagesComponent } from './pages.component';


@NgModule({
  declarations: [
    //PagesComponent,
    LinksListComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule
  ],
  exports: [
    //PagesComponent,
    LinksListComponent,
  ]
})
export class PagesModule { }
