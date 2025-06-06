import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Viaje {
  origen: string;
  destino: string;
  fechaSalida: string;
  fechaRegreso: string;
}

@Component({
  selector: 'app-ver-viajes',
  templateUrl: './ver-viajes.html',
  styleUrls: ['./ver-viajes.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class VerViajesComponent implements OnInit {
  viajes: Viaje[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.cargarViajes();
  }

  cargarViajes() {
    const viajesGuardados = localStorage.getItem('viajes');
    if (viajesGuardados) {
      try {
        this.viajes = JSON.parse(viajesGuardados);
      } catch (error) {
        console.error('Error al cargar los viajes:', error);
        this.viajes = [];
      }
    }
  }

  editarViaje(index: number) {
    this.router.navigate(['/nuevo-viaje'], { 
      queryParams: { 
        editIndex: index,
        viaje: JSON.stringify(this.viajes[index])
      }
    });
  }

  eliminarViaje(index: number) {
    if (confirm('¿Estás seguro de que deseas eliminar este viaje?')) {
      this.viajes.splice(index, 1);
      localStorage.setItem('viajes', JSON.stringify(this.viajes));
    }
  }
} 