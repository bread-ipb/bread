import { AngularFireDatabase } from 'angularfire2/database';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

/**
 * Generated class for the TambahProdukPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tambah-produk',
  templateUrl: 'tambah-produk.html',
})
export class TambahProdukPage {
  judul:string;
  harga:number;
  deskripsi:string;
  submitted=false;

  constructor(public db:AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TambahProdukPage');
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  tambah(form: NgForm){
    this.submitted=true;
     this.db.list('/item/').push({
       namaBarang:this.judul,
       hargaBarang:this.harga,
       deskripsi:this.deskripsi,
       penjualan:0});
    // console.log(this.cart.cartitem);
    let alert = this.alertCtrl.create({
      title: 'Berhasil!',
      subTitle: 'Produk berhasil ditambahkan.',
      buttons: ['OK']
      
    });
    alert.present();
    console.log(this.judul);
    console.log(this.harga);
    console.log(this.deskripsi);
    this.navCtrl.pop();
    
}

}
