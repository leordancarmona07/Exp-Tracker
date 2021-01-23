import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Exp-Tracker';
  loggedIn = true;

constructor(){}
  ngOnInit(){
      this.loggedIn = localStorage.getItem('token') !== null;
  }

  logout(){
    localStorage.removeItem('token');
    this.loggedIn = false

  }
}
