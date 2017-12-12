import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailTransaksiPage } from '../detail-transaksi/detail-transaksi';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase,FirebaseListObservable } from 'angularfire2/database';
import { CartService } from './../../providers/service-keranjang';

/**
 * Generated class for the TransaksiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-transaksi',
  templateUrl: 'transaksi.html',
})
export class TransaksiPage {
  DetailTransaksiPage:any;
  transaksi:any = [];
  items=[];
  itemku:any;
  detailtrans:any;
  classbadge:string;
  constructor(public navCtrl: NavController,private fireauth: AngularFireAuth,public db:AngularFireDatabase, public cart:CartService, public navParams: NavParams) {
    this.DetailTransaksiPage=DetailTransaksiPage;
    var user = this.fireauth.auth.currentUser;
    this.db.list('/transaksi/').subscribe(data => {
      for(var i=0, j=0;i<data.length;i++)
      {
        if(data[i].punyauser==user.uid)
        {
          this.transaksi[j]=data[i];
          j++
        }
      } 
      var key=user.uid;
      console.log(this.transaksi); 
      console.log(this.transaksi.key); 
      if(this.transaksi.status==0){
        this.classbadge='belumDibayar';
      }       
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TransaksiPage');
  }

  detail(){
  	this.navCtrl.push(DetailTransaksiPage);
  }


}
