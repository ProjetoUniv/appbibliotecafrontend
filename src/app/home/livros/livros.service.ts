import { MatSnackBar } from '@angular/material/snack-bar';
import { Livros } from './livros';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { observable, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  constructor(private http: HttpClient, private snack: MatSnackBar) { }

  cadastrarLivros(livros: Livros, selectedImage?: File): Observable<Livros>{
    let observables = of({});
    let books = "livros";

    if(selectedImage){
      observables = observables.pipe(
        switchMap(() => {
          if(!livros.nameImage){
            livros.nameImage = selectedImage.name;
          }

          const formData: FormData = new FormData();
          formData.append('pid', livros.nameImage);
          formData.append('file', selectedImage);

          return this.http.post(`${API}/bibliotecainfantil/images/`, formData, {
            responseType: 'text'
          });
        })

      )
    }

  return observables.pipe(
    switchMap(() => {
      return this.http.post<Livros>(`${API}/bibliotecainfantil/livrosbiblioteca`, livros);
    })
  )

  }

  verificaLivroExistente(title: string, nameImage: string){
    return this.http.get(`${API}/bibliotecainfantil/livrosbiblioteca/${title}/${nameImage}`);
  }

  message(msg: String): void{
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 4000
    })
   }


}




