import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-electricity-bill',
  templateUrl: './electricity-bill.component.html',
  styleUrls: ['./electricity-bill.component.scss']
})
export class ElectricityBillComponent implements OnInit {

  elements: any = [
    {date: 1, amount: '20', action: 'Update', newAction: 'Delete'},
    {date: 2, amount: '40', action: 'Update', newAction: 'Delete'},
    {date: 3, amount: '60', action: 'Update', newAction: 'Delete'},
  ];

  headElements = ['Expenditure Date', 'Amount', 'Action'];
  
  constructor() { }

  ngOnInit(): void {
  }

}
