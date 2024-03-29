import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from 'src/app/services/alert/alert.service';
import { Message } from 'src/app/services/message';
import { MessageType } from 'src/app/services/message-type.interface';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { ConfirmationDialogOptions } from 'src/app/shared/confirmation-dialog/confirmation-dialog-options';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { SpinnerComponent } from 'src/app/shared/spinner/spinner.component';

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
  confirmationResponseMessage: string = "Please open the confimation dialog and make a selection"
  constructor(private alertService:AlertService, private notificationService: NotificationService, private modalService: NgbModal)
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
    let modalOptions: NgbModalOptions = {
      backdrop:"static",
      keyboard:false,
      // size: 'sm',
      // centered: true
    }
    let modalRef = this.modalService.open(ConfirmationDialogComponent, modalOptions);

    let options: ConfirmationDialogOptions = {
      title: "Modal",
      text: "This is a modal",
      yesButtonText: "yes",
      noButtonText: "no",
    }
    modalRef.componentInstance.options = options;
    let sub = modalRef.componentInstance.response.subscribe((data: boolean | null) => {
        this.setConfirmationResponseMessage(data)
        this.modalService.dismissAll()
        sub.unsubscribe()
      })
  }

  openSpinner()
  {
    let options: NgbModalOptions = {
      // backdrop:"static",
      // keyboard:false,
      size: 'sm',
      centered: true
    }
    const modalRef = this.modalService.open(SpinnerComponent, options);
    modalRef.componentInstance.message= "Spin me round";
  }

  setConfirmationResponseMessage(data: boolean | null)
  {
    if(data == null)
    {
      this.confirmationResponseMessage = "You did not make a selection"
    }
    else if(data)
    {
      this.confirmationResponseMessage = "You clicked yes"
    }
    else
    {
      this.confirmationResponseMessage = this.confirmationResponseMessage = "You clicked no"
    }
  }
}
