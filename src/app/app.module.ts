//CORE
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//TEMPLATE
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { FooterComponent } from './footer/footer.component';
import { ContenidoComponent } from './contenido/contenido.component';

//PRIMENG MODULES
import { DataTableModule, InputTextareaModule, PanelModule, DropdownModule, ButtonModule, DialogModule, ConfirmationService, ConfirmDialogModule, SharedModule, EditorModule, FileUploadModule, MenuItem, MenuModule } from 'primeng/primeng';

//COMPONENTS
import { ListaClientes } from './lista-clientes/lista-clientes.component';
import { FormularioCliente } from './formulario-cliente/formulario-cliente.component';
import { ListaPedidoVenta } from './lista-pedido-venta/lista-pedido-venta.component';
import { FormularioPedidoVenta } from './formulario-pedido-venta/formulario-pedido-venta.component';
import { ListaArticulos } from './lista-articulos/lista-articulos.component';
import { FormularioArticulo } from './formulario-articulo/formulario-articulo.component';
import { ListaRubros } from './lista-rubros/lista-rubros.component';
import { FormularioRubro } from './formulario-rubro/formulario-rubro.component';
import { FormularioDetallePedidoVentaComponent } from './formulario-detalle-pedido-venta/formulario-detalle-pedido-venta.component';

//SERVICES
import { ClienteService } from './shared/services/cliente.service'
import { PedidoVentaService } from './shared/services/pedido-venta.service'
import { ArticuloService } from './shared/services/articulo.service'
import { RubroService } from './shared/services/rubro.service';
import { DomicilioService } from './shared/services/domicilio.service';
import { DetallePedidoVentaService } from './shared/services/detalle-pedido-venta.service';
import { SingletonService } from './shared/services';

//SDK MODULE
import { SDKBrowserModule } from './shared/services/lbsdk/index';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuLateralComponent,
    FooterComponent,
    ContenidoComponent,
    ListaClientes,
    FormularioCliente,
    ListaPedidoVenta,
    FormularioPedidoVenta,
    ListaArticulos,
    FormularioArticulo,
    ListaRubros,
    FormularioRubro,
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
    DetallePedidoVentaService,
    SingletonService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
