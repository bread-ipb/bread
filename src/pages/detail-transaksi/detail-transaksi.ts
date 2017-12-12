import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase,FirebaseListObservable } from 'angularfire2/database';
/**
 * Generated class for the DetailTransaksiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-detail-transaksi',
  templateUrl: 'detail-transaksi.html',
})
export class DetailTransaksiPage {
  trans:any;
  detailtransaksi:any;
  items=[];
  constructor(public navCtrl: NavController,private fireauth: AngularFireAuth,public db:AngularFireDatabase,  public navParams: NavParams) {
    this.trans=this.navParams.get('detailtrans');
    var user = this.fireauth.auth.currentUser; 
    this.db.list('/transaksi'+user.uid+'/'+this.trans+'/item').subscribe(data => {
      this.detailtransaksi=data;
      console.log(this.detailtransaksi);        
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailTransaksiPage');
    
    console.log(this.trans);
  }

}
