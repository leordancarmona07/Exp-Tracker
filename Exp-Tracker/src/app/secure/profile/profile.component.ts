import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  elements: any = [
    // { user: 'Photo:', value: '', action: ''},
    { user: 'Name:', value: 'Eva Rain Ramirez'},
    { user: 'Username:', value: 'Eva Rain Ramirez'},
    { user: 'Password:', value: '******'}
  ];
  
  
  headElements = 'Photo';

  constructor() { }

  ngOnInit(): void {
  }

}
