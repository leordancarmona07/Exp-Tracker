import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form : FormGroup;
  constructor( 
    private fb : FormBuilder,
    private http : HttpClient,
    private router : Router
    ) {  }

  ngOnInit(): void {

    this.form = this.fb.group({
      email : '',
      password : ''
    });
  }

  submit(){
    const formData = this.form.getRawValue();
    const data = {
      username : formData.email,
      password : formData.password,
      grant_type : 'password',
      client_id : 4,
      client_secret : 'yhE1c3hEaphhbGH1CEFI3KZ62IiPzaCYqXPz2MAV',
      scope : '*'
    };
    this.http.post( 'http://localhost:8000/oauth/token', data).subscribe(
        (result: any)  => {
          localStorage.setItem('token', result.access_token);
          this.router.navigate(["secure"]); // CREATE SECURE COMPONENT
        },
        error => {
          console.log('error'),
          console.log(error);
          
        }
    )
    
  }

}
