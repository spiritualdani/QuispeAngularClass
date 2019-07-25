import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MensajeComponent } from './mensaje/mensaje.component';
import { MensajeService } from './servicios/mensaje.service';
import { HttpClientModule } from '@angular/common/http';
import { MensajeDirective } from './directivas/mensaje.directive';

@NgModule({
  declarations: [
    AppComponent,
    MensajeComponent,
    MensajeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule 
  ],
  providers: [MensajeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
