import { Component } from '@angular/core';
import 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['app.component.css']
})
export class DashboardComponent{
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
}
