import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../models/cliente.model';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
  clienteForm = this.fb.group({
    nombres: ['', Validators.required],
    apellidos: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    telefono: ['', Validators.required],
    mensaje: ['', Validators.required],
    dni: ['',Validators.required],
    direccion: ['',Validators.required]
  });

  enviado = false;
  errorMsg = '';

  constructor(private fb: FormBuilder, private clienteService: ClienteService) {}

  onSubmit() {
    if (this.clienteForm.valid) {
      const raw = this.clienteForm.value;
      const cliente: Cliente = {
        nombres: raw.nombres || '',
        apellidos: raw.apellidos || '',
        email: raw.email || '',
        telefono: raw.telefono || '',
        mensaje: raw.mensaje || '',
        dni: raw.dni || '',
        direccion: raw.direccion || ''
      };
      this.clienteService.registrarCliente(cliente).subscribe({
        next: () => {
          this.enviado = true;
          this.errorMsg = '';
          this.clienteForm.reset();
        },
        error: err => {
          this.errorMsg = 'Error al enviar el mensaje';
          this.enviado = false;
        }
      });
    }
  }
}
