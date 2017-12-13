import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailpesananPage } from '../detailpesanan/detailpesanan';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase,FirebaseListObservable } from 'angularfire2/database';
/**
 * Generated class for the PesananadminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pesananadmin',
  templateUrl: 'pesananadmin.html',
})
export class PesananadminPage {
  DetailpesananPage:any;
  transaksi:any;
  detailtrans:any;
  constructor(public navCtrl: NavController,private fireauth: AngularFireAuth,public db:AngularFireDatabase, public navParams: NavParams) {
    this.DetailpesananPage=DetailpesananPage;
    this.db.list('/transaksi/').subscribe(data => {
          this.transaksi=data;
          
        });
      }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PesananPage');
  }

  DetailPesanan(){
    this.navCtrl.push(DetailpesananPage)
  }

}