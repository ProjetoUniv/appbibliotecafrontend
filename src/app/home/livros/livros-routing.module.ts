import { LivrosComponent } from './livros.component';
import { CadastroLivrosComponent } from './cadastro-livros/cadastro-livros.component';
import { BuscarLivrosComponent } from './buscar-livros/buscar-livros.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: BuscarLivrosComponent,
  },
  {
    path: 'cadastro-livros',
    component: CadastroLivrosComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivrosRoutingModule {}
