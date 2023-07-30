import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    WelcomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
