import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { UserService } from '../user/user.service';

declare const myFunc2: any;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {

  callFunc(){
    myFunc2();
  }

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    /* this.userService.getUsers()
    .subscribe(data => {
      console.log(data);
    }); */
    this.callFunc();
  }

}
