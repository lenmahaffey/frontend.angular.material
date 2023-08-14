import { Component, ViewEncapsulation } from '@angular/core';
import { BarChartData } from 'src/app/shared/d3/bar-chart/bar-chart-data.interface';

@Component({
  selector: 'app-bar-chart-demo',
  templateUrl: './bar-chart-demo.component.html',
  styleUrls: ['./bar-chart-demo.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BarChartDemoComponent {
  data: BarChartData[] = [
    {
      Name: "First",
      Value: 75,
      Date: new Date(),
      DateUpdated: new Date()}
  ]
}
