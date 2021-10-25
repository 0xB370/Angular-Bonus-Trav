import { Component, OnInit } from '@angular/core';
import { Reserva } from '../reserva';
import { ReservaService } from '../reserva.service';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {

  headers = ['date', 'amount', 'destiny'];
  headersEsp = ['Fecha', 'Monto', 'Destino'];
  reservas = [];
  selectedReserva: Reserva;
  username: string;

  onSelect(reserva: Reserva): void {
    this.selectedReserva = reserva;
  }

  constructor(
    private reservaService: ReservaService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getUsername()
    .subscribe(data => {
      if (data.length > 0){
        this.username = data;
        this.reservaService.getBookingByUsername(this.username)
        .subscribe(data2 => {
          this.reservas = this.reservaService.displayDestino(data2);
        });
      }
    });
  }

}
