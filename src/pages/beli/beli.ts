import { Component,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';
import { CartService } from '../../providers/service-keranjang';
import { KeranjangPage } from '../keranjang/keranjang';


/**
 * Generated class for the BeliPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-beli',
  templateUrl: 'beli.html',
})


export class BeliPage {

  quantity:number;
  tanggal:string;
  waktu:string;
  item:any;
  constructor(public cart:CartService,public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  
  }
  
  // @ViewChild('quantity') qty;
  // @ViewChild('myDate') date;
  // @ViewChild('myTime') time;

  ionViewDidLoad() {
    this.item=this.navParams.get('items');
    console.log('ionViewDidLoad BeliPage');
    console.log(this.item);
  }
  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }
  beli(form: NgForm){
      this.cart.cartitem.push({name:this.item.namaBarang,quantity:this.quantity,total:this.item.hargaBarang*this.quantity,tanggal:this.tanggal,waktu:this.waktu});
      console.log(this.cart.cartitem);
      let alert = this.alertCtrl.create({
        title: 'Pembelian Berhasil Masuk Keranjang!',
        subTitle: 'Selesaikan pembayaran agar barang segera dikirim.',
        buttons: ['OK']
        
      });
      alert.present();
      console.log(this.cart.cartitem);
      console.log(this.tanggal);
      console.log(this.waktu);
      this.navCtrl.pop();
      
  }
  
  
    
    
  }
