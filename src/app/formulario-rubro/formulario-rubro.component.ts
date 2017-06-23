import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ListaRubros } from '../lista-rubros/lista-rubros.component';
import { RubroService, Rubro, LoggerService } from '../shared/services/index';

@Component({
  selector: 'app-formulario-rubro',
  templateUrl: './formulario-rubro.component.html',
  styleUrls: ['./formulario-rubro.component.css']
})
export class FormularioRubro implements OnInit {

  formularioRubro: FormGroup;
  private opcionRubros: Rubro[] = [];

  constructor(public fb: FormBuilder, private rubroService: RubroService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.formularioRubro = this.fb.group({
      'denominacion': ['', [Validators.required,]],
      'rubro': [null],
      'codigo': ['', [Validators.required, Validators.pattern(/\d{1}/)]],
    });
  }

  ngOnInit() {
    this.obtenerRubros();
  }

  volver() {
    this.router.navigate(['listaRubros']);
  }
  obtenerRubros() {
    this.rubroService.getAll()
      .subscribe((rubros: Rubro[]) => {
        this.opcionRubros = rubros;
      })
  }

  save() {
    
    console.log(this.rubroService.rubroActual.idrubro);
    if (this.rubroService.rubroActual.idrubro == null) {
      this.rubroService.create(this.rubroService.rubroActual)
        .subscribe((rubro: Rubro) => {
          this.router.navigate(['listaRubros']);
        })
    } else {
      this.rubroService.update(this.rubroService.rubroActual)
        .subscribe((rubro: Rubro) => {
          this.router.navigate(['listaRubros']);
        })
    }
  }
}
