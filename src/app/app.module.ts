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
import { DetailTransaksiPage } from '../pages/detail-transaksi/detail-transaksi';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';


var config = {
  apiKey: "AIzaSyCbAHcZ93Z4TmqQUO83tUqMnpHnP8yT7Ik",
  authDomain: "bread-ipb-tes.firebaseapp.com",
  databaseURL: "https://bread-ipb-tes.firebaseio.com",
  projectId: "bread-ipb-tes",
  storageBucket: "bread-ipb-tes.appspot.com",
  messagingSenderId: "279879616076"
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
    DetailTransaksiPage
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
    DetailTransaksiPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
