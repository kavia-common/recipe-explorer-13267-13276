import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

/* global window */
  // PUBLIC_INTERFACE
  login() {
    // call auth service in future
    // stub
    window.alert('Login not implemented.');
  }
}
