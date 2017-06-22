import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaClientes } from './lista-clientes.component';

describe('ListaClientes', () => {
  let component: ListaClientes;
  let fixture: ComponentFixture<ListaClientes>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaClientes ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaClientes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
