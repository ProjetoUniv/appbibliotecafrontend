import { AutenticacaoService } from './home/login/autenticacao.service';
import { NovoUsuarioComponent } from './home/novo-usuario/novo-usuario.component';
import { LoginComponent } from './home/login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [


  {
      path: '',
      component: LoginComponent
  },
  {
        path: 'novousuario',
        component: NovoUsuarioComponent
  },
  {
    path: 'livros',
    loadChildren: () => import('./home/livros/livros.module').then((m) => m.LivrosModule),
 },


]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
