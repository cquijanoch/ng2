import {Component, OnInit} from '@angular/core';
import {TableData} from '../tabla/table-data';
import { ListarOrdenesComponent } from '../../modales/listarOrdenes/listarOrdenes.component';
import { DialogService } from "ng2-bootstrap-modal";

@Component({
  selector: 'table-SIAF',
  templateUrl: './registroSIAF.component.html'
  })
  export class RegistroSIAFComponent implements OnInit {

    siaf: Array<any> = [
      {
          "id_siaf": 1,
          "nro_expediente": 20,
          "id_orden": 0,
          "fase": "C",
          "certificado_anual": 0,
          "tipo_documento": 0,
          "nro_documento": 0,
          "fecha_documento": 0,
          "monto": 10,
          "estado": "A",
          "id_usuario1": 0,
          "id_usuario2": 0
      },
      {
        "id_siaf": 2,
        "nro_expediente": 30,
        "id_orden": 0,
        "fase": "C",
        "certificado_anual": 0,
        "tipo_documento": 0,
        "nro_documento": 0,
        "fecha_documento": 0,
        "monto": 100,
        "estado": "A",
        "id_usuario1": 0,
        "id_usuario2": 0
    }
  ];

    public rows:Array<any> = [];
    public columns:Array<any> = [
      {title: 'Nro Expediente', name: 'nro_expediente'},
      {title: 'Nro Orden', name: 'id_orden'},
      {title: 'Fase', name: 'fase'},
      {title: 'Certificado', name: 'certificado_anual'},
      {title: 'Tipo Documento', name: 'tipo_documento'},
      {title: 'Nro Documento', name: 'nro_documento'},
      {title: 'Monto', name: 'monto'},
      {title: 'Estado', name: 'estado'}
      
      /* ,
      {
        title: 'Position',
        name: 'position'
      },
      {title: 'Office', name: 'office'},
      {title: 'Extn.', name: 'ext'},
      {title: 'Start date', name: 'startDate'},
      {title: 'Salary ($)', name: 'salary'} */
    ];
    public page:number = 1;
    public itemsPerPage:number = 5;
    public maxSize:number = 5;
    public numPages:number = 1;
    public length:number = 0;
  
    public config:any = {
      paging: true,
      sorting: {columns: this.columns},
      filtering: {filterString: ''},
      className: ['table-striped', 'table-bordered']
    };
  
    private data:Array<any> = this.siaf;
  
    public constructor(private dialogService:DialogService) {
      this.length = this.data.length;
    }
  
    public ngOnInit():void {
      this.onChangeTable(this.config);
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
    }

    public onDoubleClick(data:any): any {
      console.log('double click');
    }

    buscarOrden() {
      let disposable = this.dialogService.addDialog(ListarOrdenesComponent, {
          title:'Listado de Órdenes', 
          message:'Selecciona una orden'})
          .subscribe((isConfirmed)=>{
              //We get dialog result
              if(isConfirmed) {
                  alert('Acepto');
              }
              else {
                  alert('No Acepto');
              }
          });
      //We can close dialog calling disposable.unsubscribe();
      //If dialog was not closed manually close it by timeout
      // setTimeout(()=>{
      //     disposable.unsubscribe();
      // },10000);
  }
  }