import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ListPage } from '../list/list';
import { KeranjangPage } from '../keranjang/keranjang';
import { TransaksiPage } from '../transaksi/transaksi';
import { ProfilPage } from '../profil/profil';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ListPage;
  tab3Root = KeranjangPage;
  tab4Root = TransaksiPage;
  tab5Root = ProfilPage;

  constructor() {

  }
}
