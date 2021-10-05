import { NovoUsuarioComponent } from './home/novo-usuario/novo-usuario.component';
import { LoginComponent } from './home/login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
        path: 'novousuario',
        component: NovoUsuarioComponent
  },
  {
    path: 'livros',
    loadChildren: () => import('./home/livros/livros.module').then((m) => m.LivrosModule),
 }

]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
