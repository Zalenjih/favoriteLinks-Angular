import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// Components
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    NavbarComponent,
    NopagefoundComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    NopagefoundComponent,
  ]
})
export class SharedModule { }
