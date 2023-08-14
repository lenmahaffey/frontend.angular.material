import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BarChartData } from './bar-chart-data.interface';
import { ToShortDateStringPipe } from '../../pipes/to-short-date-string.pipe';
import * as d3 from 'd3';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent {
  
  @Output() monthClicked = new EventEmitter<String>();

  @Input() public title: string = "Bar chart"
  private _data: BarChartData[] = []
  private margin = 50;
  private width = 1200;
  private height = 450;
  private barheight = 0;
  public valueName = "";
  public count = "";
  public lastUpdated = "";

  @Input()
  get data(): BarChartData[] {
    return this._data
  }

  set data(value: BarChartData[]) {
    this._data = value
    if (value[0] != null || value[0] != undefined) {
      this.drawSvg()
    }
  }

  constructor(private shortDatePipe: ToShortDateStringPipe) { }

  private calculateBarHeight()
  {
    let max = 0;
    this.data.forEach(x =>
    {
      if(x.Value > max)
      {
        max = x.Value
      }
    })
    this.barheight = Math.ceil(max / 100)* 100
  }

  private deleteSvg(): void{
    d3.select("svg").html("")
  }

  private drawSvg(): void {
    this.deleteSvg();
    this.calculateBarHeight()
    this.drawChart();
  }

  private drawChart(): void {
    const svg = d3.select("svg")
      .attr("width", this.width + (this.margin * 2))
      .attr("height", this.height  + (this.margin * 2))
      .append("g")
      .attr("transform", "translate(" + (this.margin) + "," + (this.margin - 20) + ")");

    // Create the X-axis band scale
    const x = d3.scaleBand()
      .range([0, this.width])
      .domain(this.data.map(d => d.Name))
      .padding(.3);

    // Create the Y-axis band scale
    const y = d3.scaleLinear()
      .domain([0, this.barheight])
      .range([this.height, 0]);

    // Draw the X-axis on the DOM
    const xAxisG = svg.append("g")
      .attr("id", "xAxis")
      .attr("transform", "translate(0," + (this.height) + ")")
      .call(d3.axisBottom(x))

    xAxisG.selectAll(".domain")
      .remove()

    xAxisG.selectAll("text")
      .attr("transform", "translate(-7,0)rotate(-35)")

    // Draw the Y-axis on the DOM
    const yAxisG = svg.append("g")
      .attr("id", "yAxis")
      .call(d3.axisLeft(y))

    yAxisG.selectAll(".domain")
      .remove();

    yAxisG.selectAll(".tick")
      .append("line")
      .attr("x", 1000)

    // Create and fill the bars
    const bars = svg.selectAll("bars")
      .data(this.data)
      .enter()
      .append("g")

    bars.append("rect")
      .attr("class", "bar")
      .attr("id", (d: BarChartData) => d.Name)
      .attr("x", (d: BarChartData) => x(d.Name) ?? "")
      .attr("y", (d: BarChartData) => y(0) ?? "")
      .attr("width", x.bandwidth())
      .attr("height", this.height - y(0))

    bars.append("text")
      .text((d: BarChartData) => {
        if(d.Date <= new Date())
        {
          return d.Value;
        }
        else return ""
      })
      .attr("x", function(d,i){
        let position = x(d.Name)
        if(position != undefined)
        {
          return position + ((x.bandwidth() / 2) - this.clientWidth / 2);
        }
        else return 0;
      })

      .attr("y", function(d){
          return y(d.Value) - 5;
      })
      .attr("opacity", 0);

      svg.selectAll("rect")
      .transition()
      .duration(800)
      .attr("y", (d: any) => y( d.Value ) )
      .attr("height", (d: any) => this.height -  y(d.Value))
      .on("end", () => {
        svg.selectAll(".bar + text")
        .transition()
        .duration(500)
        .style("opacity", 1)
      })

    bars.on("mouseenter", (e: MouseEvent) =>{
      let id = ((e.target as HTMLElement).childNodes[0] as HTMLElement).id
      let tip = document.querySelector(".d3-tooltip") as HTMLElement
      let d = this.data.find(x => x.Name == id)
      this.count = d?.Value.toString() ?? ""
      this.lastUpdated = this.shortDatePipe.transform(d?.DateUpdated) ?? ""
      tip.style.visibility = "visible"
    })

    bars.on("mousemove", (e: MouseEvent) =>{
      let tip = document.querySelector(".d3-tooltip") as HTMLElement
      tip.style.left = (e.offsetX + 50).toString() + 'px'
      tip.style.top = (e.pageY - 150).toString() + 'px'
    })

    bars.on("mouseleave", (e: MouseEvent) =>{
      let tip = document.querySelector(".d3-tooltip") as HTMLElement
      tip.style.visibility = "hidden"
    })

    bars.on("click", (e: MouseEvent) => {
      let name = (e.target as Element).id
      this.monthClicked.emit(name)
    })

    var lines:any = []
    document.querySelectorAll(".tick").forEach((line: Element) =>
    {
       if(line.children[0].getAttribute("x2") != null)
       {
          lines.push(line)
       }
    });

    lines.forEach( (line: HTMLElement) =>
      {
        var newLine = line.children[0].cloneNode() as HTMLElement;
        line.children[0].remove();
        newLine.setAttribute("class", "tick")
        newLine.setAttribute("x2", this.width.toString());
        newLine.setAttribute("stroke-opacity", "0.5");
        line.append(newLine)
      })
  }
}
