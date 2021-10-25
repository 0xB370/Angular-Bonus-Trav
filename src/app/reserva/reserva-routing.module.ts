import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservasComponent } from './reservas/reservas.component';
import { NuevaReservaComponent } from './nueva-reserva/nueva-reserva.component';
import { ReservaDetalleComponent } from './reserva-detalle/reserva-detalle.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  { path: '', component: ReservasComponent },
  { path: 'nueva', component: NuevaReservaComponent },
  { path: 'detalle/:id', component: ReservaDetalleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservaRoutingModule { }
