import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoModule } from './componentes/cabecalho/cabecalho.module';
import { AutenticacaoService } from './home/login/autenticacao.service';
import { LoginComponent } from './home/login/login.component';
import { NovoUsuarioComponent } from './home/novo-usuario/novo-usuario.component';
import { SharedModule } from './shared/shared.module';


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
    SharedModule,

  ],
  providers: [AutenticacaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
