import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MyAppProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MyAppProvider {

URL_da_API = "https://api-tweets-neymar.herokuapp.com/";

  constructor(public http: HttpClient) {
  }

  getMy_app(){
    return new Promise(resolve =>{
      this.http.get(this.URL_da_API+'tweets#index').subscribe(dados =>{
        resolve(dados);
      }, e => {
        console.log(e);
      });
    });
  }
  }
