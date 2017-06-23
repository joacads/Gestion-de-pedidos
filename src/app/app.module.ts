//ANGULAR
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//CUERPO TEMPLATE
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponenteComponent } from './header-componente/header-componente.component';
import { MenuLateralComponenteComponent } from './menu-lateral-componente/menu-lateral-componente.component';
import { FooterComponenteComponent } from './footer-componente/footer-componente.component';
import { ContenidoComponenteComponent } from './contenido-componente/contenido-componente.component';

//ADICION
import { DataTableModule, InputTextareaModule, PanelModule, DropdownModule, ButtonModule, DialogModule, ConfirmationService, ConfirmDialogModule, SharedModule, EditorModule, FileUploadModule, MenuItem, MenuModule } from 'primeng/primeng';

//COMPONENTES SISTEMA
import { ListaClientes } from './lista-clientes/lista-clientes.component';
import { FormularioCliente } from './formulario-cliente/formulario-cliente.component';
import { ListaPedidoVenta } from './lista-pedido-venta/lista-pedido-venta.component';
import { FormularioPedidoVenta } from './formulario-pedido-venta/formulario-pedido-venta.component';
import { ListaArticulos } from './lista-articulos/lista-articulos.component';
import { FormularioArticulo } from './formulario-articulo/formulario-articulo.component';
import { ListaRubros } from './lista-rubros/lista-rubros.component';
import { FormularioRubro } from './formulario-rubro/formulario-rubro.component';
import { ListaDetallePedidoVentaComponent } from './lista-detalle-pedido-venta/lista-detalle-pedido-venta.component';
import { FormularioDetallePedidoVentaComponent } from './formulario-detalle-pedido-venta/formulario-detalle-pedido-venta.component';

//SERVICIOS
import { ClienteService } from './shared/services/cliente.service'
import { PedidoVentaService } from './shared/services/pedido-venta.service'
import { ArticuloService } from './shared/services/articulo.service'
import { RubroService } from './shared/services/rubro.service';
import { DomicilioService } from './shared/services/domicilio.service';
import { DetallePedidoVentaService } from './shared/services/detalle-pedido-venta.service';

//
import { SDKBrowserModule } from './shared/services/lbsdk/index';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponenteComponent,
    MenuLateralComponenteComponent,
    FooterComponenteComponent,
    ContenidoComponenteComponent,
    ListaClientes,
    FormularioCliente,
    ListaPedidoVenta,
    FormularioPedidoVenta,
    ListaArticulos,
    FormularioArticulo,
    ListaRubros,
    FormularioRubro,
    ListaDetallePedidoVentaComponent,
    FormularioDetallePedidoVentaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule,
    DataTableModule,
    EditorModule,
    InputTextareaModule,
    PanelModule,
    DropdownModule,
    ButtonModule,
    DialogModule,
    FileUploadModule,
    BrowserAnimationsModule,
    ConfirmDialogModule,
    MenuModule,
    SDKBrowserModule.forRoot()
  ],
  providers: [
    ConfirmationService,
    ClienteService,
    PedidoVentaService,
    ArticuloService,
    RubroService,
    DomicilioService,
    DetallePedidoVentaService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
