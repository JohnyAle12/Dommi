import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the RegistrarsePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registrarse',
  templateUrl: 'registrarse.html',
})
export class RegistrarsePage {

  ingresoEmail:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.ingresoEmail=[
  		{
  			nombre:"Iniciar Sesion",
  			pagina:TabsPage
  		}
  	];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrarsePage');
  }

  iniciarSesion(pagina){
  		this.navCtrl.push(pagina);
  }

}
	