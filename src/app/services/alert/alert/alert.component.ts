import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Message } from '../../message';
import { MessageType } from '../../message-type.interface';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {

  @Input() message: Message = new Message(MessageType.Success)
  @Output() dismissed: EventEmitter<Message> = new EventEmitter<Message>();
  animation: string = "showAlert"

  getBackgroundClass()
  {
    switch(this.message.type)
    {
      case MessageType.Error:
        return "alert-error"
      case MessageType.Success:
        return "alert-success";
      case MessageType.Warning:
        return "alert-warning";
      default:
        return "";
    }
  }


  dismissAlert()
  {
    document.getElementById("alert")?.addEventListener("animationend", () => {
      this.dismissed.emit(this.message)
    })
    this.animation = "dismissNotification"
  }
}
