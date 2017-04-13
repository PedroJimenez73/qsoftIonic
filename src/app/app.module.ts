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

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    CursosPage,
    ViewCursoPage,
    AddCursoPage,
    EditCursoPage
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
    EditCursoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Cursos,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
