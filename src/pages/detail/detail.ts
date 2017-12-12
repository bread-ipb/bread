import { BeliPage } from './../beli/beli';
import { CartService } from './../../providers/service-keranjang';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { KeranjangPage } from '../keranjang/keranjang';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})

export class DetailPage {
  item:any;
  beliPage;
  idRoti=1;
  quantity:any;
  id:any;
  total:any;
  constructor(private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams,public cart:CartService) {
    this.beliPage=BeliPage;
    
  }

  ionViewWillLoad() {
    this.item=this.navParams.get('items');
  }


  /**masukKeranjang(){
    this.cart.cartitem.push({name:this.item.namaBarang,total:this.item.hargaBarang*this.jumlahRoti});
    console.log(this.cart.cartitem);
    this.navCtrl.push(KeranjangPage);
    let alert = this.alertCtrl.create({
      title: 'Pembelian Berhasil Masuk Keranjang!',
      subTitle: 'Selesaikan pembayaran agar barang segera dikirim.',
      buttons: ['OK']
      
    });
    alert.present();
  }*/

}
