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
}
