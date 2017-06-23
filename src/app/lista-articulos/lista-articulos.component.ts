import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticuloService, Articulo, LoggerService } from '../shared/services/index';

@Component({
  selector: 'app-lista-articulos',
  templateUrl: './lista-articulos.component.html',
  styleUrls: ['./lista-articulos.component.css']
})
export class ListaArticulos implements OnInit {

  listaArticulos: Articulo[];
  constructor(private articuloService: ArticuloService, private log: LoggerService, private router: Router) { }

  ngOnInit() {
    this.recargarListaArticulos();
  }
  agregar(){
    let articulo: Articulo = new Articulo();
    articulo.idarticulo = -1;
    this.articuloService.articuloActual = articulo;
    this.router.navigate(['formularioArticulo']);
  }
  private recargarListaArticulos() {
    this.articuloService.getAll()
      .subscribe((articulo: Articulo[]) => {
        this.listaArticulos = articulo;
      })
  }
  editar() {
    if (this.articuloService.esArticuloExistente()) {
      this.router.navigate(['formularioArticulo']);
    } else {
      alert("Seleccionar un articulo!");
    }
  }
  delete() {
    if (this.articuloService.esArticuloExistente()) {
      this.articuloService.delete(this.articuloService.articuloActual).subscribe(() => {
        this.recargarListaArticulos();
      })
    } else {
      alert("Seleccionar un articulo!");
    }
  }

  onRowSelect(event) {
    this.articuloService.articuloActual = <Articulo>event.data;
  }

}
