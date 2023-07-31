import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationManagerComponent } from './notification/notification-manager/notification-manager.component';
import { AlertComponent } from './alert/alert/alert.component';
import { AlertManagerComponent } from './alert/alert-manager/alert-manager.component';
import { NotificationComponent } from './notification/notification/notification.component';



@NgModule({
  declarations: [
    NotificationComponent,
    NotificationManagerComponent,
    AlertComponent,
    AlertManagerComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NotificationManagerComponent,
    AlertManagerComponent
  ]
})
export class ServicesModule { }
