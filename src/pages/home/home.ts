import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactPage } from '../contact/contact';
import { RegistrarsePage } from '../registrarse/registrarse';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
	rootPage=ContactPage;
	menuPrincipal:any;
  constructor(public navCtrl: NavController) {
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
  	this.navCtrl.push(page);
  }
}



