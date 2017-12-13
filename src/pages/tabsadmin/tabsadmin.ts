import { ProfiladminPage } from './../profiladmin/profiladmin';
import { ProdukadminPage } from './../produkadmin/produkadmin';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { PesananadminPage } from '../pesananadmin/pesananadmin';
/**
 * Generated class for the TabsadminPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabsadmin',
  templateUrl: 'tabsadmin.html',
  template: `
  <ion-tabs>
    <ion-tab tabIcon="call" [root]="tabOne" tabBadge="3" tabBadgeStyle="danger"></ion-tab>
    <ion-tab tabIcon="chatbubbles" [root]="tabTwo"></ion-tab>
    <ion-tab tabIcon="musical-notes" [root]="tabThree"></ion-tab>
  </ion-tabs>
  `
})
export class TabsadminPage {

  tabOne:any;
  tabTwo:any;
  tabThree:any;



  constructor(public navCtrl: NavController) {
    this.tabOne = PesananadminPage;
    this.tabTwo = ProdukadminPage;
    this.tabThree = ProfiladminPage;
  }

}
