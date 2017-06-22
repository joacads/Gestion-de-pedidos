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

//COMPONENTE PRIMENG
import { DataTableModule, InputTextareaModule, PanelModule, DropdownModule, ButtonModule, DialogModule, ConfirmationService, ConfirmDialogModule, SharedModule, EditorModule, FileUploadModule, MenuItem, MenuModule } from 'primeng/primeng';

//COMPONENTES SISTEMA
import { ListaClientes } from './lista-clientes/lista-clientes.component';

//SERVICIOS
import { ClienteService } from './shared/services/cliente.service'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponenteComponent,
    MenuLateralComponenteComponent,
    FooterComponenteComponent,
    ContenidoComponenteComponent,
    ListaClientes,
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
    //SDKBrowserModule.forRoot()
  ],
  providers: [
    ConfirmationService,
    ClienteService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
