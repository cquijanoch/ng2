import { Component } from '@angular/core';
import { AlertComponent } from './alert.component';
import { DialogService } from "ng2-bootstrap-modal";

//import Timer = NodeJS.Timer;

@Component({
  selector: 'app',
  template: `<div class="container" >
  <h1 class="text-center">ng2-bootstrap-modal demo</h1>
  <br>
  <br>
  <div class="row">
    <div class="col-sm-4 text-right">
      <b>Alert example: </b>
    </div>
    <div class="col-sm-4">
      <button class="btn btn-default btn-block" (click)=showAlert()>Show alert</button>
    </div>
  </div>
  <br>
  <br>
    <br>
  
  <div class="row">
    <div class="col-sm-4 text-right">
      <b>Close dialog by click outside example: </b>
    </div>
    <div class="col-sm-4">
      <button class="btn btn-default btn-block" (click)=showAlert2()>Show alert</button>
    </div>
  </div>
  <br>
  <br>
  <div class="row">
    <div class="col-sm-4 text-right">
      <b>Close dialog by timeout example: </b>
    </div>
    <div class="col-sm-4">
      <button class="btn btn-default btn-block" (click)=showAlert3()>Show alert</button>
    </div>
  </div>
  <br>
  <br>
  <div class="row">
    <div class="col-sm-4 text-right">
      <b>Custom backdrop color example: </b>
    </div>
    <div class="col-sm-4">
      <button class="btn btn-default btn-block" (click)=showAlert4()>Show alert</button>
    </div>
  </div>
  <br>
  <br>
</div>
  `
})
export class AlertDemoComponent {
  confirmResult:boolean = null;
  promptMessage:string = '';

  constructor(private dialogService:DialogService) {}

  showAlert() {
    this.dialogService.addDialog(AlertComponent, {title:'Alert title!', message:'Alert message!!!'});
  }

  showAlert2() {
    this.dialogService.addDialog(AlertComponent, { message:'Click outside to close dialog' }, { closeByClickingOutside:true });
  }

  showAlert3() {
    this.dialogService.addDialog(AlertComponent, { message:'Wait 5 seconds and dialog will be closed automatically' }, { autoCloseTimeout:5000 });
  }

  showAlert4() {
    this.dialogService.addDialog(AlertComponent, { message:'Dialog with red backdrop' }, { backdropColor: 'rgba(255, 0, 0, 0.5)' });
  }

}

