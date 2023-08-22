import { AfterViewInit, Component, ElementRef, Input, TemplateRef, ViewChild } from '@angular/core';
import * as d3 from 'd3';
import { PieChartData } from './pie-chart-data.interface';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements AfterViewInit{

  @Input() id = ''
  @Input() title = ''
  @Input() note = ''
  width = 250
  height = 250
  margin = 0
  radius = 0
  svg!: any
  colors!: any

  @Input() data: PieChartData[] = []


  constructor() {
    this.radius = Math.min(this.width, this.height) / 2 - this.margin;
   }
  ngAfterViewInit(): void {
          this.drawChart();
  }

  private drawChart(): void {
    let tempId = "#" + this.id
    this.svg = d3.select(tempId)
      .attr("width", this.width)
      .attr("height", this.height)
      .append("g")
      .attr(
        "transform",
        "translate(" + this.width / 2 + "," + this.height / 2 + ")"
      );

    this.colors = d3.scaleOrdinal()
      .domain(this.data.map(d => d.Name))
      .range(["#c7d3ec", "#a5b8db", "#879cc4", "#677795", "#5a6782"]);

    // Compute the position of each group on the pie:
    const pie = d3.pie<PieChartData>().value((d: PieChartData) => Number(d.Value));

    // Build the pie chart
    this.svg.selectAll('pieces')
      .data(pie(this.data))
      .enter()
      .append('path')
      .attr('d', d3.arc()
        .innerRadius(0)
        .outerRadius(this.radius)
      )
      .attr('fill', (d: PieChartData, i: any) => (this.colors(i)))
      .attr("stroke", "#121926")
      .style("stroke-width", "1px");

    // Add labels
    const labelLocation = d3.arc()
      .innerRadius(25)
      .outerRadius(this.radius);

    this.svg.selectAll('pieces')
      .data(pie(this.data))
      .enter()
      .append('text')
      .text((d: { data: PieChartData; }) => d.data.Name + " " + d.data.Value)
      .attr("transform", (d: d3.DefaultArcObject) => "translate(" + labelLocation.centroid(d) + ")")
      .style("text-anchor", "middle")
      .style("font-size", 15);
  }
  // private drawChart(): void {
  //   let tempId = "svg"
  //   this.svg = d3.select(tempId)
  //     .attr("id", this.id)
  //     .attr("width", this.width)
  //     .attr("height", this.height)
  //     .append("g")
  //     .attr(
  //       "transform",
  //       "translate(" + this.width / 2 + "," + this.height / 2 + ")"
  //     );

  //   this.colors = d3.scaleOrdinal()
  //     .domain(this.data.map(d => d.Name))
  //     .range(["#c7d3ec", "#a5b8db", "#879cc4", "#677795", "#5a6782"]);

  //   // Compute the position of each group on the pie:
  //   const pie = d3.pie<PieChartData>().value((d: PieChartData) => Number(d.Value));

  //   // Build the pie chart
  //   this.svg.selectAll('pieces')
  //     .data(pie(this.data))
  //     .enter()
  //     .append('path')
  //     .attr('d', d3.arc()
  //       .innerRadius(0)
  //       .outerRadius(this.radius)
  //     )
  //     .attr('fill', (d: PieChartData, i: any) => (this.colors(i)))
  //     .attr("stroke", "#121926")
  //     .style("stroke-width", "1px");

  //   // Add labels
  //   const labelLocation = d3.arc()
  //     .innerRadius(25)
  //     .outerRadius(this.radius);

  //   this.svg.selectAll('pieces')
  //     .data(pie(this.data))
  //     .enter()
  //     .append('text')
  //     .text((d: { data: PieChartData; }) => d.data.Name + " " + d.data.Value)
  //     .attr("transform", (d: d3.DefaultArcObject) => "translate(" + labelLocation.centroid(d) + ")")
  //     .style("text-anchor", "middle")
  //     .style("font-size", 15);
  // }
}

