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

  rubro: Rubro;
  rubroAux: Rubro;
  formularioRubro: FormGroup;

  rubroSeleccionado: Rubro = new Rubro();

  constructor(public fb: FormBuilder, private rubroService: RubroService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.formularioRubro = this.fb.group({
      'denominacion': ['', [Validators.required,]],
      'codigo': ['', [Validators.required, Validators.pattern(/\d{1}/)]],
    });
    this.rubro = this.rubroService.rubroActual;
    this.rubroAux = new Rubro();
  }

  ngOnInit() {
    this.obtenerRubros();
  }

  volver() {
    this.router.navigate(['listaRubros']);
  }
  private opcionRubro: Rubro[] = [];
  obtenerRubros() {
    this.rubroService.getAll()
      .subscribe((rubros: Rubro[]) => {
        this.opcionRubro = rubros;
      })
  }
  
  save() {
    if (this.rubro.idrubro == -1) {
      this.rubro.idrubro = this.rubroAux.idrubro;
      this.rubroService.create(this.rubro)
        .subscribe((rubro: Rubro) => {
          this.router.navigate(['listaRubros']);
        })
    } else {
      this.rubroService.update(this.rubro)
        .subscribe((rubro: Rubro) => {
          this.router.navigate(['listaRubros']);
        })
    }
  }
}
