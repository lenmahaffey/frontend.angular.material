import { Component } from '@angular/core';
import { Message } from '../../message';
import { Subscription } from 'rxjs';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-alert-manager',
  templateUrl: './alert-manager.component.html',
  styleUrls: ['./alert-manager.component.scss']
})
export class AlertManagerComponent {
  messages: Message[] = []
  incoming: Subscription
  constructor(private _service: AlertService){
    this.incoming = this._service.message.subscribe(data =>
      {
        console.log(data)
        this.messages.push(data)
      })
  }

  deleteMessage(message:Message)
  {
    console.log("delete")
    let i = this.messages.indexOf(message)
    this.messages.splice(i, 1)
  }

  ngOnDestroy(): void {
    this.incoming.unsubscribe();
  }
}
