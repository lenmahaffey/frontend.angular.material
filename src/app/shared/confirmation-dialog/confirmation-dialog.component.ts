import { Component, Input, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationDialogOptions } from './confirmation-dialog-options';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent {

  constructor(public activeModal: NgbActiveModal)
  {}
  @Output() response: Subject<boolean | null> = new Subject()

  @Input() options: ConfirmationDialogOptions = {
    title: "",
    text: "",
    yesButtonText: "",
    noButtonText: ""
  }

  onKeyDown(event: any)
  {
    if (event.key === "Escape") {
      this.response.next(null)
    }
  }
  yes(){
    this.response.next(true);
  }

  no(){
    this.response.next(false);
  }

  dismiss(){
    this.response.next(null);
  }
}
