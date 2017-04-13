import { Component } from "@angular/core";
import { NavController, NavParams} from 'ionic-angular';
import { Cursos } from '../../providers/cursos';


@Component({
  selector: 'page-viewcurso',
  templateUrl: 'viewcurso.html'
})
export class ViewCursoPage {

  curso: any;


 
  constructor(public nav: NavController, public cursoService: Cursos, public navParams: NavParams) {
    this.curso = navParams.get('curso');

  }
 
  



}