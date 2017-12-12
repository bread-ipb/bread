import { PengirimanPage } from './../pages/pengiriman/pengiriman';
import { DetailTransaksiPage } from './../pages/detail-transaksi/detail-transaksi';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { KeranjangPage } from '../pages/keranjang/keranjang';
import { TransaksiPage } from '../pages/transaksi/transaksi';
import { ProfilPage } from '../pages/profil/profil';
import { TabsPage } from '../pages/tabs/tabs';
import { DetailPage } from '../pages/detail/detail';
import { EditProfilPage } from '../pages/edit-profil/edit-profil';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { CartService } from '../providers/service-keranjang';
import { PesananPage } from '../pages/pesanan/pesanan';
import { BeliPage } from '../pages/beli/beli';



    const config= {
        apiKey: "AIzaSyD1YKYgoywKMAXcIrXPMt7QmRMCQdL3fr0",
        authDomain: "meong-8704a.firebaseapp.com",
        databaseURL: "https://meong-8704a.firebaseio.com",
        projectId: "meong-8704a",
        storageBucket: "",
        messagingSenderId: "97474052902"
    };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    KeranjangPage,
    TransaksiPage,
    ProfilPage,
    TabsPage,
    DetailPage,
    LoginPage,
    RegisterPage,
    DetailTransaksiPage,
    PengirimanPage,
    PesananPage,
    BeliPage,
    EditProfilPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),

    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    KeranjangPage,
    TransaksiPage,
    ProfilPage,
    TabsPage,
    DetailPage,
    LoginPage,
    RegisterPage,
    DetailTransaksiPage,
    PengirimanPage,
    PesananPage,
    BeliPage,
    EditProfilPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CartService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
