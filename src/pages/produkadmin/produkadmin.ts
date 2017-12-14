import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditProdukPage } from '../edit-produk/edit-produk';
import { TambahProdukPage } from '../tambah-produk/tambah-produk';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

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
  items:any;
  constructor(private fireauth: AngularFireAuth,public db:AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams) {
    this.db.list('/item').subscribe(data => {
      this.items=data;
      console.log(this.items);        
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdukadminPage');
  }

  editProduk(item){
    console.log(item.$key);
    this.navCtrl.push(EditProdukPage);
  }

  deleteProduk(item){
    console.log(item.$key);
    this.db.object(`/item/${item.$key}`).remove();  

  }

  tambahProduk(){
    this.navCtrl.push(TambahProdukPage);
  }

}
