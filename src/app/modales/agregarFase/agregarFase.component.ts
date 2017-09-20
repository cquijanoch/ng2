import { Component } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
export interface ConfirmModel {
  title:string;
  message:string;
}
@Component({  
    selector: 'agregarFase',
    templateUrl: './agregarFase.component.html'
})
export class AgregarFase extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {
  title: string;
  message: string;
  constructor(dialogService: DialogService) {
    super(dialogService);
  }

  documento:number=1;
  documentos:Array<Object> = [
      {numero: 1, documento: "DNI"},
      {numero: 2, documento: "RUC"}
  ];

  toNumber(){
    //this.documento = +this.documento;
    console.log(this.documento);
  }

  confirm() {
    // we set dialog result as true on click on confirm button, 
    // then we can get dialog result from caller code 
    this.result = true;
    this.close();
  }
}