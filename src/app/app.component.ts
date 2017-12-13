import { TabsadminPage } from './../pages/tabsadmin/tabsadmin';
import { PesananadminPage } from './../pages/pesananadmin/pesananadmin';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DetailTransaksiPage } from './../pages/detail-transaksi/detail-transaksi';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { KeranjangPage } from '../pages/keranjang/keranjang';
import { TransaksiPage } from '../pages/transaksi/transaksi';
import { ProfilPage } from '../pages/profil/profil';
import { TabsPage } from '../pages/tabs/tabs';
import { CartService } from '../providers/service-keranjang';
import { PengirimanPage } from './../pages/pengiriman/pengiriman';
import { PesananPage } from '../pages/pesanan/pesanan';
import { BeliPage } from './../pages/beli/beli';
import { ProfiladminPage } from './../pages/profiladmin/profiladmin';
import { ProdukadminPage } from './../pages/produkadmin/produkadmin';
import { DetailpesananPage } from './../pages/detailpesanan/detailpesanan';
import { EditProdukPage } from '../pages/edit-produk/edit-produk';
import { TambahProdukPage } from '../pages/tambah-produk/tambah-produk';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
