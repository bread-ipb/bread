import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditProdukPage } from '../edit-produk/edit-produk';
import { TambahProdukPage } from '../tambah-produk/tambah-produk';

/**
 * Generated class for the ProdukadminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-produkadmin',
  templateUrl: 'produkadmin.html',
})
export class ProdukadminPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdukadminPage');
  }

  editProduk(){
    this.navCtrl.push(EditProdukPage);
  }

  deleteProduk(){

  }

  tambahProduk(){
    this.navCtrl.push(TambahProdukPage);
  }

}
