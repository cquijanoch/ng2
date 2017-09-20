import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
/* import { NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective } from 'ng2-table/ng2-table';
 */

import { ConfirmComponent } from './modales/confirm/confirm.component';
import { AppComponent } from './app.component';

import { DashboardComponent } from './componentsDash/dashboard/dashboard.component';
import { UserProfileComponent } from './componentsDash/user-profile/user-profile.component';
import { TableListComponent } from './componentsDash/table-list/table-list.component';
import { IconsComponent } from './componentsDash/icons/icons.component';
import { NotificationsComponent } from './componentsDash/notifications/notifications.component';

import { ControlPrevioComponent } from './myComponents/control-previo/control-previo.component';
import { TableDemoComponent } from './myComponents/probando/prueba.component';
import { TablaToFirmarComponent } from './myComponents/tablaToFirmar/tablaToFirmar.component';
import { RealizarFirmaComponent } from "./myComponents/realizarFirma/realizarFirma.component"
//import { ModalTiny } from './myComponents/modal/modaltiny.component';
import { AlertDemoComponent } from './myComponents/modal/alertdemo.component';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { AlertComponent } from './myComponents/modal/alert.component';
import {DatosOrdenComponent} from './modales/controlprevio/modalcontrolprevio.component';
import { modalRealizarFirmaComponent } from './modales/realizarFirma/modalrealizarFirma.component';  

import { RegistroSIAFComponent } from './myComponents/registroSIAF/registroSIAF.component';
import { ListarOrdenesComponent } from './modales/listarOrdenes/listarOrdenes.component';
import { AgregarFase } from './modales/agregarFase/agregarFase.component';

import { Ng2TableModule } from 'ng2-table/ng2-table';
import { PaginationModule } from 'ng2-bootstrap/ng2-bootstrap'; 
import { TabsModule } from 'ng2-bootstrap/ng2-bootstrap';

//Servicios
import {ControlPrevioService }from './services/ControlPrevio/control-previo.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    IconsComponent,
    NotificationsComponent,
    TableDemoComponent,
    TablaToFirmarComponent,
    AlertDemoComponent, 
    AlertComponent,     
    ConfirmComponent,
    DatosOrdenComponent,
    RegistroSIAFComponent,
    ListarOrdenesComponent,
    AgregarFase,
    ControlPrevioComponent,
    DatosOrdenComponent,
    modalRealizarFirmaComponent,
    RealizarFirmaComponent,
    /* NgTableComponent,
    NgTableFilteringDirective,
    NgTablePagingDirective,
    NgTableSortingDirective, */

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    Ng2TableModule,
    PaginationModule.forRoot(),
    TabsModule,
    RouterModule,
    AppRoutingModule,
    BootstrapModalModule, 

  ],
  entryComponents:[AlertDemoComponent, AlertComponent, ConfirmComponent,ListarOrdenesComponent,AgregarFase,DatosOrdenComponent,modalRealizarFirmaComponent],
  providers: [
    ControlPrevioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
