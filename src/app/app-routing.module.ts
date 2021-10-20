import { HomeComponent } from './home/home.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './home/login/login.component';
import { NovoUsuarioComponent } from './home/novo-usuario/novo-usuario.component';
import { AuthGuard } from './guards/auth-guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'novousuario',
    component: NovoUsuarioComponent
  },
  {
    path: 'livros',
    loadChildren: () => import('./home/livros/livros.module').then((m) => m.LivrosModule),
    canActivate: [AuthGuard]
  },

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
