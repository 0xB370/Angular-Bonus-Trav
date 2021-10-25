import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { Observable, Subscription } from 'rxjs';
// import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.userService.getUsername()
    .map(data => {
      if (data.length > 2){
        return true;
      }
      this.router.navigateByUrl('/login');
    });
    /* const sesion = this.userService.getSession();
    if (sesion){
      return true;
    }
    this.router.navigateByUrl('/login'); */
  }
}
