import { Component, OnInit } from '@angular/core';
import { Reserva } from '../reserva';
import { ReservaService } from '../reserva.service';
import { DestinyService } from '../../destiny/destiny.service';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-nueva-reserva',
  templateUrl: './nueva-reserva.component.html',
  styleUrls: ['./nueva-reserva.component.css']
})

export class NuevaReservaComponent implements OnInit {

  model = new Reserva(null, null, null, null);
  submitted = false;
  destinies = [];
  username: string;
  userId: number;

  addItem(newItem: any) {
    this.model.date = newItem;
  }

  onSubmit(date: string, destiny: string): void {
    // console.log(date);
    // const fecha = `${date.month}/${date.day}/${date.year}`;
    const arr = date.split('-');
    const fecha = `${arr[1]}/${arr[2]}/${arr[0]}`;
    const newDate = new Date(fecha);
    let amount: number;
    if (destiny === '1'){
      amount = 10000.00;
    } else
    if (destiny === '2'){
      amount = 50000.00;
    }
    if (destiny === '5'){
      amount = 20000.00;
    }
    if (destiny === '6'){
      amount = 15000.00;
    }
    if (destiny === '7'){
      amount = 8000000.00;
    }
    const reserva = {
      date: newDate,
      amount,
      destiny: Number(destiny),
      usuario: this.userId
    };
    console.log(reserva as Reserva);
    this.reservaService.addBooking(reserva as Reserva)
    .subscribe(data => {
      console.log(data);
    });
    this.submitted = true;
  }

  constructor(
    private reservaService: ReservaService,
    private destinyService: DestinyService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.destinyService.getDestinies()
    .subscribe(data => {
      this.destinies = data;
      console.log(data);
    });
    this.userService.getUsername()
    .subscribe(data => {
      this.username = data;
      this.userService.getIdByUsername(this.username)
      .subscribe(data2 => {
        this.userId = data2.user_id;
      });
    });
  }

}
