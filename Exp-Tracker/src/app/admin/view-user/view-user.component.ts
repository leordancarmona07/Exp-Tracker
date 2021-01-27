import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {

  public chartType: string = 'line';

  public chartDatasets: Array<any> = [
    // { data: [65, 59, 80, 81, 56, 55, 40, 80, 81, 56, 55, 40], label: 'Status' },
    { data: [28, 48, 40, 19, 86, 27, 90, 80, 81, 56, 55, 200], label: 'Expenses' }
  ];

  public chartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(0, 10, 130, .7)',
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true,
    title: {
      display: true,
      text: 'User Activities',
      fontSize: 17
    }
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

  constructor() { }

  ngOnInit(): void {
  }

}
