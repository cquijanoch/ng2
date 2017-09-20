import { Component } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";

import { TableData } from '../../myComponents/tabla/table-data';

export interface ConfirmModel {
    title: string;
    message: string;
}

@Component({
    selector: 'modal-listarOrdenes',
    templateUrl: './listarOrdenes.component.html',
    styles: [`
    .modal-dialog{
        width: 850px;
        height  : 350px;
        overflow-y: initial !important
    }
    .modal-body {
        width: 850px;
        overflow-y: auto;
      }
  `],
})
export class ListarOrdenesComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {
    title: string;
    message: string;

    orden: Array<any> = [
        {
            "id_orden": 1,
            "nro_orden": 77,
            "id_proveedor": 0,
            "fecha": "2017/08/08",
            "observacion": "",
            "id_ord_det": 0,
            "id_articulo": 0,
            "id_unidad": 0,
            "cantidad": 0,
            "precio_unitario": 0,
            "valor_venta": 0,
            "meta": 15,
            "partida": "2.1.1.2.3.1"
        },
        {
            "id_orden": 2,
            "nro_orden": 78,
            "id_proveedor": 10,
            "fecha": "2017/09/08",
            "observacion": "segundo",
            "id_ord_det": 0,
            "id_articulo": 0,
            "id_unidad": 0,
            "cantidad": 1,
            "precio_unitario": 10,
            "valor_venta": 10,
            "meta": 115,
            "partida": "2.1.1.2.3.2"
        }
    ];

    //tabla
    //private data: Array<any> = TableData;
    private data: Array<any> = this.orden;

    public rows: Array<any> = [];
    public columns: Array<any> = [
        { title: 'Nro Orden', name: 'nro_orden' },
        { title: 'Id Proveedor', name: 'id_proveedor', sort: false },
        { title: 'Fecha', className: ['office-header', 'text-success'], name: 'fecha' },
        { title: 'Observacion', name: 'observacion', sort: '' , filtering: {filterString: '', placeholder: 'Filtrar por Observacion'}},
        { title: 'Cantidad', className: 'text-warning', name: 'cantidad' },
        { title: 'Precio Unitario', name: 'precio_unitario', sort: '' },
        { title: 'Meta', name: 'meta', sort: '' },
        { title: 'Partida', name: 'partida', filtering: {filterString: '', placeholder: 'Filtrar por Partida'}}
    ];
    public page: number = 1;
    public itemsPerPage: number = 5;
    public maxSize: number = 5;
    public numPages: number = 1;
    public length: number = 0;

    public config: any = {
        paging: true,
        sorting: { columns: this.columns },
        filtering: { filterString: '' },
        className: ['table-striped', 'table-bordered']
    };

    constructor(dialogService: DialogService) {
        super(dialogService);

        //informacion de tabla
        this.length = this.data.length;
    }
    confirm() {
        // we set dialog result as true on click on confirm button, 
        // then we can get dialog result from caller code 
        this.result = true;
        this.close();
    }

    // Informacion para la tabla

    public ngOnInit(): void {
        this.onChangeTable(this.config);
    }

    public changePage(page: any, data: Array<any> = this.data): Array<any> {
        let start = (page.page - 1) * page.itemsPerPage;
        let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
        return data.slice(start, end);
    }

    public changeSort(data: any, config: any): any {
        if (!config.sorting) {
            return data;
        }

        let columns = this.config.sorting.columns || [];
        let columnName: string = void 0;
        let sort: string = void 0;

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
        return data.sort((previous: any, current: any) => {
            if (previous[columnName] > current[columnName]) {
                return sort === 'desc' ? -1 : 1;
            } else if (previous[columnName] < current[columnName]) {
                return sort === 'asc' ? -1 : 1;
            }
            return 0;
        });
    }

    public changeFilter(data: any, config: any): any {
        let filteredData: Array<any> = data;
        this.columns.forEach((column: any) => {
            if (column.filtering) {
                filteredData = filteredData.filter((item: any) => {
                    return item[column.name].match(column.filtering.filterString);
                });
            }
        });

        if (!config.filtering) {
            return filteredData;
        }

        if (config.filtering.columnName) {
            return filteredData.filter((item: any) =>
                item[config.filtering.columnName].match(this.config.filtering.filterString));
        }

        let tempArray: Array<any> = [];
        filteredData.forEach((item: any) => {
            let flag = false;
            this.columns.forEach((column: any) => {
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

    public onChangeTable(config: any, page: any = { page: this.page, itemsPerPage: this.itemsPerPage }): any {
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

}