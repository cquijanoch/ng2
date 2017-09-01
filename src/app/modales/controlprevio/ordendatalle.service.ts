import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { IOrdenDetalle } from './ordendetalle';

@Injectable()
export class OrdenDetalleService {
   private _ordendetalleurl='../../data/ordenDetalle.json';
   constructor(private _http: Http){}
   
   getOrdenDetalles(): Observable<IOrdenDetalle[]> {
      return this._http.get(this._producturl)
      .map((response: Response) => <IProduct[]> response.json())
      .do(data => console.log(JSON.stringify(data)));
   }
}
