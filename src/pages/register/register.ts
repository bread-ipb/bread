import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs'
import { LoginPage } from '../login/login'

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  status:string;
  lihat = true;
  status2:string;
  lihat2 = true;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  // showPassword(){
  //   this.status = "text";
  //   this.lihat = false;
  //   console.log(this.status);
  // }

  // hidePassword(){
  //   this.status = "password";
  //   this.lihat = true;
  //   console.log(this.status);
  // }

  // showPassword2(){
  //   this.status2 = "text";
  //   this.lihat2 = false;
  //   console.log(this.status2);
  // }

  // hidePassword2(){
  //   this.status2 = "password";
  //   this.lihat2 = true;
  //   console.log(this.status2);
  // }

  register(){
    this.navCtrl.setRoot(TabsPage);
  }

  masuk(){
    this.navCtrl.setRoot(LoginPage);
  }

}
