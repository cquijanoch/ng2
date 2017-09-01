import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { ISiaf } from '../../interfaces/ISiaf';
import { IOrden } from '../../interfaces/IOrden';
import { ISiafToFirmar } from '../../interfaces/ISiafToFirmar';

@Injectable()
export class SiafToFirmarService {
    private _siafurl = 'src/app/data/siaf.json';
    private _ordenurl = 'src/app/data/orden.json';
    _siaf: any[] = [];
    _orden:  any[] = [];

    constructor(private _http: Http) { }

    getSiaf() {
        return this._http.get(this._siafurl)
            .map(res => res.json())
    }

    getOrden() {
        return this._http.get(this._ordenurl)
            .map(res => res.json())
    }

    getSiafWithOrden() {
        return Observable.forkJoin(
            this.getSiaf(),
            this.getOrden()
        ).map(res => this.join(res[0], res[1]))
    }

    join(_siaf, _orden) {
        return _siaf.map(siaf => {
            return _orden
                .filter(orden => orden.id_orden == siaf.id_orden)
                .map(orden => {
                    return {
                        id: siaf.id_siaf,
                        fecha: siaf.fecha,
                        monto: siaf.monto,
                        id_orden: siaf.id_orden,
                        nro_orden: orden.nro_orden
                    }
                })
        }).reduce((a, b) => {
            return a.concat(b);
        }, []);


      
    }
}