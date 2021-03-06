import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmigosComponent } from './amigos/amigos.component';
import { ListaAmigosComponent } from './lista-amigos/lista-amigos.component';

@NgModule({
  declarations: [
    AppComponent,
    AmigosComponent,
    ListaAmigosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
