import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyAppProvider } from '../../providers/my-app/my-app';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lista_completa:any;
  tweets: string[];
  items: string[];
  tweet: any;

  constructor(public navCtrl: NavController, public My_appProvider: MyAppProvider,) {
  this.zeraLista();
  //this.tweets = ['P','E','D','R','O'];
  this.getMy_app();
  this.initializeItems();
  }

  getMy_app(){
    this.My_appProvider.getMy_app()
    .then(dados => {
      this.lista_completa = dados;
      console.log(this.tweet);
    });
  }

  zeraLista(){
      this.tweets = this.getMy_app();
  }

  initializeItems() {
    this.items = [
      'Pedro','Edimundo','Danilo','Raul','Romario','Thomaz'
    ];
  }
  getItems(ev: any) {
    // Reset items back to all of the items
    this.zeraLista();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  navega(){
    this.navCtrl.push('RelaxaPage', {qnt: "Relaxô cuzão"});
    //alert("Só é DOTÔ quem tem doutorado!");
  }
  fotos(){
    this.navCtrl.push('FotosPage');
    //alert("Só é DOTÔ quem tem doutorado!");
  }
}
