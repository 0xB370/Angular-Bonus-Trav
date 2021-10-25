import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sp-destiny',
  templateUrl: './sp-destiny.component.html',
  styleUrls: ['./sp-destiny.component.css']
})
export class SpDestinyComponent implements OnInit {

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
    /* console.log('SE VA A LOGGEAR LA URL');
    console.log(this.specific); */
  }

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getPath();
  }

}
