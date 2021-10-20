import { Usuario } from './../../models/usuario';
import { Livros } from './../../models/livros';
import { SecurityService } from './../../util/security.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { NovoUsuarioService } from 'src/app/services/novo-usuario.service';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent {

  user$ = this.novoUsuarioService.retornaUsuario();

  @Output() public sidenavToggle = new EventEmitter();

  constructor(private novoUsuarioService: NovoUsuarioService) { }

    public onToggleSidenav = () => {
      this.sidenavToggle.emit();
    }

 ngOnInit(){
  this.novoUsuarioService

 }

 logout(){
   SecurityService.clear();
 }

}
