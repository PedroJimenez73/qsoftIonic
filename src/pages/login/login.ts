import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Auth } from '../../providers/auth';
import { HelloIonicPage } from "../hello-ionic/hello-ionic";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  login: {username?: string, password?: string} = {};
  submitted = false;

  constructor(public navCtrl: NavController, private authService: Auth) {
  }

    onLogin(form) 
  {
    this.submitted = true;
    if (form.valid) 
    {
      this.authService.login(this.login).subscribe(() => {
            if(this.authService.isLoggedIn)
            {
              this.navCtrl.push(HelloIonicPage);
            }
            else
            {
              console.log('Error en la autenticación');
              //this._badCredentials();
            }
        }
      )
    }
  }



}
