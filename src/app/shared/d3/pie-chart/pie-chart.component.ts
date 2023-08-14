import { Component, Input } from '@angular/core';
import * as d3 from 'd3';
import { PieChartData } from './pie-chart-data.interface';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent {
  private _data: PieChartData[] = []
  @Input() id = ''
  @Input() title = 'Pie Chart'
  @Input() note = ''
  width = 250
  height = 250
  margin = 0
  radius = 0
  svg!: any
  colors!: any

  @Input()
  get data(): PieChartData[]
  {
    return this._data
  }

  set data(value: PieChartData[]) {
    this._data = value
    if (value[0] != null || value[0] != undefined) {
      this.drawChart();
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.radius = Math.min(this.width, this.height) / 2 - this.margin;
  }

  ngAfterViewInit(): void {
    this.createColors();
    this.createSvg();
  }

  private createSvg(): void {
    let tempId = "figure#" + this.id
    this.svg = d3.select(tempId)
      .append("svg")
      .attr("width", this.width)
      .attr("height", this.height)
      .append("g")
      .attr(
        "transform",
        "translate(" + this.width / 2 + "," + this.height / 2 + ")"
      );
  }

  private createColors(): void {
    this.colors = d3.scaleOrdinal()
      .domain(this.data.map(d => d.Name.toString()))
      .range(["#c7d3ec", "#a5b8db", "#879cc4", "#677795", "#5a6782"]);
  }

  private drawChart(): void {
    // Compute the position of each group on the pie:
    const pie = d3.pie<any>().value((d: any) => Number(d.DataValue));

    // Build the pie chart
    this.svg
      .selectAll('pieces')
      .data(pie(this.data))
      .enter()
      .append('path')
      .attr('d', d3.arc()
        .innerRadius(0)
        .outerRadius(this.radius)
      )
      .attr('fill', (d: any, i: any) => (this.colors(i)))
      .attr("stroke", "#121926")
      .style("stroke-width", "1px");

    // Add labels
    const labelLocation = d3.arc()
      .innerRadius(25)
      .outerRadius(this.radius);

    this.svg
      .selectAll('pieces')
      .data(pie(this.data))
      .enter()
      .append('text')
      .text((d: { data: PieChartData}) => d.data.Name + d.data.Value)
      .attr("transform", (d: d3.DefaultArcObject) => "translate(" + labelLocation.centroid(d) + ")")
      .style("text-anchor", "middle")
      .style("font-size", 15);
  }
}
