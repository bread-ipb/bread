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
  jumlahRoti=20;
  idRoti=1;
  quantity:any;
  id:any;
  total:any;
  constructor(private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams,public cart:CartService) {
  }

  ionViewWillLoad() {
    this.item=this.navParams.get('items');
  }

  presentPrompt() {
    let alert = this.alertCtrl.create({
      title: 'Jumlah Pembelian',
      inputs: [
        {
          name: 'amount',
          placeholder: this.jumlahRoti+' buah'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Submit',
          handler: data => {
            if(data.amount!=/([A-Z])\w+/g && data.amount>20 && data.amount<100){
                this.jumlahRoti=data.amount;
            }
            else if(data.amount<20){
              this.jumlahRoti=20;
              let alert = this.alertCtrl.create({
                title: 'Pembelian Kurang dari Jumlah Minimum!',
                subTitle: 'Pembelian roti minimum menggunakan aplikasi ini adalah 20 buah.',
                buttons: ['OK']
              });
              alert.present();
            }
            else{
              console.log("lebihmasuk")
              this.jumlahRoti=20;
              let alert = this.alertCtrl.create({
                title: 'Pembelian Lebih dari Jumlah Maksimum!',
                subTitle: 'Pembelian roti maksimum menggunakan aplikasi ini adalah 100 buah.',
                buttons: ['OK']
              });
              alert.present();
            }
            // if (User.isValid(data.username, data.password)) {
            //   // logged in!
            // } else {
            //   // invalid login
            //   return false;
            // }
          }
        }
      ]
    });
    alert.present();
  }

  masukKeranjang(){
    this.cart.cartitem.push({quantity:this.jumlahRoti,name:this.item.namaBarang,total:this.item.hargaBarang*this.jumlahRoti});
    console.log(this.cart.cartitem);
    this.navCtrl.push(KeranjangPage);
    let alert = this.alertCtrl.create({
      title: 'Pembelian Berhasil Masuk Keranjang!',
      subTitle: 'Selesaikan pembayaran agar barang segera dikirim.',
      buttons: ['OK']
      
    });
    alert.present();
  }

}
