import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User, LoginUser } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = 'http://localhost:3000/api/user';
  private loginUrl = 'http://localhost:3000/api/session/login';
  private usernameUrl = 'http://localhost:3000/api/session/getUsername';

  /** GET users from the server */
  getUsers(): Observable<any> {
    return this.http.get(this.usersUrl)
    .pipe(
      catchError(this.handleError<any>('getUsers', []))
    );
  }

  /** POST user to the server */
  addUser(user: User): Observable<any> {
    return this.http.post(this.usersUrl, user)
    .pipe(
      catchError(this.handleError<any>('postUser', []))
    );
  }

  login(loginUser: LoginUser): any {
    return this.http.post(this.loginUrl, loginUser)
    .pipe(
      catchError(this.handleError<any>('login', []))
    );
  }

  getUsername(): any {
    const token = this.getSession();
    const httpOptions = {
      headers: new HttpHeaders({ authorization: token })
    };
    return this.http.post(this.usernameUrl, '', httpOptions)
    .pipe(
      catchError(this.handleError<any>('getUsername', []))
    );
  }

  getIdByUsername(username): any {
    const token = this.getSession();
    const httpOptions = {
      headers: new HttpHeaders({ authorization: token })
    };
    return this.http.get(this.usersUrl + `/username/${username}`, httpOptions)
    .pipe(
      catchError(this.handleError<any>('getUsername', []))
    );
  }

  getSession(): string{
    return localStorage.getItem('id_token');
  }

  logout(): void{
    localStorage.removeItem('id_token');
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // console.warn(error); // log to console instead
      if (error.error){
        if ((error.error === 'jwt malformed') || (error.error === 'jwt expired') || (error.error === 'invalid token')){
          console.log('%cENTRA EN EL CONDICIONAL', 'color: orangered');
          this.logout();
        }
        if (error.error.status === 'Fail'){
          alert(error.error.data);
        }
      }
      return of(result as T);
    };
  }

  constructor(
    private http: HttpClient
  ) { }
}
