import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUser } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model = new LoginUser('', '');
  token: string;
  public username: string;
  videoUrl = 'https://www.youtube.com/embed/EtCgvm4nMII';

  login(username: string, password: string): void {
    const loginUser = {username, password};
    this.userService.login(loginUser as LoginUser)
    .subscribe(data => {
      // console.log(JSON.stringify(data));
      if (data.token){
        this.token = data.token;
        this.username = data.username;
        localStorage.setItem('id_token', this.token);
        this.router.navigate(['']);
      }
    });
  }

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
