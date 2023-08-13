import { Injectable, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
import { MenuItems } from 'src/app/shared/menu-items';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  leftSideNavMenuItems: Subject<MenuItems> = new Subject<MenuItems>();
  rightSideText: Subject<TemplateRef<any>> = new Subject<TemplateRef<any>>()

  setLeftSideMenuItems(items: MenuItems)
  {
    this.leftSideNavMenuItems.next(items);
  }

  setRightSideNav(text: TemplateRef<any>)
  {
    this.rightSideText.next(text)
  }
}
