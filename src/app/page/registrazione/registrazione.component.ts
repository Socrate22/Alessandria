import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-registrazione',
  standalone: false,
  
  templateUrl: './registrazione.component.html',
  styleUrl: './registrazione.component.css'
})
export class RegistrazioneComponent {
  registrationForm: FormGroup;

  constructor() {
    this.registrationForm = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      cognome: new FormControl('', [Validators.required]),
      via: new FormControl(''),
      cap: new FormControl(''),
      telefono: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]{10}$'),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log('Dati registrazione:', this.registrationForm.value);
      alert('Registrazione completata con successo!');
      this.registrationForm.reset();
    } else {
      alert('Per favore, compila tutti i campi correttamente.');
    }
  }
}