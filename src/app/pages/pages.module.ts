import { NgModule } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DemoComponent } from './demo/demo.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { DemoSideNavLinksComponent } from './demo/demo-side-nav-links/demo-side-nav-links.component';



@NgModule({
  declarations: [
    WelcomeComponent,
    PageNotFoundComponent,
    DemoComponent,
    DemoSideNavLinksComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'demo', component: DemoComponent },
    ]),
  ]
})
export class PagesModule { }
