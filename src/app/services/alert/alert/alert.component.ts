import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Message } from '../../message';
import { MessageType } from '../../message-type.interface';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit{

  @Input() message: Message = new Message(MessageType.Success)
  @Output() dismissed: EventEmitter<Message> = new EventEmitter<Message>();
  animation: string = "showAlert"

  constructor()
  {

  }
  ngOnInit(): void {
    if(this.message.autoDismiss)
    {
      this.dismissAlertInTime(1000)
    }
  }
  getBackgroundClass()
  {
    switch(this.message.type)
    {
      case MessageType.Error:
        return "alert-danger"
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
    this.animation = "dismissAlert"
  }

  async dismissAlertInTime(timeToWait: number ) {
    await this.sleep(timeToWait);
    this.dismissAlert()
}

  sleep = async (milliseconds: number) => {
    await new Promise(resolve => {
        return setTimeout(resolve, milliseconds)
    });
};
}
