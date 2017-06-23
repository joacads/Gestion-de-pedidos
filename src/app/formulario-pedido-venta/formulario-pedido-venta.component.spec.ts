import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPedidoVentaComponent } from './formulario-pedido-venta.component';

describe('FormularioPedidoVentaComponent', () => {
  let component: FormularioPedidoVentaComponent;
  let fixture: ComponentFixture<FormularioPedidoVentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioPedidoVentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioPedidoVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
