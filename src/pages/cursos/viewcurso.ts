import { Component } from "@angular/core";
import { NavController, NavParams, ViewController} from 'ionic-angular';
import { Cursos } from '../../providers/cursos';


@Component({
  selector: 'page-viewcurso',
  templateUrl: 'viewcurso.html'
})
export class ViewCursoPage {

  curso: any;


 
  constructor(public nav: NavController, public cursoService: Cursos, public navParams: NavParams, public viewCtrl: ViewController) {
    this.curso = navParams.get('curso');

  }
 
  close(): void {
    this.viewCtrl.dismiss();
  }



}