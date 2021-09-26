import { FormBuilder, FormGroup } from '@angular/forms';
import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Router } from '@angular/router';
import { NovoUsuarioService } from './../novo-usuario/novo-usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  email = '';
  password = '';

  constructor(private service: NovoUsuarioService,
    private router: Router, private formBuilder: FormBuilder,
    private authService: AutenticacaoService) {}

  ngOnInit(): void {}

  login() {
    if (this.email == '') {
      this.service.message('Campo email é obrigatório');
      return;
    }

    if (this.password == '') {
      this.service.message('Campo senha é obrigatório');
      return;
    }

    this.service
      .verificaEmaileSenhaExistente(this.email, this.password)
      .subscribe((resposta) => {
        if (resposta == true) {
          this.router.navigate(['livros']);
        } else {
          this.service.message('Dados Inválidos');
        }
      });
  }
}
