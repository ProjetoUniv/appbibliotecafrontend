import { Router } from '@angular/router';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { Livros } from './../livros';
import { LivrosService } from './../livros.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-buscar-livros',
  templateUrl: './buscar-livros.component.html',
  styleUrls: ['./buscar-livros.component.css']
})
export class BuscarLivrosComponent implements AfterViewInit {

  livros: Livros[] = [];
 displayedColumns: string [] =  ['isbn','title','author','company', 'actions'];
 dataSource = new MatTableDataSource<Livros>();

 @ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;


  constructor(private livroService: LivrosService, private router: Router){
    this.livros = [];
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.getAllBooks();
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

}



