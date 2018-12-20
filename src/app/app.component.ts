import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { InicioPage } from '../pages/inicio/inicio';
import { ContactPage } from '../pages/contact/contact';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('contentMenu') nav: Nav;
  rootPage:any = InicioPage; //TabsPage
  menuPrincipal:any;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.menuPrincipal=[
      {
        titulo:"Cupones",
        pagina:ContactPage
      },
      {
        titulo:"Puntos",
        pagina:ContactPage
      },
      {
        titulo:"Direcciones",
        pagina:ContactPage
      },
      {
        titulo:"Ajustes",
        pagina:ContactPage
      },
      {
        titulo:"Terminos y condiciones",
        pagina:ContactPage
      }
    ];
  }

  openPage(page){
    //this.navCtrl.push(page);
    this.nav.push(page);
  }
}
