import { Component } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';


@Component({
    selector: 'modal-realizarFirma',
    templateUrl:'./modalrealizarFirma.component.html', 
    styles: [`
            .modal-dialog{
                width: 850px;
                height  : 350px;
            }
            .modal-body {
                width: 850px;
                height: 350px;
                overflow-y: auto;
            }
            `],

})
export class modalRealizarFirmaComponent extends DialogComponent<null,null>  {
    
    constructor(dialogService: DialogService) {
        super(dialogService);
        
    }
}

