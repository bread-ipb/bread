import { Component } from '@angular/core';
import { IonicPage,NavController,NavParams } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase,FirebaseListObservable } from 'angularfire2/database';
import { CartService } from './../../providers/service-keranjang';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  DetailPage:any;
  items:any = [];
  whatever:any;
  constructor(public navCtrl: NavController,private fireauth: AngularFireAuth,public db:AngularFireDatabase, public cart:CartService, public navParams: NavParams) {
    this.DetailPage=DetailPage;

    this.db.list('/item/',{query:{orderByChild:'penjualan'}}).subscribe(data => {
      for(var i=data.length-1, j=0;i>=data.length-4;i--)
      {
          this.items[j]=data[i];
          j++;
      }
      console.log(this.items);        
    });
  }

  detail(){

  	this.navCtrl.push(DetailPage);
  }

}
