import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { Proveedores } from '../providers/proveedores';
 
@Component({
  selector: 'page-edicion2',
  templateUrl: 'edicion2.html'
})
export class Edicion2 {
 
  proveedor: any;
  name: any;
  direction: any;
  
  
 
  constructor(public viewCtrl: ViewController, public proveedorService: Proveedores, public navParams: NavParams) {
     this.proveedor.name = navParams.get('proveedor.name');
     this.proveedor.direction = navParams.get('proveedor.direction');

  }
 
  save2(): void {
 
    let proveedor = {
      name: this.name,
      direction: this.direction,
    };
 
    this.viewCtrl.dismiss(proveedor);
 
  }
 
  close2(): void {
    this.viewCtrl.dismiss();
  }
}