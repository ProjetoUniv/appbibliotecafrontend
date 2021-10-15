import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { Livros } from './livros';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export  class LivrosService {

  constructor(private http: HttpClient, private snack: MatSnackBar) { }

 public getallBooks(){
   return this.http.get(`${API}/bibliotecainfantil/livrosbiblioteca`);

  }

  cadastrarLivros(livros: Livros, selectedImage?: File): Observable<Livros>{
    let observables = of({});

  return observables.pipe(
    switchMap(() => {
      return this.http.post<Livros>(`${API}/bibliotecainfantil/livrosbiblioteca`, livros);
    })
  )

  }

  verificaLivroExistente(isbn: string){
    return this.http.get(`${API}/bibliotecainfantil/livrosbiblioteca/${isbn}}`);
  }


  getLivroById(id: any): Observable<Livros>{
    const url = `${API}/bibliotecainfantil/livrosbiblioteca/detalhes/${id}`;
    return this.http.get<Livros>(url);
  }

  message(msg: String): void{
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 4000
    })
   }

   getImageForNameImage(nameImage: String): Observable<Livros>{
    const url = `${API}/bibliotecainfantil/images/${nameImage}`;
    return this.http.get<Livros>(url);
   }

   atualizarLivro(livros: Livros,selectedImage?: File ): Observable<Livros>{

    let observables = of({});

    if(selectedImage){
      observables = observables.pipe(
        switchMap(() => {

          if(livros.nameImage){
            return this.http.delete(`${API}/bibliotecainfantil/images/${livros.nameImage}`);
          }else{
            return of({});
          }
        }),

        switchMap(() => {
          livros.nameImage = selectedImage.name;

          const formData: FormData = new FormData();
          formData.append('pid', livros.nameImage);
          formData.append('file', selectedImage);

          return this.http.post(`${API}/bibliotecainfantil/images/`, formData, {
            responseType: 'text'
        })
      })
      );
    }

  return observables.pipe(
    switchMap(() => {
      return this.http.put<Livros>(`${API}/bibliotecainfantil/livrosbiblioteca`, livros);
    })
  )

   }


}




