import { Component, OnInit } from '@angular/core';
import { TablaToFirmarComponent } from '../tablaToFirmar/tablaToFirmar.component';
import { SiafToFirmarService } from '../../services/RealizarFirma/siaf.service'
@Component({
    selector: 'realizar-firma',
    templateUrl: './realizarFirma.component.html',
    entryComponents: [TablaToFirmarComponent],
    providers: [SiafToFirmarService]
})

export class RealizarFirmaComponent implements OnInit
{
    events: any[] = [];

    constructor(private _siaf: SiafToFirmarService) {
    }

    public ngOnInit(): void {


        this._siaf.getSiafWithOrden()
        .subscribe(events =>{
          this.events = events;
        }, error=>{
          console.log( error );
        })
    }
}