import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Reserva } from './reserva';
import { DestinyService } from '../destiny/destiny.service';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  private bookingUrl = 'http://localhost:3000/api/booking';  // URL to web api

  /** GET bookings from the server */
  getBookings(): Observable<any> {
    const httpOptions = this.setHeaders();
    return this.http.get(this.bookingUrl, httpOptions)
    .pipe(
      catchError(this.handleError<any>('getBookings', []))
    );
  }

  /** POST booking to the server */
  addBooking(reserva: Reserva): Observable<any> {
    const httpOptions = this.setHeaders();
    return this.http.post(this.bookingUrl, reserva, httpOptions)
    .pipe(
      catchError(this.handleError<any>('addBooking', []))
    );
  }

  /** GET single booking from the server */
  getBooking(id: number): Observable<any> {
    const httpOptions = this.setHeaders();
    return this.http.get(this.bookingUrl + `/${id}`, httpOptions)
    .pipe(
      catchError(this.handleError<any>('getBooking', []))
    );
  }

  /** GET bookings for user from the server */
  getBookingByUsername(username: string): Observable<any> {
    const httpOptions = this.setHeaders();
    return this.http.get(this.bookingUrl + `/user/${username}`, httpOptions)
    .pipe(
      catchError(this.handleError<any>('getBookingByUsername', []))
    );
  }

  /** DELETE: delete a booking from the server */
  deleteBooking(id: number): Observable<any> {
    const httpOptions = this.setHeaders();
    const url = `${this.bookingUrl}/${id}`;
    return this.http.delete(url, httpOptions).pipe(
      catchError(this.handleError<any>('deleteBooking', []))
    );
  }

  setHeaders(){
    const token = localStorage.getItem('id_token');
    return {
      headers: new HttpHeaders({ 'authorization': token })
    };
  }

  displayDate(fecha: any): string{
    const partial = fecha.split('T')[0];
    const arr = partial.split('-');
    return `${arr[2]}/${arr[1]}/${arr[0]}`;
  }

  displayDestino(arr): any{
    if (arr.length > 1){
      for (const elto of arr){
        this.destinyService.getDestiny(Number(elto.destiny))
        .subscribe(destino => {
          elto.destiny = destino.name;
          elto.date = this.displayDate(elto.date);
        });
      }
    } else {
      this.destinyService.getDestiny(Number(arr.destiny))
      .subscribe(destino => {
        arr.destiny = destino.name;
        arr.date = this.displayDate(arr.date);
      });
    }
    return arr;
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  constructor(
    private http: HttpClient,
    private destinyService: DestinyService
  ) { }
}
