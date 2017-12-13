import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase,FirebaseListObservable } from 'angularfire2/database';

/**
 * Generated class for the DetailpesananPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detailpesanan',
  templateUrl: 'detailpesanan.html',
})
export class DetailpesananPage {
  trans:any;
  detailtransaksi:any;
  items=[];
  itemsaya:any;
  usernya:any;
  namauser:any;
  constructor(public navCtrl: NavController,private fireauth: AngularFireAuth,public db:AngularFireDatabase,  public navParams: NavParams) {
    this.trans=this.navParams.get('detailtrans');
    this.itemsaya=this.navParams.get('itemku');
    this.usernya=this.itemsaya.punyauser
    var user = this.fireauth.auth.currentUser; 
    this.db.list('/user').subscribe(data => {

      for(var i=0;i<data.length;i++)
      {
        if(data[i].id==this.usernya)
        {
          this.namauser=data[i].name;
        }
      } 
      console.log(this.namauser);
});
    this.db.list('/transaksi/'+this.trans+'/item').subscribe(data => {
      this.detailtransaksi=data;
      console.log(this.detailtransaksi);       
    });
     

  }
  ionViewDidLoad() {
    
    console.log('ionViewDidLoad DetailpesananPage');
  }

}
