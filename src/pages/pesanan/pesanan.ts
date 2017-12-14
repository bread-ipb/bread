import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the PesananPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pesanan',
  templateUrl: 'pesanan.html',
})


export class PesananPage {
itil:any;
atm:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PesananPage');
    this.itil=this.navParams.get('biji');
    this.atm=this.navParams.get('atm');
    console.log(this.itil);
    
  }

  selesai(){
    this.navCtrl.setRoot(TabsPage);
  }

}
