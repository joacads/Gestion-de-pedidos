import { TestBed, inject } from '@angular/core/testing';

import { PedidoVentaService } from './pedido-venta.service';

describe('PedidoVentaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PedidoVentaService]
    });
  });

  it('should ...', inject([PedidoVentaService], (service: PedidoVentaService) => {
    expect(service).toBeTruthy();
  }));
});
