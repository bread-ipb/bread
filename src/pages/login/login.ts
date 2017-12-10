import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';

// import { AngularFireAuth } from 'angularfire2/auth';
// import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  status:string;
  lihat = true;
  constructor(private fire:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }
  @ViewChild('username') uname;
  @ViewChild('password') password;
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  showPassword(){
    this.status = "text";
    this.lihat = false;
    console.log(this.status);
  }

  hidePassword(){
    this.status = "password";
    this.lihat = true;
    console.log(this.status);
  }
  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  masuk(){
    this.fire.auth.signInWithEmailAndPassword(this.uname.value,this.password.value)
    .then( data => {
      console.log('got some data', this.fire.auth.currentUser);
      this.alert('Success! You\'re logged in');
      //this.navCtrl.setRoot( LoggedinPage );
      // user is logged in
    })
    .catch( error => {
      console.log('got an error', error);
      this.alert(error.message);
    })
    console.log('Would sign in with ', this.uname.value, this.password.value);
    this.navCtrl.setRoot(TabsPage);
  }

  register(){
    this.navCtrl.setRoot(RegisterPage);
  }
}
