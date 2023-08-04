import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AlertService } from 'src/app/services/alert/alert.service';
import { Message } from 'src/app/services/message';
import { MessageType } from 'src/app/services/message-type.interface';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {

  keys: any[] = []
  types = MessageType
  alertMessage: Message = new Message(MessageType.Success)
  notificationMessage: Message = new Message(MessageType.Success)
  alertMessageFormData: any
  notificationMessageFormData: any

  constructor(private alertService:AlertService, private notificationService: NotificationService)
  {
    let temp: any[] = Object.values(this.types).filter(f => !isNaN(Number(f)));
    temp.forEach(key =>{
      this.keys.push(parseInt(key))
    })
    this.alertMessageFormData = new FormGroup({
      type: new FormControl(this.alertMessage.type),
      title: new FormControl(""),
      text: new FormControl("Enter alert text"),
      dismiss: new FormControl(this.alertMessage.autoDismiss)
    });

    this.notificationMessageFormData = new FormGroup({
      type: new FormControl(this.alertMessage.type),
      title: new FormControl("enter notification title"),
      text: new FormControl("enter notification text")
    });
  }

  sendNotification(formData: any)
  {
    var message = new Message()
    message.type = parseInt(formData.type)
    message.title = formData.title
    message.text = formData.text
    this.notificationService.sendNotification(message);
  }

  sendAlert(formData: any)
  {
    var message = new Message()
    message.type = parseInt(formData.type)
    message.title = ""
    message.text = formData.text
    message.autoDismiss = formData.dismiss
    this.alertService.sendAlert(message);
  }

  openConfirmationDialog()
  {

  }

  openSpinner()
  {

  }

}
