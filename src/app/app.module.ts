import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { ClientesPage } from '../pages/clientes/clientes';
import { DetallesPage } from '../pages/detalles/detalles';
import { EdicionPage } from '../pages/edicion/edicion';
import { Addproveedor } from '../pages/addproveedor/addproveedor';
import { Edicion2} from '../pages/edicion2';


import { Proveedores } from '../providers/proveedores'; 
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    ClientesPage,
    DetallesPage,
    EdicionPage,
    Addproveedor,
    Edicion2
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    ClientesPage,
    DetallesPage,
    EdicionPage,
    Addproveedor,
    Edicion2
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Proveedores,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
