import { SharedModule } from './shared/shared.module';
import { NovoUsuarioComponent } from './home/novo-usuario/novo-usuario.component';
import { LoginComponent } from './home/login/login.component';
import { CabecalhoModule } from './componentes/cabecalho/cabecalho.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AutenticacaoService } from './home/login/autenticacao.service';


@NgModule({
  declarations: [AppComponent, LoginComponent, NovoUsuarioComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule,
    CabecalhoModule,
    SharedModule

  ],
  providers: [AutenticacaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
