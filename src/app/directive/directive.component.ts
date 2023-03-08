import { DataService } from './../services/data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

channelName =''
  numberFromSameComponent = 50
  @ViewChild('myname') input:any;

array = ['1','2','3','4','5','6',]
  constructor(private route:ActivatedRoute, private dataService:DataService) { }

  ngOnInit(): void {

    // this.dataService.getData().subscribe((res)=>{
    //   console.log(res)
    //   this.channelName =res
    // })
    this.route.data.subscribe(res => {

      this.channelName=res['data']
    })
  }

  target = 1


  scroll(el: HTMLElement) {
    console.log(el)
el.style.color = "red"
    el.scrollIntoView();
  }
}
