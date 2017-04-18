import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

//import { Storage } from '@ionic/storage';


@Injectable()
export class Auth
{
    isLoggedIn: boolean = false;

    constructor()
    {

    }

    login(login)
    {
        return Observable.of(true).delay(2500).do(val => {
          if(login["username"] == "a@a.com" && login["password"] == "123456")
          {
            this.isLoggedIn = true;
            //this.storage.set('login', login);
          }
        });
    }
}
