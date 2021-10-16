import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertModalService } from './../../../shared/alert-modal.service';
import { Router } from '@angular/router';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';

import { Livros } from './../livros';
import { LivrosService } from './../livros.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DialogComponent } from 'src/app/componentes/dialog/dialog.component';

@Component({
  selector: 'app-buscar-livros',
  templateUrl: './buscar-livros.component.html',
  styleUrls: ['./buscar-livros.component.css']
})
export class BuscarLivrosComponent implements AfterViewInit {

 show: boolean = false;
 mensagem = "Deseja excluir este livro ?";
 livros: Livros[] = [];
 displayedColumns: string [] =  ['isbn','title','author','company', 'actions'];
 dataSource = new MatTableDataSource<Livros>();


@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;


  constructor(private livroService: LivrosService, private router: Router,
    private dialogService: AlertModalService){
    this.livros = [];
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.getAllBooks();
    this.show = true;
  }

  getAllBooks(){
    this.livroService.getallBooks().subscribe(resposta => this.dataSource.data=resposta as Livros []);
  }

  abrirDetalhes(id: number){
    this.router.navigate([`/livros/detalhes-livros/${id}`]);

  }

  abrirAlterar(id: number){
    this.router.navigate([`/livros/alterar-livros/${id}`]);

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

  }

  excluir(id: any){
    this.dialogService.openConfirmDialog("Você deseja excluir esse livro ?")
    .afterClosed().subscribe((resp) => {
     if(resp == true){
       this.livroService.deletarLivros(id).subscribe(() => {
        this.livroService.message("Livro excluido com sucesso!");
        this.getAllBooks();
        this.show = false;
        setTimeout(() => {
          this.show = true;
          this.getAllBooks()
        }, 100);
       })
     }
    }, (error) => {
      console.log(error);
    });
  }


}



