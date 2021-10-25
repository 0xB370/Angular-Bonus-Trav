import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { IndexComponent } from './index/index.component';
import { PagosComponent } from './pagos/pagos.component';
import { AuthGuard } from './guards/auth.guard';
import { SpDestinyComponent } from './destiny/sp-destiny/sp-destiny.component'

const routes: Routes = [
  { path: 'user', loadChildren: () => import('./user/user-routing.module').then(m => m.UserRoutingModule) },
  { path: 'reservas', loadChildren: () => import('./reserva/reserva-routing.module')
  .then(m => m.ReservaRoutingModule), canActivate: [ AuthGuard ] },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'pagos', component: PagosComponent },
  { path: 'italia', component: SpDestinyComponent },
  { path: 'new-york', component: SpDestinyComponent },
  { path: 'resis', component: SpDestinyComponent },
  { path: 'austria', component: SpDestinyComponent },
  { path: 'grecia', component: SpDestinyComponent },
  { path: '', component: IndexComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
