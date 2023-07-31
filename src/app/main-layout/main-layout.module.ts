import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftSideBarComponent } from './left-side-bar/left-side-bar.component';
import { RightSideBarComponent } from './right-side-bar/right-side-bar.component';
import { MainLayoutComponent } from './main-layout.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from '../pages/welcome/welcome.component';
import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';
import { ServicesModule } from '../services/services.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LeftSideBarComponent,
    RightSideBarComponent,
    MainLayoutComponent
  ],
  imports: [
    ServicesModule,
    CommonModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', component: WelcomeComponent },
      { path: '**', component: PageNotFoundComponent }
    ]),
  ],
  exports:[
    MainLayoutComponent
  ]
})
export class MainLayoutModule { }
