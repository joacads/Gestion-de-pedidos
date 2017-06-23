import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDetallePedidoVentaComponent } from './formulario-detalle-pedido-venta.component';

describe('FormularioDetallePedidoVentaComponent', () => {
  let component: FormularioDetallePedidoVentaComponent;
  let fixture: ComponentFixture<FormularioDetallePedidoVentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioDetallePedidoVentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioDetallePedidoVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
