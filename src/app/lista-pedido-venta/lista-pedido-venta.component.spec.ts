import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPedidoVentaComponent } from './lista-pedido-venta.component';

describe('ListaPedidoVentaComponent', () => {
  let component: ListaPedidoVentaComponent;
  let fixture: ComponentFixture<ListaPedidoVentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPedidoVentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPedidoVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
