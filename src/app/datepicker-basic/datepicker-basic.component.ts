import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
// Si no dejo el NgbModule no me reconoce el ngbDatepicker del component.html
import {NgbModule, NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
// Si no dejo el FormsModule no me reconoce la directiva ngModel del component.html
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-datepicker-basic',
  templateUrl: './datepicker-basic.component.html'
})
export class DatepickerBasicComponent implements OnInit {

  @Input() modelo: any;

  @Output() newItemEvent = new EventEmitter<any>();

  model: NgbDateStruct;
  today = this.calendar.getToday();
  // hoy = `${this.today.year}-${this.today.month}-${this.today.day}`;
  hoy = this.formatDate(this.today);

  /* get today() {
    return this.dateAdapter.toModel(this.ngbCalendar.getToday())!;
  } */

  formatDate(fecha: any): string {
    const {day, month, year} = fecha;
    return `${year}-${month}-${day}`;
  }

  addNewItem(value: any) {
    this.newItemEvent.emit(value);
  }

  constructor(
    private calendar: NgbCalendar
    ) {}
  
  ngOnInit(): void {
  }

}
