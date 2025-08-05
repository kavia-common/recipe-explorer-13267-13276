import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';

/* global window */
  // PUBLIC_INTERFACE
  register() {
    // call auth service in future
    window.alert('Registration not implemented.');
  }
}
