import { Usuario } from './usuario/usuario';
import { Router } from '@angular/router';
import { NovoUsuarioService } from './../novo-usuario/novo-usuario.service';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

 usuarioAutenticado: boolean = false;

  enable: boolean = false;

  mostrarMenuEmitter : EventEmitter<boolean> = new EventEmitter();

  constructor(private httpClient: HttpClient,
    private usuarioService: NovoUsuarioService,
    private router: Router) { }


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
      }
     })
  }

}
