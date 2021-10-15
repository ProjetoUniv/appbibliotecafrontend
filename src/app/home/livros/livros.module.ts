import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { SharedModule } from './../../shared/shared.module';
import { DetalheLivrosComponent } from './../livros/detalhe-livros/detalhe-livros.component';
import { BuscarLivrosComponent } from './buscar-livros/buscar-livros.component';
import { CadastroLivrosComponent } from './cadastro-livros/cadastro-livros.component';
import { LivrosRoutingModule } from './livros-routing.module';
import { LivrosComponent } from './livros.component';
import { LivrosService } from './livros.service';
import { AlterarLivrosComponent } from './alterar-livros/alterar-livros.component';


@NgModule({
  declarations: [BuscarLivrosComponent, CadastroLivrosComponent, LivrosComponent, DetalheLivrosComponent, AlterarLivrosComponent],
  imports: [
    CommonModule,
    FormsModule,
    LivrosRoutingModule,
    SharedModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatAutocompleteModule,
  ],
  exports:[LivrosComponent],
  providers: [LivrosService]
})
export class LivrosModule { }
