import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ToolTipPosition } from './tooltip-position';

@Injectable({
  providedIn: 'root'
})
export class TooltipService {

  text: Subject<any> = new Subject<any>()
  isVisible: Subject<boolean> = new Subject<boolean>()
  clearText: Subject<boolean> = new Subject<boolean>()
  position: Subject<boolean> = new Subject<boolean>()

  constructor() { }

  sendText(text:string)
  {
    this.text.next(text)
  }

  toggleVisibility()
  {
    this.isVisible.next(true);
  }

  setPosition(position: ToolTipPosition)
  {

  }

  clearToolTip()
  {
    this.clearText.next(true);
  }
}
