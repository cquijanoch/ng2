import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './componentsDash/dashboard/dashboard.component';
import { UserProfileComponent } from './componentsDash/user-profile/user-profile.component';
import { TableListComponent } from './componentsDash/table-list/table-list.component';
import { IconsComponent } from './componentsDash/icons/icons.component';
import { NotificationsComponent } from './componentsDash/notifications/notifications.component';
import { TableDemoComponent } from './myComponents/probando/prueba.component';
import { TablaToFirmarComponent } from './myComponents/tablaToFirmar/tablaToFirmar.component';
import { AlertDemoComponent } from './myComponents/modal/alertdemo.component';

import { RegistroSIAFComponent } from './myComponents/registroSIAF/registroSIAF.component';
import { ControlPrevioComponent } from './myComponents/control-previo/control-previo.component';
const routes: Routes =[
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'prueba',  component: TableDemoComponent },
    { path: 'modales',  component: AlertDemoComponent },
    { path: 'realizarFirma',  component: TablaToFirmarComponent },
    { path: 'registroSIAF',  component: RegistroSIAFComponent },
    { path: 'controlprevio',  component: ControlPrevioComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
