
import { FormBuilder, FormGroup } from '@angular/forms';
import { AutenticacaoService } from './autenticacao.service';
import { Router } from '@angular/router';
import { NovoUsuarioService } from './../novo-usuario/novo-usuario.service';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Usuario } from './usuario/usuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

public users: Usuario = new Usuario();

 mostrarCabecalho: boolean = false;

  email = '';
  password = '';

  constructor(private service: NovoUsuarioService,
    private router: Router, private formBuilder: FormBuilder,
    private authService: AutenticacaoService) {}

  ngOnInit(): void {}

  login(users: Usuario) {
    if (users.email == '') {
      this.service.message('Campo email é obrigatório');
      return;
    }

    if (users.password == '') {
      this.service.message('Campo senha é obrigatório');
      return;
    }

    this.authService.autenticar(users);

  }
}
