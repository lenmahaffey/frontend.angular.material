import { Component, TemplateRef, ViewChild } from '@angular/core';
import { AppStateService } from 'src/app/services/app-state/app-state-service';

@Component({
  selector: 'app-demo-side-nav-links',
  templateUrl: './demo-side-nav-links.component.html',
  styleUrls: ['./demo-side-nav-links.component.scss']
})
export class DemoSideNavLinksComponent {
  @ViewChild('navLinks', {static : true}) navLinks : TemplateRef<any> | undefined;


  constructor(private appStateService: AppStateService)
  { }

  ngOnInit() {
    this.appStateService.setLeftSideNav(this.navLinks)
  }
}
