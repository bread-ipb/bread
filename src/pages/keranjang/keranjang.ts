import { PengirimanPage } from './../pengiriman/pengiriman';
import { CartService } from './../../providers/service-keranjang';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,public cart:CartService, public alertCtrl: AlertController) {
    this.items=this.cart.cartitem;

    for(var i=0;i<this.items.length;i++){
        
        var produk = this.items[i];
        this.total +=produk.total;

    }

  }
 
 
  ionViewDidLoad() {
    console.log(this.total);
  }
  // removeitem(item){
  //   var index=this.items.indexOf(item);
  //   this.items.splice(index,1);
  //   console.log(this.items);
  //   this.total=0;
  //   for(var i=0;i<this.items.length;i++){
      
  //     var produk = this.items[i];
  //     this.total +=produk.total;

  // }
  // console.log(this.total);
  // }

  removeitem(item) {
    let confirm = this.alertCtrl.create({
      title: 'Hapus Item?',
      message: 'Apakah anda yakin menghapus item ini dari keranjang?',
      buttons: [
        {
          text: 'Tidak',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Ya',
          handler: () => {
            console.log('Agree clicked');
            var index=this.items.indexOf(item);
            this.items.splice(index,1);
            console.log(this.items);
            this.total=0;
            for(var i=0;i<this.items.length;i++){
              
              var produk = this.items[i];
              this.total +=produk.total;
        
          }
          console.log(this.total);
          }
        }
      ]
    });
    confirm.present();
  }

  pengiriman(){
    this.cart.totalHarga=this.total;
    this.navCtrl.push(PengirimanPage);
    console.log(this.cart.cartitem);
    console.log(this.cart.totalHarga);
  }
}
