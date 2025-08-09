import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  estudianteForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.estudianteForm = this.fb.group({
      dni: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      celular: ['', [Validators.required, Validators.pattern(/^\d{9}$/)]]
    });
  }

  onSubmit() {
    if (this.estudianteForm.valid) {
      console.log('Datos enviados:', this.estudianteForm.value);
      alert('Registro exitoso');
      this.estudianteForm.reset();
    }
  }
}
