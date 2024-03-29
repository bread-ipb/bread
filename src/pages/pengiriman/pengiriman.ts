import { PesananPage } from './../pesanan/pesanan';
import { CartService } from './../../providers/service-keranjang';
import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';


/**
 * Generated class for the PengirimanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pengiriman',
  templateUrl: 'pengiriman.html',
})
export class PengirimanPage {
  myType:string;
  namapenerima:string;
  notelp:string;
  alamat:string;
  PesananPage:any;
  constructor(public navCtrl: NavController,private fireauth: AngularFireAuth,public db:AngularFireDatabase, public navParams: NavParams,public cart:CartService) {
    this.PesananPage=PesananPage;
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad PengirimanPage');
  }
  pesanan(){
    var user = this.fireauth.auth.currentUser; 
    this.db.list('/transaksi/').push({
      item:this.cart.cartitem,
      total:this.cart.totalHarga,
      pembayaran:this.myType,
      status:0,
      punyauser:user.uid,
      namapenerima:this.namapenerima,
      alamat:this.alamat,
      notelp:this.notelp
    }
  )
    
    console.log(this.myType);
    this.cart.cartitem=[];
    this.cart.totalHarga=0;

  
  }
}
