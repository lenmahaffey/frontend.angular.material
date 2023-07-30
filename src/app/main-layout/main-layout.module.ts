import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftSideBarComponent } from './left-side-bar/left-side-bar.component';
import { RightSideBarComponent } from './right-side-bar/right-side-bar.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LeftSideBarComponent,
    RightSideBarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainLayoutModule { }
