import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { TabsPage } from '../tabs/tabs'
import { AngularFireDatabase } from 'angularfire2/database';
import { EditProfilPage } from '../edit-profil/edit-profil';

/**
 * Generated class for the ProfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class ProfilPage {
  nama: string;
  username: string;
  telepon: number;
  alamat:string;
  
  constructor(public db : AngularFireDatabase, private alertCtrl: AlertController,private fire:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
    var user = this.fire.auth.currentUser;
    console.log(user.uid);    //user.uid
    this.db.object('/user/'+user.uid).subscribe(data =>{
      console.log(data);
      this.nama = data.name;
      this.username = data.username;
      this.telepon = data.telepon;
      this.alamat = data.alamat;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPage');
  }

  EditProfil(){
  		this.navCtrl.push(EditProfilPage);
  }

}
