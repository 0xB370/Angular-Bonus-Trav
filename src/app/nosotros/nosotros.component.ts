import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {
  videoUrl = 'https://www.youtube.com/embed/EtCgvm4nMII';

  constructor() { }

  ngOnInit(): void {
  }

}
