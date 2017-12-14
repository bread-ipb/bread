import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TambahProdukPage } from '../tambah-produk/tambah-produk';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the EditProdukPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-produk',
  templateUrl: 'edit-produk.html',
})
export class EditProdukPage {
  items:any;

  constructor(private fireauth: AngularFireAuth,public db:AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProdukPage');
  }

}
