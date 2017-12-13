import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailpesananPage } from '../detailpesanan/detailpesanan';
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PesananPage');
  }

  DetailPesanan(){
    this.navCtrl.push(DetailpesananPage)
  }

}