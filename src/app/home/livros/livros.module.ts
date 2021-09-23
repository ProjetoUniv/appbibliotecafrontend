import { LivrosRoutingModule } from './livros-routing.module';
import { LoginComponent } from './../login/login.component';
import { HomeRoutingModule } from './../home-routing.module';
import { HomeComponent } from './../home.component';
import { BuscarLivrosComponent } from './buscar-livros/buscar-livros.component';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [BuscarLivrosComponent],
  imports: [
    CommonModule,
    LivrosRoutingModule,
    SharedModule
  ]
})
export class LivrosModule { }
