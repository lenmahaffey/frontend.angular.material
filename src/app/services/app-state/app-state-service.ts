import { Injectable, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {


  leftSideNav: Subject<TemplateRef<any>> = new Subject<TemplateRef<any>>()
  rightSideText: Subject<TemplateRef<any>> = new Subject<TemplateRef<any>>()

  private leftSideBarNav: any;
  private rightSideBarText: any;

  constructor() { }

  setLeftSideNav(nav: TemplateRef<any> | undefined)
  {
    if(nav != undefined){
      this.leftSideBarNav = nav;
      this.leftSideNav.next(nav);
    }
  }

  setRightSideNav(text: TemplateRef<any>)
  {
    this.rightSideBarText = text;
    this.rightSideText.next(text);
  }
}
