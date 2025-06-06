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
    .form-container {
      max-width: 600px;
      margin: 2rem auto;
      padding: 2rem;
      border-radius: 20px;
      background: #e0e0e0;
      box-shadow: 10px 10px 20px #bebebe,
                 -10px -10px 20px #ffffff;
      font-family: 'Poppins', sans-serif;
    }

    h2 {
      color: #1e3c72;
      text-align: center;
      margin-bottom: 2rem;
      font-size: 1.8rem;
      font-weight: 600;
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    label {
      display: block;
      margin-bottom: 0.5rem;
      color: #1e3c72;
      font-weight: 500;
    }

    input {
      width: 100%;
      padding: 0.8rem;
      border: none;
      border-radius: 12px;
      background: #f5f5f5;
      box-shadow: inset 4px 4px 8px #bebebe,
                 inset -4px -4px 8px #ffffff;
      font-family: 'Poppins', sans-serif;
      font-size: 1rem;
      color: #333;
      box-sizing: border-box;
    }

    input:focus {
      outline: none;
      box-shadow: inset 6px 6px 10px #bebebe,
                 inset -6px -6px 10px #ffffff;
    }

    .buttons {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      margin-top: 2rem;
    }

    button {
      flex: 0 1 45%;
      padding: 0.8rem;
      border: none;
      border-radius: 12px;
      cursor: pointer;
      font-weight: 500;
      transition: all 0.3s ease;
      font-family: 'Poppins', sans-serif;
      color: white;
      font-size: 1rem;
    }

    .btn-submit {
      background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
      box-shadow: 4px 4px 8px rgba(30, 60, 114, 0.3),
                 -4px -4px 8px rgba(42, 82, 152, 0.3);
    }

    .btn-submit:hover:not(:disabled) {
      background: linear-gradient(135deg, #2a5298 0%, #1e3c72 100%);
      box-shadow: inset 4px 4px 8px rgba(30, 60, 114, 0.3),
                  inset -4px -4px 8px rgba(42, 82, 152, 0.3);
    }

    .btn-submit:disabled {
      background: #cccccc;
      cursor: not-allowed;
      opacity: 0.7;
    }

    .btn-cancel {
      background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
      box-shadow: 4px 4px 8px rgba(231, 76, 60, 0.3),
                 -4px -4px 8px rgba(192, 57, 43, 0.3);
    }

    .btn-cancel:hover {
      background: linear-gradient(135deg, #c0392b 0%, #e74c3c 100%);
      box-shadow: inset 4px 4px 8px rgba(231, 76, 60, 0.3),
                  inset -4px -4px 8px rgba(192, 57, 43, 0.3);
    }

    @media (max-width: 768px) {
      .form-container {
        margin: 1rem;
        padding: 1.5rem;
      }

      h2 {
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
      }

      .form-group {
        margin-bottom: 1rem;
      }

      input {
        padding: 0.6rem;
        font-size: 0.9rem;
      }

      .buttons {
        flex-direction: column;
        gap: 1rem;
      }

      button {
        width: 100%;
        flex: 1;
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