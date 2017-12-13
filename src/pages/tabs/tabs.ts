import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ListPage } from '../list/list';
import { KeranjangPage } from '../keranjang/keranjang';
import { TransaksiPage } from '../transaksi/transaksi';
import { ProfilPage } from '../profil/profil';

@Component({
  templateUrl: 'tabs.html',
  template: `
  <ion-tabs>
    <ion-tab tabIcon="ios-home" [root]="tab1Root"></ion-tab>
    <ion-tab tabIcon="ios-pizza" [root]="tab2Root"></ion-tab>
    <ion-tab tabIcon="ios-cart" [root]="tab3Root" tabBadge="3" tabBadgeStyle="danger"></ion-tab>
    <ion-tab tabIcon="ios-card" [root]="tab4Root" tabBadge="1" tabBadgeStyle="danger"></ion-tab>
    <ion-tab tabIcon="ios-contact" [root]="tab5Root"></ion-tab>
  </ion-tabs>
  `
})
export class TabsPage {
  tab1Root:any;
  tab2Root:any;
  tab3Root:any;
  tab4Root:any;
  tab5Root:any;

  constructor() {
    this.tab1Root = HomePage;
    this.tab2Root = ListPage;
    this.tab3Root = KeranjangPage;
    this.tab4Root = TransaksiPage;
    this.tab5Root = ProfilPage;
  }
}
