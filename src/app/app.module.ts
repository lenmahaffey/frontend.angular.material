import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AreasModule } from './areas/areas.module';
import { PagesModule } from './pages/pages.module';
import { ServicesModule } from './services/services.module';
import { SharedModule } from './shared/shared.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MainLayoutModule } from './main-layout/main-layout.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AreasModule,
    PagesModule,
    ServicesModule,
    SharedModule,
    MainLayoutModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', component: WelcomeComponent },
      { path: '**', component: PageNotFoundComponent }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
