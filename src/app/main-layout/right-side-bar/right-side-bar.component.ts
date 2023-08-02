import { Component } from '@angular/core';

@Component({
  selector: 'app-right-side-bar',
  templateUrl: './right-side-bar.component.html',
  styleUrls: ['./right-side-bar.component.scss']
})
export class RightSideBarComponent {

  animation: string = "hideContainer"

  toggleVisibility()
  {
    console.log(this.animation)
    this.animation =  (this.animation == "showContainer") ? "hideContainer" : "showContainer"
    console.log(this.animation)
  }
}
