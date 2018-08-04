import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { HttpClient } from '../../node_modules/@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  date: string;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {

  }

  buttonTest(eventDate: any): void {
    let obs = this.http.get("https://slack.com/api/api.test")
      .subscribe((data: Test) => {
        console.log(data.ok);
      });
  }
}

class Test {
  public ok: string;
}
