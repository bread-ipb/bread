import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailTransaksiPage } from '../detail-transaksi/detail-transaksi';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase,FirebaseListObservable } from 'angularfire2/database';
import { CartService } from './../../providers/service-keranjang';

/**
 * Generated class for the TransaksiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-transaksi',
  templateUrl: 'transaksi.html',
})
export class TransaksiPage {
  DetailTransaksiPage:any;
  transaksi:any;
  items=[];
  detailtrans:any;
  constructor(public navCtrl: NavController,private fireauth: AngularFireAuth,public db:AngularFireDatabase, public cart:CartService, public navParams: NavParams) {
    this.DetailTransaksiPage=DetailTransaksiPage;
    var user = this.fireauth.auth.currentUser; 
    this.db.list('/transaksi'+user.uid).subscribe(data => {
      this.transaksi=data;
      console.log(this.transaksi);        
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransaksiPage');
  }

  detail(){
  	this.navCtrl.push(DetailTransaksiPage);
  }


}
