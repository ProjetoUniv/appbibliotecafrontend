
import { LivrosRoutingModule } from './livros-routing.module';
import { BuscarLivrosComponent } from './buscar-livros/buscar-livros.component';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CadastroLivrosComponent } from './cadastro-livros/cadastro-livros.component';
import { LivrosComponent } from './livros.component';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [BuscarLivrosComponent, CadastroLivrosComponent, LivrosComponent ],
  imports: [
    CommonModule,
    LivrosRoutingModule,
    SharedModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule

  ]
})
export class LivrosModule { }
