import { Component } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';

export interface DatosOrdenModel {
    title: string;
    ordcompra: string;
    proveedor: string;
    fecha: string;
    observacion: string;
}

@Component({
  selector: 'datosordenmodal',
  template: `<div class="modal-dialog">
                <div class="modal-content">
                   <div class="modal-header">
                     <button type="button" class="close" (click)="close()" >&times;</button>
                     <h4 class="modal-title">{{title || 'Alert!'}}</h4>
                   </div>
                   <div class="modal-body">
                     <div class="form-group form-black label-floating is-empty">
                         <label class="control-label">Orden de Compra</label>
                         <input type="text" class="form-control" >
                     </div>
                     <div class="form-group form-black label-floating is-empty">
                         <label class="control-label">Proveedor</label>
                         <input type="text" class="form-control" >
                     </div>
                     <div class="form-group form-black label-floating is-empty">
                         <label class="control-label">Fecha</label>
                         <input type="date" class="form-control" >
                     </div>
                     <div class="form-group form-black label-floating is-empty">
                         <label class="control-label">Observacion</label>
                         <textarea class="form-control" rows="5"></textarea>
                     </div>
                     <div class="form-group form-black label-floating is-empty">
                         <label class="control-label">Fecha</label>
                         <input type="date" class="form-control" >
                     </div>
                   </div>
                   <div class="modal-footer">
                        <button type="button" class="btn btn-primary" >Aprobar</button>
                        <button type="button" class="btn btn-primary" >Desaprobar</button>
                        <button type="button" class="btn btn-primary" (click)="close()">Guardar</button>
                   </div>
                </div>
             </div>`
})
export class DatosOrdenComponent extends DialogComponent<DatosOrdenModel, null> implements DatosOrdenModel {
    title: string;
    ordcompra: string;
    proveedor: string;
    fecha: string;
    observacion: string;

    constructor(dialogService: DialogService) {
    super(dialogService);
  }
}

