import { Routes } from '@angular/router';
import { ViajesNuevosComponent } from './components/viajes-nuevos/viajes-nuevos.component';
import { VerViajesComponent } from './components/ver-viajes/ver-viajes';

export const routes: Routes = [
  { path: '', redirectTo: 'mis-viajes', pathMatch: 'full' },
  { path: 'mis-viajes', component: VerViajesComponent },
  { path: 'nuevo-viaje', component: ViajesNuevosComponent },
  { path: '**', redirectTo: 'mis-viajes' }
];
