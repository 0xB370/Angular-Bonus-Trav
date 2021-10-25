import { Component, OnInit } from '@angular/core';
// Si no dejo el CommonModule no me reconoce el *nfIf del component.html
import { CommonModule } from '@angular/common';
// Si no dejo el RouterModule no me reconoce el routerlink del component.html
// https://stackoverflow.com/questions/42162130/angular-2-how-do-you-import-routerlink-exclusively
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  token: string;
  username: any;

  logout(): void {
    this.userService.logout();
    this.router.navigate([''])
    .then(() => {
      window.location.reload();
    });
  }

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.token = this.userService.getSession();
    this.userService.getUsername()
    .subscribe(data => {
      if (data.length > 0){
        this.username = data;
      }
    });
  }

}
