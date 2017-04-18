import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';

import { CursosPage } from '../pages/cursos/cursos';
import { ViewCursoPage } from '../pages/cursos/viewcurso';
import { AddCursoPage } from '../pages/cursos/addcurso';
import { EditCursoPage } from '../pages/cursos/editcurso';
 
import { Cursos } from '../providers/cursos';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from "../pages/login/login";
import { Auth } from "../providers/auth";
import { ProvesPage } from "../pages/provee/provees";
import { AddProvePage } from "../pages/provee/addprove";
import { EditProvePage } from "../pages/provee/editprove";
import { ViewProvePage } from "../pages/provee/viewprove";
import { Proves } from "../providers/proves";

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    CursosPage,
    ViewCursoPage,
    AddCursoPage,
    EditCursoPage,
    LoginPage,
    ProvesPage,
    AddProvePage,
    EditProvePage,
    ViewProvePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    CursosPage,
    ViewCursoPage,
    AddCursoPage,
    EditCursoPage,
    LoginPage,
    ProvesPage,
    AddProvePage,
    EditProvePage,
    ViewProvePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Cursos,
    Auth,
    Proves,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
