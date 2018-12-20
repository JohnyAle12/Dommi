import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ContactPage } from '../pages/contact/contact';
import { FavoritosPage } from '../pages/favoritos/favoritos';
import { CarritoPage } from '../pages/carrito/carrito';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { InicioPage } from '../pages/inicio/inicio';
import { RegistrarsePage } from '../pages/registrarse/registrarse';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    FavoritosPage,
    CarritoPage,
    HomePage,
    TabsPage,
    InicioPage,
    RegistrarsePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    FavoritosPage,
    CarritoPage,
    HomePage,
    TabsPage,
    InicioPage,
    RegistrarsePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
