import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Message } from '../../message';
import { MessageType } from '../../message-type.interface';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {

  @Input() message: Message = new Message(MessageType.Success)
  @Output() dismissed: EventEmitter<Message> = new EventEmitter<Message>();
  animation: string = "showNotification"

  getIconClass()
  {
    switch(this.message.type)
    {
      case 2:
        return "fa-solid fa-circle-xmark fa-xl app-text-danger me-2"
      case 0:
        return "fa-solid fa-circle-check fa-xl app-text-success me-2";
      case 1:
        return "fa-solid fa-circle-exclamation fa-xl app-text-warning me-2";
      default:
        return "";
    }
  }

  getBorderClass()
  {
    switch(this.message.type)
    {
      case MessageType.Error:
        return "errorBorder"
      case MessageType.Success:
        return "successBorder";
      case MessageType.Warning:
        return "warningBorder";
      default:
        return "";
    }
  }

  dismissNotification()
  {
    document.getElementById("notification")?.addEventListener("animationend", () => {
      this.dismissed.emit(this.message)
    })
    this.animation = "dismissNotification"
  }
}
