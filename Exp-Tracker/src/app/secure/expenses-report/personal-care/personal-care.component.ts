import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-care',
  templateUrl: './personal-care.component.html',
  styleUrls: ['./personal-care.component.scss']
})
export class PersonalCareComponent implements OnInit {

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
