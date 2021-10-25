import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ReservaService } from '../reserva.service';
import { Reserva } from '../reserva';

@Component({
  selector: 'app-reserva-detalle',
  templateUrl: './reserva-detalle.component.html',
  styleUrls: ['./reserva-detalle.component.css']
})
export class ReservaDetalleComponent implements OnInit {

  reserva: Reserva;
  id: number;
  alert = true;

  getReserva(): any {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.reservaService.getBooking(this.id)
      .subscribe(reserva => {
        this.reserva = this.reservaService.displayDestino(reserva);
      });
  }

  delete(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.reservaService.deleteBooking(this.id)
    .subscribe(reserva => console.log(`Borrada reserva ${this.id}`));
    alert('Reserva Cancelada');
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }

  closeAlert(): void {
    this.alert = false;
  }

  constructor(
    private reservaService: ReservaService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getReserva();
  }

}
