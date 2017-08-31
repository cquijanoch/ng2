import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
/* import { NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective } from 'ng2-table/ng2-table';
 */
import { AppComponent } from './app.component';

import { DashboardComponent } from './componentsDash/dashboard/dashboard.component';
import { UserProfileComponent } from './componentsDash/user-profile/user-profile.component';
import { TableListComponent } from './componentsDash/table-list/table-list.component';
import { IconsComponent } from './componentsDash/icons/icons.component';
import { NotificationsComponent } from './componentsDash/notifications/notifications.component';

import { TableDemoComponent } from './myComponents/probando/prueba.component';
//import { ModalTiny } from './myComponents/modal/modaltiny.component';
import { AlertDemoComponent } from './myComponents/modal/alertdemo.component';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { AlertComponent } from './myComponents/modal/alert.component';

import { Ng2TableModule } from 'ng2-table/ng2-table';
import { PaginationModule } from 'ng2-bootstrap/ng2-bootstrap'; 
import { TabsModule } from 'ng2-bootstrap/ng2-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    IconsComponent,
    NotificationsComponent,
    TableDemoComponent,
    AlertDemoComponent, 
    AlertComponent,     
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
  entryComponents:[AlertDemoComponent, AlertComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
