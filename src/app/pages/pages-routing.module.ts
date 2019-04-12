import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { LinksListComponent } from './links/links-list/links-list.component';

const routes: Routes = [
    { path: 'inicio', component: LinksListComponent },
    { path: '', redirectTo: '/inicio', pathMatch: 'full'}
];
  

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PagesRoutingModule { }
