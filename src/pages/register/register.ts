import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { TabsPage } from '../tabs/tabs'
import { LoginPage } from '../login/login'
import { AngularFireDatabase } from 'angularfire2/database';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';

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
  // @ViewChild('name') name;
  // @ViewChild('username') user;
  // @ViewChild('password') passwd;
  name:string;
  email:string;
  password:string;
  telepon:number;
  submitted=false;
  alamat:string;
  ayam = 'belum diisi';

  constructor(public db : AngularFireDatabase, private alertCtrl: AlertController,private fire:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
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
  reg(form: NgForm){
    this.submitted=true;
    if(form.valid){
    this.fire.auth.createUserWithEmailAndPassword(this.email,this.password)
      .then(data => {
        console.log('got data ', data);
        console.log(this.email);
        this.db.object('/user/'+data.uid).set({
          id : data.uid,
          name : this.name,
          username : this.email,
          telepon : this.telepon,
          alamat : this.ayam
        })
        console.log(data);
        this.alert('Registered!');
        this.navCtrl.setRoot(LoginPage);
      })
        .catch(error => {
        console.log('got an error ', error);
        this.alert(error.message);
      });
  }
  else{

  }
  }

  masuk(){
    this.navCtrl.setRoot(LoginPage);
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
