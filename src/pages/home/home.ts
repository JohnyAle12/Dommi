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
  constructor(private navCtrl: NavController) {
  	
  }
  openPage(page){
    this.navCtrl.push(page);
    console.log(page);
  }

}



