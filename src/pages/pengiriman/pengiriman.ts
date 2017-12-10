import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PesananPage } from '../pesanan/pesanan';

/**
 * Generated class for the PengirimanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pengiriman',
  templateUrl: 'pengiriman.html',
})
export class PengirimanPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PengirimanPage');
  }
  pesanan(){
  this.navCtrl.setRoot(PesananPage);
  }
}
