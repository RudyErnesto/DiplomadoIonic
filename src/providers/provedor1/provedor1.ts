import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


/*
  Generated class for the Provedor1Provider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Provedor1Provider {
  key: 'AIzaSyDfBycOrvMSwgvjNNyifcE51HqcPTmiFnU';
  constructor(public http: HttpClient) {
    console.log('Hello Provedor1Provider Provider');
  }
  obtenerdatos(){
    return this.http.get('https://restcountries.eu/rest/v2/all');
  }
  obetenerdinero(){
    return this.http.get('http://apilayer.net/api/live?access_key=09379cd97fb8e9ded5ccff21dcdac16a&currencies=bWP,AUD&format=1');
  }
  listavideos(channel){
    return this.http.get("https://www.googleapis.com/youtube/v3/playlists?part=snippet&channeldId"+channel+"&key"+this.key)
  }

}
