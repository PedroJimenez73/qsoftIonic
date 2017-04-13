import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Proveedores } from '../../providers/proveedores';


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {

  proveedores: any;
 
  constructor(public nav: NavController, public proveedorService: Proveedores, public modalCtrl: ModalController) {
 
  }
 
  ionViewDidLoad(){
 
    this.proveedorService.getProveedores().then((data) => {
      console.log(data);
      this.proveedores = data;
    });
 
  }
}
