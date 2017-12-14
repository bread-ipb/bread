import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { AngularFireDatabase } from 'angularfire2/database';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the KonfirmasiPembayaranPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-konfirmasi-pembayaran',
  templateUrl: 'konfirmasi-pembayaran.html',
})
export class KonfirmasiPembayaranPage {
  nama:any;
  rekening:any;
  myType:any;
  tanggal:any;
  user:any;
  itemsaia:any;
  constructor(private fire:AngularFireAuth,public db:AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.user = this.fire.auth.currentUser;
    this.db.object('/user/'+this.user.uid).subscribe(data =>{
      console.log(data);
      
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KonfirmasiPembayaranPage');
    this.itemsaia=this.navParams.get('itemgue');
    console.log(this.itemsaia);
  }
  konfirmasi(){
    this.db.list('/konfirmasi').push({
      namaPengirim:this.nama,
      rekening:this.rekening,
      bank:this.myType,
      tanggal:this.tanggal,
      user:this.user.uid
    });
   // console.log(this.cart.cartitem);
   let alert = this.alertCtrl.create({
     title: 'Berhasil!',
     subTitle: 'Pesanan Akan Segera Diproses',
     buttons: ['OK']
     
   });
   this.db.object('/transaksi/'+this.itemsaia.$key).update({
     status:1
   });
  }
}
