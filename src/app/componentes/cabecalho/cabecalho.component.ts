import { AutenticacaoService } from './../../home/login/autenticacao.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router'
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent {

  @Output() public sidenavToggle = new EventEmitter();

  constructor() { }

    public onToggleSidenav = () => {
      this.sidenavToggle.emit();
    }

 ngOnInit(){

 }

}
