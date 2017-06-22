import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponenteComponent } from './header-componente/header-componente.component';
import { MenuLateralComponenteComponent } from './menu-lateral-componente/menu-lateral-componente.component';
import { FooterComponenteComponent } from './footer-componente/footer-componente.component';
import { ContenidoComponenteComponent } from './contenido-componente/contenido-componente.component';

import { DataTableModule, InputTextareaModule, PanelModule, DropdownModule, ButtonModule, DialogModule, ConfirmationService, ConfirmDialogModule, SharedModule, EditorModule, FileUploadModule, MenuItem, MenuModule } from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponenteComponent,
    MenuLateralComponenteComponent,
    FooterComponenteComponent,
    ContenidoComponenteComponent,
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
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
