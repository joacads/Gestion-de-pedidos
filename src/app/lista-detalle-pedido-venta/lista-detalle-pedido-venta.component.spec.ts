import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDetallePedidoVentaComponent } from './lista-detalle-pedido-venta.component';

describe('ListaDetallePedidoVentaComponent', () => {
  let component: ListaDetallePedidoVentaComponent;
  let fixture: ComponentFixture<ListaDetallePedidoVentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDetallePedidoVentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDetallePedidoVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
