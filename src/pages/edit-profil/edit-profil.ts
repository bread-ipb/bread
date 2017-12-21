import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { TabsPage } from '../tabs/tabs'
import { AngularFireDatabase } from 'angularfire2/database';
import { storage } from 'firebase';

/**
 * Generated class for the EditProfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-profil',
  templateUrl: 'edit-profil.html',
})
export class EditProfilPage {
  nama: string;
  username: string;
  telepon: number;
  image: string;
  user_id: string;
  alamat: any;

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
    console.log('ionViewDidLoad EditProfilPage');
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  simpan(){
    console.log(this.alamat);
    var user = this.fire.auth.currentUser;          
    this.db.object('/user/'+user.uid).update({
      name : this.nama, 
      telepon : this.telepon,
      alamat : this.alamat,
    });
    
  		this.navCtrl.pop();
  		this.alert('Profil Berhasil Diedit');
  }

  EditFoto(){
    storage().ref().child('/picture/'+ this.user_id).getDownloadURL().then(url =>{
      this.image=url;
    });
  }
}
