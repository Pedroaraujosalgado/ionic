import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the RelaxaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-relaxa',
  templateUrl: 'relaxa.html',
})
export class RelaxaPage {

  quantidade:string[];



  constructor(public navCtrl: NavController, public navParams: NavParams,
                public alertCtrl: AlertController) {
    this.quantidade = this.navParams.get('qnt');
    console.log(this.quantidade);
  }

}
