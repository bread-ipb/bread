import { PengirimanPage } from './../pengiriman/pengiriman';
import { CartService } from './../../providers/service-keranjang';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the KeranjangPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-keranjang',
  templateUrl: 'keranjang.html',
})
export class KeranjangPage {
  items=[];
  total=0;
  pengiriman:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public cart:CartService) {
    this.items=this.cart.cartitem;
    this.pengiriman=PengirimanPage;
    for(var i=0;i<this.items.length;i++){
        
        var produk = this.items[i];
        this.total +=produk.total;
    }

  }
  
 
  ionViewDidLoad() {
    console.log(this.total);
  }
  removeitem(item){
    var index=this.items.indexOf(item);
    this.items.splice(index,1);
    console.log(this.items)
  }
}
