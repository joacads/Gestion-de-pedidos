import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RubroService, Rubro, LoggerService } from '../shared/services/index';

@Component({
  selector: 'app-lista-rubros',
  templateUrl: './lista-rubros.component.html',
  styleUrls: ['./lista-rubros.component.css']
})
export class ListaRubros implements OnInit {

  listaRubros: Rubro[];
  constructor(private rubroService: RubroService, private log: LoggerService, private router: Router) { }

  ngOnInit() {
    this.recargarListaRubros();
  }
  private recargarListaRubros() {
    this.rubroService.getAll()
      .subscribe((rubros: Rubro[]) => {
        this.listaRubros = rubros;
      })
  }
  agregar(){
    let articulo: Rubro = new Rubro();
    articulo.idrubro = -1;
    this.rubroService.rubroActual = articulo;
    this.router.navigate(['formularioRubro']);
  }
  editar() {
    if (this.rubroService.esRubroExistente()) {
      this.router.navigate(['formularioRubro']);
    } else {
      alert("Seleccionar un rubro!");
    }
  }
  delete() {
    if (this.rubroService.esRubroExistente()) {
      this.rubroService.delete(this.rubroService.rubroActual).subscribe(() => {
        this.recargarListaRubros();
      })
    } else {
      alert("Seleccionar un rubro!");
    }
  }
  onRowSelect(event) {
    this.rubroService.rubroActual = <Rubro>event.data;
  }
}
