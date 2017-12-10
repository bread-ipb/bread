import { Component,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';



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

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  
  }
  
  // @ViewChild('quantity') qty;
  // @ViewChild('myDate') date;
  // @ViewChild('myTime') time;

  ionViewDidLoad() {
    console.log('ionViewDidLoad BeliPage');
  }
  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }
  beli(form: NgForm){
      console.log(this.quantity);
      console.log(this.tanggal);
      console.log(this.waktu);
      this.navCtrl.pop();
      this.alert('Order telah masuk keranjang');  
  }
  
    
    
    
  }
