import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecificNavComponent } from '../specific-nav/specific-nav.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SpecificNavComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SpecificNavComponent,
    NavBarComponent
  ]
})
export class SharedModule { }
