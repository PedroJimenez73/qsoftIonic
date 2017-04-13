import { Component } from "@angular/core";
import { NavController, NavParams} from 'ionic-angular';
import { Proveedores } from '../../providers/proveedores';


@Component({
  selector: 'page-edicion',
  templateUrl: 'edicion.html'
})
export class EdicionPage {

proveedor: any;
  


 
  constructor(public nav: NavController, public proveedorService: Proveedores, public navParams: NavParams) {
    this.proveedor = navParams.get('proveedor');

  }
 
  



}