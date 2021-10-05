

import { CabecalhoModule } from './../componentes/cabecalho/cabecalho.module';
import { AutenticacaoService } from './login/autenticacao.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component'
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent, NovoUsuarioComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    SharedModule,
    CabecalhoModule,
  ],
  providers:[AutenticacaoService],
  exports: [HomeComponent],
})
export class HomeModule { }
