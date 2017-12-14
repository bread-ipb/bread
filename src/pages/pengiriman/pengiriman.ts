import { CartService } from './../../providers/service-keranjang';
import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PesananPage } from '../pesanan/pesanan';
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
<<<<<<< HEAD
  PesananPage:any;
=======
  namapenerima:string;
  notelp:string;
  alamat:string;
>>>>>>> 368391a52aa88afd0733ed7cb6bb846e1a871cb1
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
    })
    console.log(this.myType);
    this.cart.cartitem=[];
    this.cart.totalHarga=0;
  
  
  }
}
