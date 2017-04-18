import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { CursosPage } from '../cursos/cursos';
import { ProvesPage } from "../provee/provees";


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {

 
  constructor(public nav: NavController, public modalCtrl: ModalController) {
 
  }
 
  goToCursos() {
    this.nav.push(CursosPage);
  }

  goToProves() {
    this.nav.push(ProvesPage);
  }

}
