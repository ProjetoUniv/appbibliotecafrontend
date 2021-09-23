import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { NovoUsuario } from './novo-usuario';
import { MatSnackBar } from '@angular/material/snack-bar';


const API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  cadastrarNovoUsuario(novoUsuario: NovoUsuario){
    return this.http.post(`${API}/bibliotecainfantil/usuarios`, novoUsuario);
  }

  verificaEmailExistente(email: string){
    return this.http.get(`${API}/bibliotecainfantil/usuarios/email/${email}`)
  }

  verificaEmaileSenhaExistente(email: string, password: string){
    return this.http.get(`${API}/bibliotecainfantil/usuarios/email/${email}/password/${password}`)
  }

  message(msg: String): void{
    this.snackBar.open(`${msg}`, 'OK', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 4000
    })
   }
}
