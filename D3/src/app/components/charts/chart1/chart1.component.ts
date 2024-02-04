import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrl: './chart1.component.css'
})
export class Chart1Component implements OnInit{
data = [120,250,350,650,50]
rectWidth: any;
max : number;
dimensions : DOMRect;''

constructor(private _eleRef: ElementRef){}
ngOnInit(): void {
  const svg = this._eleRef.nativeElement.getElementsByTagName('svg')[0]
  this.dimensions = svg.getBoundingClientRect();
  this.rectWidth = this.dimensions.width / this.data.length;
  this.max = 1.3 * Math.max(...this.data)
}
}
