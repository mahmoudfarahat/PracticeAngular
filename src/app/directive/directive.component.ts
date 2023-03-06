import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {


  numberFromSameComponent = 50
  @ViewChild('myname') input:any;

array = ['1','2','3','4','5','6',]
  constructor() { }

  ngOnInit(): void {
  }

  target = 1


  scroll(el: HTMLElement) {
    console.log(el)
el.style.color = "red"
    el.scrollIntoView();
  }
}
