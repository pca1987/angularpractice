import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  date: string;

  constructor() {
  } 

  ngOnInit(): void {
    let myDate: string = "2018-07-21 16:01:09 +0";

    this.date = moment(myDate).toLocaleString();
  }
}
