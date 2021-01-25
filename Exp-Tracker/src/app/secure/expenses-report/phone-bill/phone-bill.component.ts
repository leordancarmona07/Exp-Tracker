import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone-bill',
  templateUrl: './phone-bill.component.html',
  styleUrls: ['./phone-bill.component.scss']
})
export class PhoneBillComponent implements OnInit {

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
