import { AutenticacaoService } from './home/login/autenticacao.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'controleLivros';

mostrarMenu: boolean = false;

constructor(private authService: AutenticacaoService){}

ngOnInit(){
  this.authService.mostrarMenuEmitter.subscribe(
    mostrar => this.mostrarMenu = mostrar
  );

}

}
