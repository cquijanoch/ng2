import {Component, OnInit} from '@angular/core';
import { TableData } from '../tabla/table-data';
import { ConfirmComponent } from '../../modales/confirm/confirm.component';
import { DatosOrdenComponent } from '../../modales/controlprevio/modalcontrolprevio.component';
import { DialogService } from "ng2-bootstrap-modal";

import { IcontrolPrevio } from '../../services/ControlPrevio/Icontrol-previo';
import {ControlPrevioService} from '../../services/ControlPrevio/control-previo.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Component({
  selector: 'Control-previo',
  templateUrl: './control-previo.component.html',
  providers: [ControlPrevioService]
  })
export class ControlPrevioComponent implements OnInit {
  icontrolprevio: IcontrolPrevio[];
  controlprevioMostrar: IcontrolPrevio[] = [];

  public rows:Array<any> = [];
  // public columns:Array<any> = [
  //   {title: 'Name', name: 'name', filtering: {filterString: '', placeholder: 'Filter by name'}},
  //   {title: 'Position',name: 'position',sort: false,filtering: {filterString: '', placeholder: 'Filter by position'}},
  //   {title: 'Office', className: ['office-header', 'text-success'], name: 'office', sort: 'asc'},
  //   {title: 'Extn.', name: 'ext', sort: '', filtering: {filterString: '', placeholder: 'Filter by extn.'}},
  //   {title: 'Start date', className: 'text-warning', name: 'startDate'},
  //   {title: 'Salary ($)', name: 'salary'}
  //   // {title: '', name: 'actionEdit', sort:false, className: 'accepter-col-action'}
  // ];
  
  public columns: Array<any> = [
    {title: 'nroOrdenCompra', name: 'nroOrdenCompra'},
    // {title: 'nroExpediente', name: 'nroExpediente'},
    {title: 'proveedor', name: 'proveedor'},
    // {title: 'monto', name: 'monto'},
    {title: 'fecha date', name: 'fecha'},
    {title: 'observacion', name: 'observacion'},
    {title: 'estado', name: 'estado'},
     {title: 'boton', name: 'boton'},
  ];
  
  public page:number = 1;
  public itemsPerPage:number = 10;
  public maxSize:number = 5;
  public numPages:number = 1;
  public length:number = 0;
  public config:any = {
    paging: true,
    sorting: {columns: this.columns},
    filtering: {filterString: ''},
    className: ['table-striped', 'table-bordered']
  };
  // private data:Array<any> = TableData;
  private data:Array<any>;
  
  public constructor(private dialogService:DialogService, private _controlPrevioService:ControlPrevioService) { 
    this.controlprevioMostrar= this._controlPrevioService.getAllControlPrevio();
    this.data = this.controlprevioMostrar;
    this.length = this.data.length;
  }
  public ngOnInit(): void {
    this.onChangeTable(this.config);
    // this._controlPrevioService.getControlPrevio()
    // .subscribe(icontrolprevio => this.icontrolprevio = icontrolprevio);
    
    
  }



  public changePage(page:any, data:Array<any> = this.data):Array<any> {
    let start = (page.page - 1) * page.itemsPerPage;
    let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
    return data.slice(start, end);
  }

  public changeSort(data:any, config:any):any {
    if (!config.sorting) {
      return data;
    }

    let columns = this.config.sorting.columns || [];
    let columnName:string = void 0;
    let sort:string = void 0;

    for (let i = 0; i < columns.length; i++) {
      if (columns[i].sort !== '' && columns[i].sort !== false) {
        columnName = columns[i].name;
        sort = columns[i].sort;
      }
    }

    if (!columnName) {
      return data;
    }

    // simple sorting
    return data.sort((previous:any, current:any) => {
      if (previous[columnName] > current[columnName]) {
        return sort === 'desc' ? -1 : 1;
      } else if (previous[columnName] < current[columnName]) {
        return sort === 'asc' ? -1 : 1;
      }
      return 0;
    });
  }

  public changeFilter(data:any, config:any):any {
    let filteredData:Array<any> = data;
    this.columns.forEach((column:any) => {
      if (column.filtering) {
        filteredData = filteredData.filter((item:any) => {
          return item[column.name].match(column.filtering.filterString);
        });
      }
    });

    if (!config.filtering) {
      return filteredData;
    }

    if (config.filtering.columnName) {
      return filteredData.filter((item:any) =>
        item[config.filtering.columnName].match(this.config.filtering.filterString));
    }

    let tempArray:Array<any> = [];
    filteredData.forEach((item:any) => {
      let flag = false;
      this.columns.forEach((column:any) => {
        if (item[column.name].toString().match(this.config.filtering.filterString)) {
          flag = true;
        }
      });
      if (flag) {
        tempArray.push(item);
      }
    });
    filteredData = tempArray;

    return filteredData;
  }

  public onChangeTable(config:any, page:any = {page: this.page, itemsPerPage: this.itemsPerPage}):any {
    if (config.filtering) {
      Object.assign(this.config.filtering, config.filtering);
    }

    if (config.sorting) {
      Object.assign(this.config.sorting, config.sorting);
    }

    let filteredData = this.changeFilter(this.data, this.config);
    let sortedData = this.changeSort(filteredData, this.config);
    this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
    this.length = sortedData.length;
  }

  public onCellClick(data: any): any {
    console.log(data);
    this.modalOrden();
  }

  modalOrden() {
    this.dialogService.addDialog(DatosOrdenComponent, { title:'Datos de Orden' }, { backdropColor: 'rgba(80,80, 80, 0.5)' });
}
}
