import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

import {Http} from '@angular/http';

import { Reported } from './Reported';
import { DashboardService } from './dashboard.service'

import 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['app.component.css'],
  providers: [DashboardService]
})
export class DashboardComponent implements OnInit{
  title = "this is a title"
  reported: Reported[]
  constructor(private dashboardService: DashboardService, private http: Http) {}
  // Donut Chart
  public doughnutChartLabels:string[] = ['Pending', 'Matches Found'];
  public doughnutChartData:number[] = [350, 450];
  public doughnutChartType:string = 'doughnut';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  ngOnInit(): void {
    this.getReported();
  }

  getReported(): void{
    this.dashboardService.getReported().then(reported => this.reported = reported);
  }

  submit(file){
    var file = file // get from file input;
    var backendUrl = 'localhost:5000/api/admin_upload'
    // var fd = new FormData();

    // fd.append('myFile', file, 'filename.ext');

    this.http.post(backendUrl, file, {
    // this cancels AngularJS normal serialization of request
    // this lets browser set `Content-Type: multipart/form-data`
    // header and proper data boundary
    })

  }
}
