import { Router } from '@angular/router';
import { LivrosService } from './../livros.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Livros } from '../livros';

@Component({
  selector: 'app-cadastro-livros',
  templateUrl: './cadastro-livros.component.html',
  styleUrls: ['./cadastro-livros.component.css']
})
export class CadastroLivrosComponent implements OnInit {

bookForm!: FormGroup;
file! : File;
imgUrl: any;
mostrarImagem: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private livroService: LivrosService, private router: Router) { }

  ngOnInit(): void {
    this.bookForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      company: ['', [Validators.required]],
      author: ['', [Validators.required]],
      ageGroup: [''],
      positionShelf: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.maxLength(300)]],
      image: ['', [Validators.required]],
    });
  }

  cadastrar(){
    if(this.bookForm.invalid){
      return;
    }

    const novoBook = this.bookForm.getRawValue() as Livros;

    let booksLivros = "livro";
    let bookName = this.file.name;

    let nameImage = booksLivros.concat(bookName.toString());

    this.livroService.verificaLivroExistente(novoBook.title, nameImage).subscribe((resposta) => {
      if(resposta==true){
        this.livroService.message("Livro/Imagem já cadastrado no sistema");
        return;
      }else{
        this.livroService.cadastrarLivros(novoBook, this.file).subscribe(() => {
          this.livroService.message("Livro Cadastrado com sucesso!");
          this.router.navigate(['']);
        })
      }

    },(error) => {
      console.log(console.error());

    });

  }


  gravarArquivos(arquivo: any): void{
    const [file] = arquivo?.files;
    this.file = file;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event:any) => (
     this.imgUrl = reader.result,
     this.mostrarImagem = true

    )}
}
