import { Component, OnInit, TemplateRef } from '@angular/core';
import { AppStateService } from 'src/app/services/app-state/app-state-service';

@Component({
  selector: 'app-left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.scss']
})
export class LeftSideBarComponent {

  sideNavTemplate: any;
  constructor(private appStateService: AppStateService)
  {
    appStateService.leftSideNav.subscribe(data => {
      this.sideNavTemplate = data
    })
  }

  // setSideNav(template: any)
  // {
  //   this.sideNavTemplate = template;
  // }
}
