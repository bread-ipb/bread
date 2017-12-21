import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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
  constructor(private fireauth: AngularFireAuth,public db:AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
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

  // deleteProduk(item){
  //   console.log(item.$key);
  //   this.db.object(`/item/${item.$key}`).remove();  

  // }

  deleteProduk(item) {
    let confirm = this.alertCtrl.create({
      title: 'Hapus Produk?',
      message: 'Apakah anda yakin menghapus produk ini?',
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
            console.log(item.$key);
            this.db.object(`/item/${item.$key}`).remove();
          }
        }
      ]
    });
    confirm.present();
  }

  tambahProduk(){
    this.navCtrl.push(TambahProdukPage);
  }

}
