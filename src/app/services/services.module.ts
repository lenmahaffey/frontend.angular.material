import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationManagerComponent } from './notification/notification-manager/notification-manager.component';
import { AlertComponent } from './alert/alert/alert.component';
import { AlertManagerComponent } from './alert/alert-manager/alert-manager.component';
import { NotificationComponent } from './notification/notification/notification.component';
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    NotificationComponent,
    NotificationManagerComponent,
    AlertComponent,
    AlertManagerComponent
  ],
  imports: [
    SharedModule,
    BrowserModule
  ],
  exports:[
    NotificationManagerComponent,
    AlertManagerComponent
  ]
})
export class ServicesModule { }
