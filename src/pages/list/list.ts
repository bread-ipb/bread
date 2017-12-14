import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  DetailPage:any;
  items:any;
  whatever:any;
  constructor(public navCtrl: NavController,private fireauth: AngularFireAuth,public db:AngularFireDatabase, public navParams: NavParams) {
    this.DetailPage=DetailPage;

    this.db.list('/item').subscribe(data => {
      this.items=data;
      console.log(this.items);        
    });
  }

  detail(){
    console.log("masuk");
    this.navCtrl.push(DetailPage);
  }

}
