import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Provedor1Provider } from '../../providers/provedor1/provedor1';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  chanel = 'UCUrY9QznFi4-S3jWihvaBpA';
  paises;
  numero: number;
  cambios;
  videos: any;
  nextPageToken:any;
  constructor(public navCtrl: NavController, public provedor: Provedor1Provider, public http: HttpClient, private yt: Provedor1Provider) {
    
  }
  ionViewDidLoad(){ 
    this.numero = Math.floor((Math.random()*100)+1)
    this.yt.listavideos(this.chanel).subscribe(
      (data)=>{this.videos = data;},
      (error)=>{console.log(error);}
    )
    this.provedor.obtenerdatos()
    .subscribe(
      (data)=>{this.paises = data;},
      (error)=>{console.log(error);}
  )
  
  }
  dinero(){
    this.obetenerdinero().subscribe(
      (data)=>{this.cambios = data;},
      (error)=>{console.log(error);}
    
  )
  }
  proximaPagina(){
    this.navCtrl.push(AboutPage);
  }
  obetenerdinero(){
    return this.http.get('http://apilayer.net/api/live?access_key=09379cd97fb8e9ded5ccff21dcdac16a&currencies=bWP,AUD&format=1');
  }
}
