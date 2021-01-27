import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-table',
  templateUrl: './view-table.component.html',
  styleUrls: ['./view-table.component.scss']
})
export class ViewTableComponent implements OnInit {

  elements: any = [
    { userId: 1, first_name: 'Sample', last_name: 'Sample', email: 'sample@gmail.com',  action: 'View', newAction: 'Delete' },
    { userId: 2, first_name: 'Sample', last_name: 'Sample', email: 'sample@gmail.com', action: 'View', newAction: 'Delete' },
    { userId: 3, first_name: 'Sample', last_name: 'Sample', email: 'sample@gmail.com', action: 'View', newAction: 'Delete' },
  ];

  headElements = ['User Id', 'First Name', 'Last Name', 'Email', 'Action'];
  constructor() { }

  ngOnInit(): void {
  }

}
