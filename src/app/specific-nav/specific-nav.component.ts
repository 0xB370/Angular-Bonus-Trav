import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { Observable } from 'rxjs';
// import { Location } from '@angular/common';

@Component({
  selector: 'app-specific-nav',
  templateUrl: './specific-nav.component.html',
  styleUrls: ['./specific-nav.component.css']
})
export class SpecificNavComponent implements OnInit {

  specific: string;

  getPath(): void{
    // De esta forma agarra las rutas del tipo 'detalle/[id]', la línea del else es para
    // que me reconozca el path de '/reservas', que en su router modular está como path:''
    let path: any;
    path = this.route.url;
    if (path.value[0]){
      this.specific = path.value[0].path;
    } else {
      this.specific = window.location.href.split('/').pop();
    }
  }

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getPath();
  }

}
