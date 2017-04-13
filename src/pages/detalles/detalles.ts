import { Component } from "@angular/core";
import { NavController, NavParams} from 'ionic-angular';
import { Proveedores } from '../../providers/proveedores';


@Component({
  selector: 'page-detalles',
  templateUrl: 'detalles.html'
})
export class DetallesPage {

  proveedor: any;


 
  constructor(public nav: NavController, public proveedorService: Proveedores, public navParams: NavParams) {
    this.proveedor = navParams.get('proveedor');

  }
 
  



}