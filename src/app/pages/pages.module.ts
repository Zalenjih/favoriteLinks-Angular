import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Pages routes
import { PagesRoutingModule } from './pages-routing.module';

// Modules
import { SharedModule } from '../shared/shared.module';

// Components
import { LinksListComponent } from './links/links-list.component';
import { LinksFromComponent } from './links/links-from.component';


// Components

@NgModule({
  declarations: [
    //PagesComponent,
    LinksListComponent,
    LinksFromComponent,
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
    LinksFromComponent,
  ]
})
export class PagesModule { }
