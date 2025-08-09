import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  estudiantes: any[] = [];

  estudianteForm = this.fb.group({
    dni: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
    nombre: ['', Validators.required],
    apellidos: ['', Validators.required],
    correo: ['', [Validators.required, Validators.email]],
    celular: ['', [Validators.required, Validators.pattern('^[0-9]{9}$')]]
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    if (this.estudianteForm.valid) {
      this.estudiantes.push(this.estudianteForm.value);
      this.estudianteForm.reset();
    }
  }
}
