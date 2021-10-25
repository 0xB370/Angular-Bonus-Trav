import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservaRoutingModule } from './reserva-routing.module';
import { ReservasComponent } from './reservas/reservas.component';
import { NuevaReservaComponent } from './nueva-reserva/nueva-reserva.component';
import { ReservaDetalleComponent } from './reserva-detalle/reserva-detalle.component';
import { DatepickerBasicComponent } from '../datepicker-basic/datepicker-basic.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ReservasComponent,
    NuevaReservaComponent,
    ReservaDetalleComponent,
    DatepickerBasicComponent
  ],
  imports: [
    CommonModule,
    ReservaRoutingModule,
    NgbModule,
    SharedModule
  ]
})
export class ReservaModule { }
