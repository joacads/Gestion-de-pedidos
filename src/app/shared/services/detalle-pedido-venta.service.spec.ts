import { TestBed, inject } from '@angular/core/testing';

import { DetallePedidoVentaService } from './detalle-pedido-venta.service';

describe('DetallePedidoVentaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetallePedidoVentaService]
    });
  });

  it('should ...', inject([DetallePedidoVentaService], (service: DetallePedidoVentaService) => {
    expect(service).toBeTruthy();
  }));
});
