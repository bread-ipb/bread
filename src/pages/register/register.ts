import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
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
  @ViewChild('username') user;
  @ViewChild('password') passwd;
  status:string;
  lihat = true;
  status2:string;
  lihat2 = true;
  constructor(private alertCtrl: AlertController,private fire:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }
  reg(){
  this.fire.auth.createUserWithEmailAndPassword(this.user.value,this.passwd.value)
    .then(data => {
      console.log('got data ', data);
      this.alert('Registered!');

    })
    .catch(error => {
      console.log('got an error ', error);
      this.alert(error.message);
    });
    console.log('Would Register with',this.user.value,this.passwd.value);
  }

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
