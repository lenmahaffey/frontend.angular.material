import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DemoComponent } from './demo/demo.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    WelcomeComponent,
    PageNotFoundComponent,
    DemoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'demo', component: DemoComponent },
    ]),
  ]
})
export class PagesModule { }
