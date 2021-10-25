import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, LoginUser } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model = new User('', '', '');

  onSubmit(username: string, password: string, repeatPassword: string): void {
    const user = {username, password, repeatPassword};
    this.userService.addUser(user as User)
    .subscribe(data => {
      // Si el registro fue exitoso
      if (data.status === 'OK'){
        const loginUser = {
          username,
          password
        };
        this.userService.login(loginUser as LoginUser)
        .subscribe(data2 => {
          alert('Registro Exitoso');
          localStorage.setItem('id_token', data2.token);
          this.router.navigate(['']);
        });
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
