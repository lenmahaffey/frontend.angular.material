import { Injectable, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
import { MenuItems } from 'src/app/shared/menu-items';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  leftSideNavMenuItems: Subject<MenuItems> = new Subject<MenuItems>();
  rightSideText: Subject<TemplateRef<any>> = new Subject<TemplateRef<any>>()

  private menuItems: MenuItems = {itemGroups: []}
  private rightSideBarTemplate: any;

  constructor() { }

  setLeftSideMenuItems(items: MenuItems)
  {
    this.menuItems = items
    this.leftSideNavMenuItems.next(this.menuItems);
  }

  setRightSideNav(text: TemplateRef<any>)
  {

  }
}
