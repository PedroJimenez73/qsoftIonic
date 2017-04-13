import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
 
@Component({
  selector: 'page-addproveedor',
  templateUrl: 'addproveedor.html'
})
export class Addproveedor {
 
  name: any;
  direction: any;
 
  constructor(public viewCtrl: ViewController) {
 
  }
 
  save(): void {
 
    let proveedor = {
      name: this.name,
      direction: this.direction,
    };
 
    this.viewCtrl.dismiss(proveedor);
 
  }
 
  close(): void {
    this.viewCtrl.dismiss();
  }
}