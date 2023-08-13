import { Component } from '@angular/core';
import { AppStateService } from 'src/app/services/app-state/app-state-service';

@Component({
  selector: 'app-left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.scss']
})
export class LeftSideBarComponent {

  menuItems: any

  constructor(private appStateService: AppStateService)
  {
    this.appStateService.leftSideNavMenuItems.subscribe(data => {
      console.log(data)
      this.menuItems = data
    })
  }
}
