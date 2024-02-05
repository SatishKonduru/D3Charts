import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrl: './chart1.component.css'
})
export class Chart1Component implements OnInit{
data = [55, 75, 50, 120,250,350,55, 200]
rectWidth: any;
max : number;
dimensions : DOMRect;
outerPadding = 20;
padding = 0;
bandWidth = 0;
bandWidthCoef = 0.8 ; // = 80%

left= 10; right=20; bottom=30; top=15;
// margin = {
//   left: 10,
//   right: 20,
//   bottom: 30,
//   top: 15
// }

innerWidth : number;
innerHeight: number;

constructor(private _eleRef: ElementRef){}
ngOnInit(): void {
  const svg = this._eleRef.nativeElement.getElementsByTagName('svg')[0]
  this.dimensions = svg.getBoundingClientRect();
  this.innerWidth = this.dimensions.width  - this.left - this.right;
  this.innerHeight = this.dimensions.height - this.top - this.bottom;

  this.rectWidth = (this.innerWidth - 2 * this.outerPadding) / this.data.length;
  this.bandWidth  = this.bandWidthCoef * this.rectWidth;
  this.padding = (1 - this.bandWidthCoef) * this.rectWidth;
  this.max = 1.3 * Math.max(...this.data)
}
}
