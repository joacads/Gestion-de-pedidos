import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ListaArticulos } from '../lista-articulos/lista-articulos.component';
import { ArticuloService, Articulo, LoggerService } from '../shared/services/index';

@Component({
  selector: 'app-formulario-articulo',
  templateUrl: './formulario-articulo.component.html',
  styleUrls: ['./formulario-articulo.component.css']
})
export class FormularioArticulo implements OnInit {

  articulo: Articulo;
  articuloAux: Articulo;
  formularioArticulo: FormGroup;

  constructor(public fb: FormBuilder, private articuloService: ArticuloService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.formularioArticulo = this.fb.group({
      'denominacion': ['', [Validators.required,]],
      'codigo': ['', [Validators.required, Validators.pattern(/\d{1}/)]],
      'preciocompra': ['', [Validators.required]],
      'precioventa': ['', [Validators.required, Validators.pattern(/\d{1}/)]],
    });
    this.articulo = this.articuloService.articuloActual;
    this.articuloAux = new Articulo();
  }
  ngOnInit() {
  }

  volver() {
    this.router.navigate(['listaArticulos']);
  }

  save() {
    if (this.articulo.idarticulo == -1) {
      this.articulo.idarticulo = this.articuloAux.idarticulo;
      this.articuloService.create(this.articulo)
        .subscribe((articulo: Articulo) => {
          this.router.navigate(['listaArticulos']);
        })
    } else {
      this.articuloService.update(this.articulo)
        .subscribe((articulo: Articulo) => {
          this.router.navigate(['listaArticulos']);
        })
    }
  }
}
