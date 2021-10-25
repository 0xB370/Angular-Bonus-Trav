import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

declare const myFunc: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  callFunc(){
    myFunc();
  }

  constructor() { }

  ngOnInit(): void {
    this.callFunc();
  }

}
