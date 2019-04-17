import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LinksListComponent } from './links/links-list.component';
import { LinksFromComponent } from './links/links-from.component';

// Pages

const routes: Routes = [
    { path: 'inicio', component: LinksListComponent },
    { path: 'nuevo', component: LinksFromComponent },
    { path: '', redirectTo: '/inicio', pathMatch: 'full'}
];
  

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PagesRoutingModule { }
