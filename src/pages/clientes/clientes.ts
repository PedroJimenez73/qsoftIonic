import { Component } from "@angular/core";
import { NavController, ModalController } from 'ionic-angular';
import { Proveedores } from '../../providers/proveedores';
import { DetallesPage } from '../../pages/detalles/detalles';
import { EdicionPage } from '../../pages/edicion/edicion';
import { Addproveedor } from '../../pages/addproveedor/addproveedor';
import { Edicion2 } from '../edicion2';

@Component({
  selector: 'page-clientes',
  templateUrl: 'clientes.html'
})
export class ClientesPage {

  proveedores: any;
 
  constructor(public nav: NavController, public proveedorService: Proveedores, public modalCtrl: ModalController) {
  
  }
 
  ionViewDidLoad(){
 
    this.proveedorService.getProveedores().then((data) => {
      console.log(data);
      this.proveedores = data;
    });
 
  }

 

  verProveedor(proveedor){
    this.nav.push(DetallesPage, {proveedor: proveedor});
  }

  editarProveedor(proveedor){
    this.nav.push(EdicionPage, {proveedor: proveedor});
  }


  addProveedor(){
 
    let modal = this.modalCtrl.create(Addproveedor);
 
    modal.onDidDismiss(proveedor => {
      if(proveedor){
        this.proveedores.push(proveedor);
        this.proveedorService.createProveedor(proveedor);        
      }
    });
 
    modal.present();
 
  }

    updateProveedor(){
 
    let modal = this.modalCtrl.create(Edicion2);
 
    modal.onDidDismiss(proveedor => {
      if(proveedor){
        this.proveedores.push(proveedor);
        this.proveedorService.updateProveedor(proveedor);        
      }
    });
 
    modal.present();
 
  }

  

  deleteProveedor(proveedor){
 
    //Remove locally
      let index = this.proveedores.indexOf(proveedor);
 
      if(index > -1){
        this.proveedores.splice(index, 1);
      }   
 
    //Remove from database
    this.proveedorService.deleteProveedor(proveedor._id);
  }


}
