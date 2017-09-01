import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { IcontrolPrevio } from './Icontrol-previo';

@Injectable()
export class ControlPrevioService{
    private controlPrevioLista:IcontrolPrevio[]=[
        {
            nroOrdenCompra: 12235,
            // nroExpediente: 130,
            proveedor: 1,
            // monto: 1000.00,
            fecha: "21/06/1988",
            observacion: "ninguna",
            estado: "A",
            boton: "<button class='btn btn-info' type='button' (click)=modalOrden()> <span class='glyphicon glyphicon-pencil'></span></button>",
        }
    ];
    //private _controlprevioUrl = "../app/data/controlPrevio.json";

    // constructor(private _http: Http){
    // }
    // getControlPrevio(): Observable<IcontrolPrevio[]>{
    //     return this._http.get(this._controlprevioUrl)
    //     .map((response:Response)=><IcontrolPrevio[]> response.json())
    //     .do(data => console.log(JSON.stringify(data)));
    // }
    constructor(){
     }
    getAllControlPrevio(){
        return this.controlPrevioLista;
    }
}
