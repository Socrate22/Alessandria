import { Component } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: false,
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public loginForm: FormGroup;

  constructor() {

    this.loginForm = new FormGroup({
      biblioNumber: new FormControl ('', [Validators.required, Validators.minLength(3), Validators.maxLength(6)]),
      password: new FormControl ('', [Validators.required, Validators.minLength(6)]),
    });
  }
 
  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log("tutto ok" ,this.loginForm.value);
    } else {
      console.error('Form non valido');
    }
  }
}
