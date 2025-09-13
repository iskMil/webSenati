import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DocenteService } from '../services/docente.service';
import { Docente } from '../models/docente.model';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.css']
})
export class DocenteComponent {
  docenteForm = this.fb.group({
    nombre: ['', Validators.required],
    apellidos: ['', Validators.required],
    direccion: ['', Validators.required],
    enabled: [true, Validators.required]
  });

  enviado = false;
  errorMsg = '';

  constructor(private fb: FormBuilder, private docenteService: DocenteService) {}

  onSubmit() {
    if (this.docenteForm.valid) {
      const raw = this.docenteForm.value;
      const docente: Docente = {
        nombre: raw.nombre || '',
        apellido: raw.apellidos || '',
        direccion: raw.direccion || '',
        enabled: raw.enabled === true
      };
      this.docenteService.registrarDocente(docente).subscribe({
        next: () => {
          this.enviado = true;
          this.errorMsg = '';
          this.docenteForm.reset({ enabled: true });
        },
        error: err => {
          this.errorMsg = 'Error al enviar el formulario';
          this.enviado = false;
        }
      });
    }
  }
}
