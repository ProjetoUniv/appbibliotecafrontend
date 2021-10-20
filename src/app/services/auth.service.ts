import { SecurityService } from 'src/app/util/security.service';

import { Usuario } from '../models/usuario';
import { Router } from '@angular/router';
import { NovoUsuarioService } from '../services/novo-usuario.service';
import { EventEmitter, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuarioAutenticado: boolean = false;

  enable: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private usuarioService: NovoUsuarioService, private router: Router) { }

  autenticar(users: Usuario):void{
    this.usuarioService.verificaEmaileSenhaExistente(users.email, users.password).subscribe((resposta) => {
    if(resposta == true){
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['livros']);
    }else{
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
      this.usuarioService.message('Dados Inválidos');
      this.router.navigate(['']);
    }
   })
}


  canActivate(){
     const usuario = SecurityService.getUser();
      if(usuario){
        this.usuarioAutenticado = true;
        this.mostrarMenuEmitter.emit(true);
        this.router.navigate(['livros']);
      }else{
        this.usuarioAutenticado = false;
        this.mostrarMenuEmitter.emit(false);
        this.usuarioService.message('Dados Inválidos');
        this.router.navigate(['login']);
      }
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }

}
