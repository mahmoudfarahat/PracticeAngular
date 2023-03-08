import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.css']
})
export class ForkJoinComponent implements OnInit {

  schoolsCnt = 0;
  hospitalsCnt = 0;
  banksCnt = 0;
  isWidgetOneSpinner = false;
  isWidgetTwoSpinner = false;
  isWidgetThreeSpinner = false;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.isWidgetOneSpinner = true;
    this.isWidgetTwoSpinner = true;
    this.isWidgetThreeSpinner = true;
    this.getData();
  }
  getData() {
    // this.dataService.getWidgetOneData().subscribe((data) => {
    //   this.schoolsCnt = data;
    //   this.isWidgetOneSpinner = false;
    // });
    // this.dataService.getWidgetTwoData().subscribe((data) => {
    //   this.hospitalsCnt = data;
    //   this.isWidgetTwoSpinner = false;
    // });
    // this.dataService.getWidgetThreeData().subscribe((data) => {
    //   this.banksCnt = data;
    //   this.isWidgetThreeSpinner = false;
    // });

    this.dataService.getAllData().subscribe((res:any) => {
      this.schoolsCnt = res[0];
      this.hospitalsCnt = res[1];
      this.banksCnt = res[2];
      this.isWidgetOneSpinner = false;
      this.isWidgetTwoSpinner = false;
      this.isWidgetThreeSpinner = false;
    });
  }
}
