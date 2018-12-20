import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { RegistrarsePage } from '../registrarse/registrarse';

/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  listaFacebook:any;
  listaGoogle:any;
  registro:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.listaFacebook=[
  		{
  			nombre:"Iniciar Sesion",
  			pagina:TabsPage
  		}
  	];
  	this.listaGoogle=[
  		{
  			nombre:"Iniciar Sesion",
  			pagina:TabsPage
  		}
  	];
    this.registro=[
      {
        nombre:"Registrarse",
        pagina:RegistrarsePage
      }
    ];
  }

  ionViewDidLoad() {
    
  }

  iniciarSesion(pagina){
  		this.navCtrl.push(pagina);
  }

}
