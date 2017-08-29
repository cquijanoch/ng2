import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
/* import { NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective } from 'ng2-table/ng2-table';
 */

import { ConfirmComponent } from './modales/confirm/confirm.component';
import { AppComponent } from './app.component';

import { DashboardComponent } from './componentsDash/dashboard/dashboard.component';
import { UserProfileComponent } from './componentsDash/user-profile/user-profile.component';
import { TableListComponent } from './componentsDash/table-list/table-list.component';
import { IconsComponent } from './componentsDash/icons/icons.component';
import { NotificationsComponent } from './componentsDash/notifications/notifications.component';

import { TableDemoComponent } from './myComponents/probando/prueba.component';

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
    ConfirmComponent,
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
    BootstrapModalModule,
RouterModule,
    AppRoutingModule
  ],
  entryComponents: [
    ConfirmComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
