import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viajes-nuevos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="form-container">
      <h2>Crear Nuevo Viaje</h2>
      <form (ngSubmit)="guardarViaje()" #viajeForm="ngForm">
        <div class="form-group">
          <label for="origen">Origen</label>
          <input 
            type="text" 
            id="origen" 
            name="origen" 
            [(ngModel)]="nuevoViaje.origen" 
            required
            placeholder="Ingrese el origen"
          >
        </div>

        <div class="form-group">
          <label for="destino">Destino</label>
          <input 
            type="text" 
            id="destino" 
            name="destino" 
            [(ngModel)]="nuevoViaje.destino" 
            required
            placeholder="Ingrese el destino"
          >
        </div>

        <div class="form-group">
          <label for="fechaSalida">Fecha de Salida</label>
          <input 
            type="date" 
            id="fechaSalida" 
            name="fechaSalida" 
            [(ngModel)]="nuevoViaje.fechaSalida" 
            required
          >
        </div>

        <div class="form-group">
          <label for="fechaRegreso">Fecha de Regreso</label>
          <input 
            type="date" 
            id="fechaRegreso" 
            name="fechaRegreso" 
            [(ngModel)]="nuevoViaje.fechaRegreso" 
            required
          >
        </div>

        <div class="form-actions">
          <button type="submit" class="btn-submit" [disabled]="!viajeForm.form.valid">
            <span class="icon">💾</span>
            Guardar Viaje
          </button>
          <button type="button" class="btn-cancel" (click)="cancelar()">
            <span class="icon">❌</span>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

    .form-container {
      max-width: 600px;
      margin: 0 auto;
      padding: 2rem;
      background: white;
      border-radius: 20px;
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
    }

    h2 {
      font-family: 'Poppins', sans-serif;
      color: #1e3c72;
      font-size: 2rem;
      margin-bottom: 2rem;
      text-align: center;
      font-weight: 600;
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    label {
      display: block;
      margin-bottom: 0.5rem;
      color: #1e3c72;
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      font-size: 1.1rem;
    }

    input {
      width: 100%;
      padding: 1rem;
      border: 2px solid #e0e0e0;
      border-radius: 12px;
      font-size: 1rem;
      font-family: 'Poppins', sans-serif;
      transition: all 0.3s ease;
      background: #f8f9fa;
    }

    input:focus {
      outline: none;
      border-color: #2a5298;
      box-shadow: 0 0 0 3px rgba(42, 82, 152, 0.1);
      background: white;
    }

    input::placeholder {
      color: #a0a0a0;
    }

    .form-actions {
      display: flex;
      gap: 1rem;
      margin-top: 2rem;
    }

    button {
      flex: 1;
      padding: 1rem;
      border: none;
      border-radius: 12px;
      font-family: 'Poppins', sans-serif;
      font-size: 1.1rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }

    .btn-submit {
      background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
      color: white;
    }

    .btn-submit:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(30, 60, 114, 0.2);
    }

    .btn-submit:disabled {
      background: #cccccc;
      cursor: not-allowed;
      opacity: 0.7;
    }

    .btn-cancel {
      background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
      color: white;
    }

    .btn-cancel:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(231, 76, 60, 0.2);
    }

    .icon {
      font-size: 1.2rem;
    }

    @media (max-width: 768px) {
      .form-container {
        padding: 1.5rem;
        margin: 0 1rem;
      }

      h2 {
        font-size: 1.75rem;
      }

      .form-actions {
        flex-direction: column;
      }

      button {
        width: 100%;
      }
    }

    @media (max-width: 480px) {
      .form-container {
        padding: 1rem;
      }

      h2 {
        font-size: 1.5rem;
      }

      input {
        padding: 0.8rem;
      }
    }
  `]
})
export class ViajesNuevosComponent {
  nuevoViaje = {
    origen: '',
    destino: '',
    fechaSalida: '',
    fechaRegreso: ''
  };

  constructor(private router: Router) {}

  guardarViaje() {
    const viajes = JSON.parse(localStorage.getItem('viajes') || '[]');
    viajes.push(this.nuevoViaje);
    localStorage.setItem('viajes', JSON.stringify(viajes));
    this.router.navigate(['/mis-viajes']);
  }

  cancelar() {
    this.router.navigate(['/mis-viajes']);
  }
} 