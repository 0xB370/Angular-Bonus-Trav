import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { PagosComponent } from './pagos/pagos.component';
import { HttpClientModule } from '@angular/common/http';
import { ResaltarDirective } from './directives/resaltar.directive';
import { DomSeguroPipe } from './pipes/dom-seguro.pipe';
import { UserModule } from './user/user.module';
import { SharedModule } from './shared/shared.module';
import { ReservaModule } from './reserva/reserva.module';
import { SpDestinyComponent } from './destiny/sp-destiny/sp-destiny.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    FooterComponent,
    NosotrosComponent,
    PagosComponent,
    ResaltarDirective,
    DomSeguroPipe,
    SpDestinyComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    UserModule,
    SharedModule,
    ReservaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
