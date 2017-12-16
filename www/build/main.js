webpackJsonp([12],{

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_list__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__keranjang_keranjang__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__transaksi_transaksi__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profil_profil__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TabsPage = (function () {
    function TabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__list_list__["a" /* ListPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__keranjang_keranjang__["a" /* KeranjangPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__transaksi_transaksi__["a" /* TransaksiPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__profil_profil__["a" /* ProfilPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Luthfi\Documents\GitHub\bread\src\pages\tabs\tabs.html"*/`<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabIcon="ios-home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabIcon="ios-pizza"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabIcon="ios-cart"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabIcon="ios-card"></ion-tab>\n\n  <ion-tab [root]="tab5Root" tabIcon="ios-contact"></ion-tab>\n\n</ion-tabs>`/*ion-inline-end:"C:\Users\Luthfi\Documents\GitHub\bread\src\pages\tabs\tabs.html"*/,
            template: "\n  <ion-tabs>\n    <ion-tab tabIcon=\"ios-home\" [root]=\"tab1Root\"></ion-tab>\n    <ion-tab tabIcon=\"ios-pizza\" [root]=\"tab2Root\"></ion-tab>\n    <ion-tab tabIcon=\"ios-cart\" [root]=\"tab3Root\"></ion-tab>\n    <ion-tab tabIcon=\"ios-card\" [root]=\"tab4Root\"></ion-tab>\n    <ion-tab tabIcon=\"ios-contact\" [root]=\"tab5Root\"></ion-tab>\n  </ion-tabs>\n  "
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object])
    ], TabsPage);
    return TabsPage;
    var _a, _b;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__beli_beli__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_service_keranjang__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailPage = (function () {
    function DetailPage(alertCtrl, navCtrl, navParams, cart) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cart = cart;
        this.idRoti = 1;
        this.beliPage = __WEBPACK_IMPORTED_MODULE_0__beli_beli__["a" /* BeliPage */];
    }
    DetailPage.prototype.ionViewWillLoad = function () {
        this.item = this.navParams.get('items');
    };
    DetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-detail',template:/*ion-inline-start:"C:\Users\Luthfi\Documents\GitHub\bread\src\pages\detail\detail.html"*/`<!--\n\n  Generated template for the DetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Detail {{item.namaBarang}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <img src="http://www.seafast.ipb.ac.id/images/stories/ilustrasi/muffin.jpg"/>\n\n    <h6>{{item.namaBarang}}</h6>\n\n    <h5>Rp.{{item.hargaBarang}}</h5>\n\n    <p>{{item.deskripsi}}</p>\n\n    \n\n    \n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <ion-toolbar color="light">\n\n        <ion-row>\n\n\n\n                <button ion-button full [navPush]="beliPage" [navParams]="{items:item}">Beli</button>\n\n\n\n        </ion-row>\n\n    </ion-toolbar>\n\n  </ion-footer>\n\n`/*ion-inline-end:"C:\Users\Luthfi\Documents\GitHub\bread\src\pages\detail\detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__providers_service_keranjang__["a" /* CartService */]])
    ], DetailPage);
    return DetailPage;
}());

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KonfirmasiPembayaranPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_alert_alert_controller__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the KonfirmasiPembayaranPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var KonfirmasiPembayaranPage = (function () {
    function KonfirmasiPembayaranPage(fire, db, navCtrl, navParams, alertCtrl) {
        this.fire = fire;
        this.db = db;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.user = this.fire.auth.currentUser;
        this.db.object('/user/' + this.user.uid).subscribe(function (data) {
            console.log(data);
        });
    }
    KonfirmasiPembayaranPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad KonfirmasiPembayaranPage');
        this.itemsaia = this.navParams.get('itemgue');
        console.log(this.itemsaia);
    };
    KonfirmasiPembayaranPage.prototype.konfirmasi = function () {
        this.db.list('/konfirmasi').push({
            namaPengirim: this.nama,
            rekening: this.rekening,
            bank: this.myType,
            tanggal: this.tanggal,
            user: this.user.uid
        });
        // console.log(this.cart.cartitem);
        var alert = this.alertCtrl.create({
            title: 'Berhasil!',
            subTitle: 'Pesanan Akan Segera Diproses',
            buttons: ['OK']
        });
        this.db.object('/transaksi/' + this.itemsaia.$key).update({
            status: 1
        });
    };
    KonfirmasiPembayaranPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-konfirmasi-pembayaran',template:/*ion-inline-start:"C:\Users\Luthfi\Documents\GitHub\bread\src\pages\konfirmasi-pembayaran\konfirmasi-pembayaran.html"*/`<!--\n\n  Generated template for the KonfirmasiPembayaranPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>konfirmasi-pembayaran</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n\n\n    \n\n      <ion-item>\n\n        <ion-label floating>Nama Pengirim</ion-label>\n\n        <ion-input [(ngModel)]="nama" name="namaPengirim" type="text" #namaPengirim="ngModel" required></ion-input>\n\n      </ion-item>\n\n      \n\n      <ion-item>\n\n        <ion-label floating>No. Rekening</ion-label>\n\n        <ion-input [(ngModel)]="rekening" name="norek" type="number" #norek="ngModel" required></ion-input>\n\n      </ion-item>\n\n    \n\n      <ion-list radio-group [(ngModel)]="myType">\n\n        <ion-list-header>\n\n          Bank\n\n        </ion-list-header>\n\n      \n\n        <ion-item>\n\n          <ion-label>BCA</ion-label>\n\n          <ion-radio  value="bca"></ion-radio>\n\n        </ion-item>\n\n      \n\n        <ion-item>\n\n          <ion-label>BNI</ion-label>\n\n          <ion-radio value="bni"></ion-radio>\n\n        </ion-item>\n\n      \n\n        <ion-item>\n\n          <ion-label>BRI</ion-label>\n\n          <ion-radio value="bri" ></ion-radio>\n\n        </ion-item>\n\n      </ion-list>\n\n    \n\n        <ion-item>\n\n          <ion-label floating>Tanggal Pembayaran</ion-label>\n\n          <ion-datetime displayFormat="DDDD, DD MMMM YYYY" type="string" [(ngModel)]="tanggal" name="date" #date="ngModel" spellcheck="false" autocapitalize="off" required></ion-datetime>\n\n        </ion-item>\n\n    \n\n        <button ion-button  full (click)="konfirmasi()" type="submit">Konfirmasi</button>\n\n\n\n  \n\n</ion-content>\n\n<!--[disabled]="!qty.valid || !date.valid || !time.valid"--> `/*ion-inline-end:"C:\Users\Luthfi\Documents\GitHub\bread\src\pages\konfirmasi-pembayaran\konfirmasi-pembayaran.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_alert_alert_controller__["a" /* AlertController */]])
    ], KonfirmasiPembayaranPage);
    return KonfirmasiPembayaranPage;
}());

//# sourceMappingURL=konfirmasi-pembayaran.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailpesananPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the DetailpesananPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailpesananPage = (function () {
    function DetailpesananPage(navCtrl, fireauth, db, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.fireauth = fireauth;
        this.db = db;
        this.navParams = navParams;
        this.items = [];
        this.trans = this.navParams.get('detailtrans');
        this.itemsaya = this.navParams.get('itemku');
        this.usernya = this.itemsaya.punyauser;
        var user = this.fireauth.auth.currentUser;
        this.db.list('/user').subscribe(function (data) {
            for (var i = 0; i < data.length; i++) {
                if (data[i].id == _this.usernya) {
                    _this.namauser = data[i].name;
                }
            }
            console.log(_this.namauser);
        });
        this.db.list('/transaksi/' + this.trans + '/item').subscribe(function (data) {
            _this.detailtransaksi = data;
            console.log(_this.detailtransaksi);
        });
    }
    DetailpesananPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailpesananPage');
    };
    DetailpesananPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detailpesanan',template:/*ion-inline-start:"C:\Users\Luthfi\Documents\GitHub\bread\src\pages\detailpesanan\detailpesanan.html"*/`<!--\n\n  Generated template for the DetailpesananPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Detail Pesanan</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-item *ngFor="let item of detailtransaksi">\n\n        <ion-thumbnail item-start><img src="http://www.seafast.ipb.ac.id/images/stories/ilustrasi/muffin.jpg"height="60" width="65"/>\n\n        </ion-thumbnail>\n\n          <h6>{{ item.name }}</h6> <h5>{{ item.quantity }}</h5>\n\n        <p>Jadwal Pengiriman {{ item.tanggal}} {{item.waktu}}</p>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-thumbnail item-start>\n\n          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3AEQwFb78GZahJMVYc3JiezkKPhHHh7Eezrvm739BFSqrGT3iNQ"/>\n\n        </ion-thumbnail>\n\n        <h2>{{namauser}}</h2>\n\n        <p>20 buah</p>\n\n        <ion-item>\n\n            <h5>Status:</h5> <ion-badge item-end>Dibayar</ion-badge>\n\n        </ion-item>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <h3>Pembeli</h3>\n\n        <p>Falah</p>\n\n    </ion-item>\n\n        \n\n    <ion-item>\n\n        <h3>No. HP</h3>\n\n        <p>0856-1233-5345</p>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <h3>Alamat</h3>\n\n        <p>Jalan jalan</p>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <h3>Dikirim</h3>\n\n        <p>Rabu, 13 Desember 2017</p>\n\n        <p>07.00 WIB</p>\n\n    </ion-item>\n\n    \n\n    <ion-item>\n\n        <img src="https://image.flaticon.com/icons/png/128/148/148752.png" width="60" height="60"/>\n\n        \n\n        <img src="https://freeiconshop.com/wp-content/uploads/edd/paper-rocket-flat.png" width="60" height="60"/>\n\n\n\n        <img src="http://www.myiconfinder.com/uploads/iconsets/128-128-d02328532122a358e4c3d755cd436c6c.png" width="60" height="60"/>   \n\n    </ion-item>\n\n    \n\n    <ion-item>\n\n        <p>Diproses ... Dikirim ... Selesai</p>\n\n    </ion-item>  \n\n    \n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\Luthfi\Documents\GitHub\bread\src\pages\detailpesanan\detailpesanan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], DetailpesananPage);
    return DetailpesananPage;
}());

//# sourceMappingURL=detailpesanan.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProdukPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the EditProdukPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditProdukPage = (function () {
    function EditProdukPage(fireauth, db, navCtrl, navParams) {
        this.fireauth = fireauth;
        this.db = db;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EditProdukPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditProdukPage');
    };
    EditProdukPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-produk',template:/*ion-inline-start:"C:\Users\Luthfi\Documents\GitHub\bread\src\pages\edit-produk\edit-produk.html"*/`<!--\n\n  Generated template for the EditProdukPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Edit Produk</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  {{item.namaBarang}}\n\n  {{item.hargaBarang}}\n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\Luthfi\Documents\GitHub\bread\src\pages\edit-produk\edit-produk.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], EditProdukPage);
    return EditProdukPage;
}());

//# sourceMappingURL=edit-produk.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PengirimanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pesanan_pesanan__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_service_keranjang__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the PengirimanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PengirimanPage = (function () {
    function PengirimanPage(navCtrl, fireauth, db, navParams, cart) {
        this.navCtrl = navCtrl;
        this.fireauth = fireauth;
        this.db = db;
        this.navParams = navParams;
        this.cart = cart;
        this.PesananPage = __WEBPACK_IMPORTED_MODULE_0__pesanan_pesanan__["a" /* PesananPage */];
    }
    PengirimanPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PengirimanPage');
    };
    PengirimanPage.prototype.pesanan = function () {
        var user = this.fireauth.auth.currentUser;
        this.db.list('/transaksi/').push({
            item: this.cart.cartitem,
            total: this.cart.totalHarga,
            pembayaran: this.myType,
            status: 0,
            punyauser: user.uid,
            namapenerima: this.namapenerima,
            alamat: this.alamat,
            notelp: this.notelp
        });
        console.log(this.myType);
        this.cart.cartitem = [];
        this.cart.totalHarga = 0;
    };
    PengirimanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-pengiriman',template:/*ion-inline-start:"C:\Users\Luthfi\Documents\GitHub\bread\src\pages\pengiriman\pengiriman.html"*/`<!--\n\n  Generated template for the PengirimanPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Verifikasi Pengiriman</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-item>\n\n    <ion-label stacked>Nama Penerima</ion-label>\n\n    <ion-input type="text"  [(ngModel)]="namapenerima"></ion-input>\n\n  </ion-item>\n\n  \n\n  <ion-item>\n\n    <ion-label stacked>Alamat</ion-label>\n\n    <ion-textarea type="text" [(ngModel)]="alamat"></ion-textarea>\n\n  </ion-item>\n\n  <ion-item >\n\n      <ion-label stacked >No.Telp</ion-label>\n\n      <ion-input type="number" [(ngModel)]="notelp"></ion-input>\n\n    </ion-item>\n\n  <ion-list radio-group [(ngModel)]="myType">\n\n    <ion-list-header>\n\n      Pilihan Pembayaran\n\n    </ion-list-header>\n\n  \n\n    <ion-item>\n\n      <ion-label>BCA</ion-label>\n\n      <ion-radio  value="bca"></ion-radio>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n      <ion-label>BNI</ion-label>\n\n      <ion-radio value="bni"></ion-radio>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n      <ion-label>BRI</ion-label>\n\n      <ion-radio value="bri" ></ion-radio>\n\n    </ion-item>\n\n  </ion-list>\n\n  \n\n  <ion-footer>\n\n		<ion-col>\n\n			<button class="ButtonMasuk" ion-button color="AyoDermawan" [navPush]="PesananPage" (click)="pesanan()" [navParams]={biji:this.cart.totalHarga,atm:this.myType} full><p class="ButtonWord">Lanjutkan</p></button>\n\n		</ion-col>\n\n	</ion-footer>\n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\Luthfi\Documents\GitHub\bread\src\pages\pengiriman\pengiriman.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__providers_service_keranjang__["a" /* CartService */]])
    ], PengirimanPage);
    return PengirimanPage;
}());

//# sourceMappingURL=pengiriman.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PesananPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(139);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PesananPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PesananPage = (function () {
    function PesananPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PesananPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PesananPage');
        this.itil = this.navParams.get('biji');
        this.atm = this.navParams.get('atm');
        console.log(this.itil);
    };
    PesananPage.prototype.selesai = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    PesananPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pesanan',template:/*ion-inline-start:"C:\Users\Luthfi\Documents\GitHub\bread\src\pages\pesanan\pesanan.html"*/`<!--\n\n  Generated template for the PesananPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Pembelian Berhasil!</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <h4>Order Telah Diterima.</h4>\n\n    <p>Silakan transfer pembayaran sejumlah <b>Rp.{{itil}}</b> ke rekening:<br>\n\n   <b [hidden]="atm!=\'bca\'">BCA dengan Nomer Rekening 731 025 2527 a/n Denny</b>\n\n   <b [hidden]="atm!=\'bni\'">BNI dengan Nomer Rekening 023 827 2088 a/n Denny</b>\n\n   <b [hidden]="atm!=\'bri\'">BRI dengan Nomer Rekening 034 101 000 743 303 a/n Denny</b>\n\n      <br>\n\n    batas pembayaran adalah 1 x 24 jam setelah order.</p>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <ion-toolbar color="light">\n\n        <button ion-button (click)="selesai()" full>Selesai</button>\n\n    </ion-toolbar>\n\n</ion-footer>\n\n`/*ion-inline-end:"C:\Users\Luthfi\Documents\GitHub\bread\src\pages\pesanan\pesanan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], PesananPage);
    return PesananPage;
}());

//# sourceMappingURL=pesanan.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsadminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__profiladmin_profiladmin__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__produkadmin_produkadmin__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pesananadmin_pesananadmin__ = __webpack_require__(172);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the TabsadminPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsadminPage = (function () {
    function TabsadminPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.tabOne = __WEBPACK_IMPORTED_MODULE_4__pesananadmin_pesananadmin__["a" /* PesananadminPage */];
        this.tabTwo = __WEBPACK_IMPORTED_MODULE_1__produkadmin_produkadmin__["a" /* ProdukadminPage */];
        this.tabThree = __WEBPACK_IMPORTED_MODULE_0__profiladmin_profiladmin__["a" /* ProfiladminPage */];
    }
    TabsadminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-tabsadmin',template:/*ion-inline-start:"C:\Users\Luthfi\Documents\GitHub\bread\src\pages\tabsadmin\tabsadmin.html"*/`<ion-tabs>\n\n    <ion-tab [root]="pesananadminRoot" tabTitle="Pesananadmin" tabIcon="information-circle"></ion-tab>\n\n    <ion-tab [root]="produkadminRoot" tabTitle="Produkadmin" tabIcon="information-circle"></ion-tab>\n\n    <ion-tab [root]="profiladminRoot" tabTitle="Profiladmin" tabIcon="information-circle"></ion-tab>\n\n</ion-tabs>\n\n`/*ion-inline-end:"C:\Users\Luthfi\Documents\GitHub\bread\src\pages\tabsadmin\tabsadmin.html"*/,
            template: "\n  <ion-tabs>\n    <ion-tab tabIcon=\"ios-home\" [root]=\"tabOne\"></ion-tab>\n    <ion-tab tabIcon=\"ios-pizza\" [root]=\"tabTwo\"></ion-tab>\n    <ion-tab tabIcon=\"ios-contact\" [root]=\"tabThree\"></ion-tab>\n  </ion-tabs>\n  "
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */]) === "function" && _a || Object])
    ], TabsadminPage);
    return TabsadminPage;
    var _a;
}());

//# sourceMappingURL=tabsadmin.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfiladminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_profil_edit_profil__ = __webpack_require__(94);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ProfiladminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfiladminPage = (function () {
    function ProfiladminPage(db, alertCtrl, fire, navCtrl, navParams) {
        var _this = this;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        var user = this.fire.auth.currentUser;
        console.log(user.uid); //user.uid
        this.db.object('/user/' + user.uid).subscribe(function (data) {
            console.log(data);
            _this.nama = data.name;
            _this.username = data.username;
            _this.telepon = data.telepon;
            _this.alamat = data.alamat;
        });
    }
    ProfiladminPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfiladminPage');
    };
    ProfiladminPage.prototype.EditProfil = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__edit_profil_edit_profil__["a" /* EditProfilPage */]);
    };
    ProfiladminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profiladmin',template:/*ion-inline-start:"C:\Users\Luthfi\Documents\GitHub\bread\src\pages\profiladmin\profiladmin.html"*/`<!--\n\n  Generated template for the ProfiladminPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>profiladmin</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<ion-list>\n\n		<ion-item (click)="EditProfil()">\n\n			<ion-row class="EditProfil">\n\n				<img src="http://www.pvhc.net/img148/awvxzwhtrrtafvkavddd.png" width="70" height="60"/>\n\n				<ion-col>\n\n					<h3><br>{{nama}}</h3>\n\n					<p>edit profil</p>\n\n				</ion-col>	\n\n			</ion-row>\n\n	    </ion-item>\n\n		<ion-item>\n\n			<h3><br><br><b>Email</b></h3>\n\n			<p>{{username}}</p>\n\n		</ion-item>\n\n		<ion-item>\n\n		    <h3><b>No. HP</b></h3>\n\n		    <p>{{telepon}}</p>\n\n		</ion-item>\n\n		<ion-item>\n\n		    <h3><b>Alamat</b></h3>\n\n		    <p>{{alamat}}</p>\n\n		</ion-item>\n\n		<ion-item (click)="Logout()">\n\n			<button ion-button outline item-end>Logout</button>\n\n		</ion-item>\n\n	</ion-list>\n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\Luthfi\Documents\GitHub\bread\src\pages\profiladmin\profiladmin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ProfiladminPage);
    return ProfiladminPage;
}());

//# sourceMappingURL=profiladmin.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdukadminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_produk_edit_produk__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tambah_produk_tambah_produk__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ProdukadminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProdukadminPage = (function () {
    function ProdukadminPage(fireauth, db, navCtrl, navParams) {
        var _this = this;
        this.fireauth = fireauth;
        this.db = db;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db.list('/item').subscribe(function (data) {
            _this.items = data;
            console.log(_this.items);
        });
    }
    ProdukadminPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProdukadminPage');
    };
    ProdukadminPage.prototype.editProduk = function (item) {
        console.log(item.$key);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__edit_produk_edit_produk__["a" /* EditProdukPage */]);
    };
    ProdukadminPage.prototype.deleteProduk = function (item) {
        console.log(item.$key);
        this.db.object("/item/" + item.$key).remove();
    };
    ProdukadminPage.prototype.tambahProduk = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tambah_produk_tambah_produk__["a" /* TambahProdukPage */]);
    };
    ProdukadminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-produkadmin',template:/*ion-inline-start:"C:\Users\Luthfi\Documents\GitHub\bread\src\pages\produkadmin\produkadmin.html"*/`<!--\n\n  Generated template for the ProdukadminPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Tambah Produk</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-card *ngFor="let item of items">\n\n      <ion-item>\n\n        <ion-thumbnail item-start>\n\n          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3AEQwFb78GZahJMVYc3JiezkKPhHHh7Eezrvm739BFSqrGT3iNQ"/>\n\n        </ion-thumbnail>\n\n          <ion-card-content>\n\n            <h2>{{item.namaBarang}}</h2><br>\n\n            <p><b>{{item.hargaBarang}}</b></p>\n\n            <button ion-button (click)="editProduk(item)">Edit</button>\n\n            <button ion-button color="danger" (click)="deleteProduk(item)">Delete</button>\n\n          </ion-card-content>\n\n      </ion-item>\n\n    </ion-card>\n\n\n\n    <ion-fab right bottom>\n\n      <button ion-fab mini (click)="tambahProduk()"><ion-icon name="add"></ion-icon></button>\n\n    </ion-fab>\n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\Luthfi\Documents\GitHub\bread\src\pages\produkadmin\produkadmin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ProdukadminPage);
    return ProdukadminPage;
}());

//# sourceMappingURL=produkadmin.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TambahProdukPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_alert_alert_controller__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TambahProdukPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TambahProdukPage = (function () {
    function TambahProdukPage(db, navCtrl, navParams, alertCtrl) {
        this.db = db;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.submitted = false;
    }
    TambahProdukPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TambahProdukPage');
    };
    TambahProdukPage.prototype.alert = function (message) {
        this.alertCtrl.create({
            title: 'Info!',
            subTitle: message,
            buttons: ['OK']
        }).present();
    };
    TambahProdukPage.prototype.tambah = function (form) {
        this.submitted = true;
        this.db.list('/item/').push({
            namaBarang: this.judul,
            hargaBarang: this.harga,
            deskripsi: this.deskripsi,
            penjualan: 0
        });
        // console.log(this.cart.cartitem);
        var alert = this.alertCtrl.create({
            title: 'Berhasil!',
            subTitle: 'Produk berhasil ditambahkan.',
            buttons: ['OK']
        });
        alert.present();
        console.log(this.judul);
        console.log(this.harga);
        console.log(this.deskripsi);
        this.navCtrl.pop();
    };
    TambahProdukPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-tambah-produk',template:/*ion-inline-start:"C:\Users\Luthfi\Documents\GitHub\bread\src\pages\tambah-produk\tambah-produk.html"*/`<!--\n\n  Generated template for the TambahProdukPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Tambah Produk</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <form #tambahForm="ngForm" novalidate>\n\n    <ion-item>\n\n      <ion-label floating>Nama Produk</ion-label>\n\n      <ion-input [(ngModel)]="judul" name="ttl" type="text" #ttl="ngModel" spellcheck="false" autocapitalize="off" required></ion-input>\n\n    </ion-item>\n\n\n\n    <p ion-text [hidden]="ttl.valid || submitted==false" color="danger" padding-left>\n\n      warning judul\n\n    </p>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Harga</ion-label>\n\n      <ion-input [(ngModel)]="harga" name="hrg" type="number" minvalue="0" #hrg="ngModel" spellcheck="false" autocapitalize="off" required></ion-input>\n\n    </ion-item>\n\n\n\n    <p ion-text [hidden]="hrg.valid || submitted==false" color="danger" padding-left>\n\n      warning harga\n\n    </p>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Deskripsi Produk</ion-label>\n\n      <ion-input [(ngModel)]="deskripsi" name="desc" type="text" #desc="ngModel" spellcheck="false" autocapitalize="off" required></ion-input>\n\n    </ion-item>\n\n  \n\n    <p ion-text [hidden]="desc.valid || submitted==false" color="danger" padding-left>\n\n      warning desc\n\n    </p>\n\n  \n\n\n\n    <!-- <ion-item>\n\n      <ion-label floating>Tanggal Pengiriman</ion-label>\n\n      <ion-datetime displayFormat="DDDD, DD MMMM YYYY" max="2020-12-31" type="string" [(ngModel)]="tanggal" name="date" #date="ngModel" spellcheck="false" autocapitalize="off" required></ion-datetime>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Jam Pengiriman</ion-label>\n\n      <ion-datetime displayFormat="HH.mm WIB" type="string" [(ngModel)]="waktu" name="time" #time="ngModel" spellcheck="false" autocapitalize="off" required></ion-datetime>\n\n    </ion-item> -->\n\n\n\n    <button ion-button [disabled]="!ttl.valid || !hrg.valid || !desc.valid" full (click)="tambah(tambahForm)" type="submit">Tambah Produk</button>\n\n  </form>\n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\Luthfi\Documents\GitHub\bread\src\pages\tambah-produk\tambah-produk.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_alert_alert_controller__["a" /* AlertController */]])
    ], TambahProdukPage);
    return TambahProdukPage;
}());

//# sourceMappingURL=tambah-produk.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PesananadminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detailpesanan_detailpesanan__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the PesananadminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PesananadminPage = (function () {
    function PesananadminPage(navCtrl, fireauth, db, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.fireauth = fireauth;
        this.db = db;
        this.navParams = navParams;
        this.DetailpesananPage = __WEBPACK_IMPORTED_MODULE_2__detailpesanan_detailpesanan__["a" /* DetailpesananPage */];
        this.db.list('/transaksi/').subscribe(function (data) {
            _this.transaksi = data;
        });
    }
    PesananadminPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PesananPage');
    };
    PesananadminPage.prototype.DetailPesanan = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__detailpesanan_detailpesanan__["a" /* DetailpesananPage */]);
    };
    PesananadminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pesananadmin',template:/*ion-inline-start:"C:\Users\Luthfi\Documents\GitHub\bread\src\pages\pesananadmin\pesananadmin.html"*/`<!--\n\n  Generated template for the PesananPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  \n\n    <ion-navbar>\n\n      <ion-title>Pesanan</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content padding>\n\n  \n\n    <ion-card *ngFor="let item of transaksi; let i = index;" [navPush]="DetailpesananPage" [navParams]="{detailtrans:item.$key,itemku:item}">\n\n      <ion-item>\n\n        <ion-thumbnail item-start>\n\n          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3AEQwFb78GZahJMVYc3JiezkKPhHHh7Eezrvm739BFSqrGT3iNQ"/>\n\n        </ion-thumbnail>\n\n          <ion-card-content>\n\n            <h2>Order #{{i+1}}</h2>\n\n            <ion-item>\n\n              <h5>Status:</h5><p><ion-badge [hidden]="item.status!=0" class=\'belumDibayar\'>Belum Dibayar</ion-badge></p>\n\n                <p><ion-badge [hidden]="item.status!=1" >Diproses</ion-badge></p>\n\n            </ion-item>\n\n          </ion-card-content>\n\n      </ion-item>\n\n    </ion-card>\n\n      \n\n  </ion-content>`/*ion-inline-end:"C:\Users\Luthfi\Documents\GitHub\bread\src\pages\pesananadmin\pesananadmin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], PesananadminPage);
    return PesananadminPage;
}());

//# sourceMappingURL=pesananadmin.js.map

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 180;

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/detailpesanan/detailpesanan.module": [
		485,
		11
	],
	"../pages/edit-produk/edit-produk.module": [
		486,
		10
	],
	"../pages/edit-profil/edit-profil.module": [
		487,
		9
	],
	"../pages/konfirmasi-pembayaran/konfirmasi-pembayaran.module": [
		488,
		8
	],
	"../pages/pengiriman/pengiriman.module": [
		489,
		7
	],
	"../pages/pesanan/pesanan.module": [
		490,
		6
	],
	"../pages/pesananadmin/pesananadmin.module": [
		491,
		5
	],
	"../pages/picture/picture.module": [
		492,
		0
	],
	"../pages/produkadmin/produkadmin.module": [
		493,
		4
	],
	"../pages/profiladmin/profiladmin.module": [
		494,
		3
	],
	"../pages/tabsadmin/tabsadmin.module": [
		495,
		2
	],
	"../pages/tambah-produk/tambah-produk.module": [
		496,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 220;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_detail__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service_keranjang__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(navCtrl, fireauth, db, cart, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.fireauth = fireauth;
        this.db = db;
        this.cart = cart;
        this.navParams = navParams;
        this.items = [];
        this.DetailPage = __WEBPACK_IMPORTED_MODULE_2__detail_detail__["a" /* DetailPage */];
        this.db.list('/item/', { query: { orderByChild: 'penjualan' } }).subscribe(function (data) {
            for (var i = data.length - 1, j = 0; i >= data.length - 4; i--) {
                _this.items[j] = data[i];
                j++;
            }
            console.log(_this.items);
        });
    }
    HomePage.prototype.detail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__detail_detail__["a" /* DetailPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Luthfi\Documents\GitHub\bread\src\pages\home\home.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <h4>Produk Terlaris</h4>\n\n  <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-6 round *ngFor="let item of items" [navPush]="DetailPage" [navParams]="{items:item}"><!--item variabel untuk ambil isi dari array items yang ada di add-item.ts -->\n\n          <img src="http://www.seafast.ipb.ac.id/images/stories/ilustrasi/muffin.jpg"/>\n\n          <h6>{{ item.namaBarang }}</h6> <h5>Rp {{ item.hargaBarang }}</h5>\n\n        </ion-col>\n\n      </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\Luthfi\Documents\GitHub\bread\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__providers_service_keranjang__["a" /* CartService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeliPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_keranjang__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the BeliPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BeliPage = (function () {
    function BeliPage(cart, navCtrl, navParams, alertCtrl) {
        this.cart = cart;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    // @ViewChild('quantity') qty;
    // @ViewChild('myDate') date;
    // @ViewChild('myTime') time;
    BeliPage.prototype.ionViewDidLoad = function () {
        this.item = this.navParams.get('items');
        console.log('ionViewDidLoad BeliPage');
        console.log(this.item);
    };
    BeliPage.prototype.alert = function (message) {
        this.alertCtrl.create({
            title: 'Info!',
            subTitle: message,
            buttons: ['OK']
        }).present();
    };
    BeliPage.prototype.beli = function (form) {
        this.cart.cartitem.push({ name: this.item.namaBarang, quantity: this.quantity, total: this.item.hargaBarang * this.quantity, tanggal: this.tanggal, waktu: this.waktu });
        console.log(this.cart.cartitem);
        var alert = this.alertCtrl.create({
            title: 'Pembelian Berhasil Masuk Keranjang!',
            subTitle: 'Selesaikan pembayaran agar barang segera dikirim.',
            buttons: ['OK']
        });
        alert.present();
        console.log(this.cart.cartitem);
        console.log(this.tanggal);
        console.log(this.waktu);
        this.navCtrl.pop();
    };
    BeliPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-beli',template:/*ion-inline-start:"C:\Users\Luthfi\Documents\GitHub\bread\src\pages\beli\beli.html"*/`<!--\n\n  Generated template for the BeliPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Detail Order</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<form #beliForm="ngForm" novalidate>\n\n  <ion-item>\n\n    <ion-label floating>Quantity</ion-label>\n\n    <ion-input [(ngModel)]="quantity" name="qty" type="number" #qty="ngModel" spellcheck="false" autocapitalize="off" required></ion-input>\n\n  </ion-item>\n\n\n\n  <p ion-text [hidden]="!qty.valid" color="danger" *ngIf="quantity<20 || quantity>50" padding-left>\n\n    Quantity minimal 20, maksimal 50 \n\n  </p>\n\n\n\n  <ion-item>\n\n    <ion-label floating>Tanggal Pengiriman</ion-label>\n\n    <ion-datetime displayFormat="DDDD, DD MMMM YYYY" max="2020-12-31" type="string" [(ngModel)]="tanggal" name="date" #date="ngModel" spellcheck="false" autocapitalize="off" required></ion-datetime>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label floating>Jam Pengiriman</ion-label>\n\n    <ion-datetime displayFormat="HH.mm WIB" type="string" [(ngModel)]="waktu" name="time" #time="ngModel" spellcheck="false" autocapitalize="off" required></ion-datetime>\n\n  </ion-item>\n\n\n\n  <button ion-button [disabled]="!qty.valid || !date.valid || !time.valid || quantity<20 || quantity>50" full (click)="beli(beliForm)" type="submit">Beli</button>\n\n</form>\n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\Luthfi\Documents\GitHub\bread\src\pages\beli\beli.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_service_keranjang__["a" /* CartService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], BeliPage);
    return BeliPage;
}());

//# sourceMappingURL=beli.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_detail__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListPage = (function () {
    function ListPage(navCtrl, fireauth, db, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.fireauth = fireauth;
        this.db = db;
        this.navParams = navParams;
        this.DetailPage = __WEBPACK_IMPORTED_MODULE_2__detail_detail__["a" /* DetailPage */];
        this.db.list('/item').subscribe(function (data) {
            _this.items = data;
            console.log(_this.items);
        });
    }
    ListPage.prototype.detail = function () {
        console.log("masuk");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__detail_detail__["a" /* DetailPage */]);
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\Luthfi\Documents\GitHub\bread\src\pages\list\list.html"*/`<!--\n\n  Generated template for the ListPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>List Produk</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-item>\n\n    <ion-label>Filter</ion-label>\n\n    <ion-select [(ngModel)]="jenis" multiple="true">\n\n      <ion-option>Bolu</ion-option>\n\n      <ion-option>Kering</ion-option>\n\n      <ion-option>Basah</ion-option>\n\n      <ion-option>Manis</ion-option>\n\n      <ion-option>Asin</ion-option>\n\n      <ion-option>Keju</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n  <ion-row>\n\n    <ion-col col-6 round *ngFor="let item of items" [navPush]="DetailPage" [navParams]="{items:item}"><!--item variabel untuk ambil isi dari array items yang ada di add-item.ts -->\n\n      <img src="http://www.seafast.ipb.ac.id/images/stories/ilustrasi/muffin.jpg"/>\n\n      <h6>{{ item.namaBarang }}</h6> <h5>Rp {{ item.hargaBarang }}</h5>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\Luthfi\Documents\GitHub\bread\src\pages\list\list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeranjangPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pengiriman_pengiriman__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_service_keranjang__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the KeranjangPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var KeranjangPage = (function () {
    function KeranjangPage(navCtrl, navParams, cart) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cart = cart;
        this.items = [];
        this.total = 0;
        this.items = this.cart.cartitem;
        for (var i = 0; i < this.items.length; i++) {
            var produk = this.items[i];
            this.total += produk.total;
        }
    }
    KeranjangPage.prototype.ionViewDidLoad = function () {
        console.log(this.total);
    };
    KeranjangPage.prototype.removeitem = function (item) {
        var index = this.items.indexOf(item);
        this.items.splice(index, 1);
        console.log(this.items);
        this.total = 0;
        for (var i = 0; i < this.items.length; i++) {
            var produk = this.items[i];
            this.total += produk.total;
        }
        console.log(this.total);
    };
    KeranjangPage.prototype.pengiriman = function () {
        this.cart.totalHarga = this.total;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__pengiriman_pengiriman__["a" /* PengirimanPage */]);
        console.log(this.cart.cartitem);
        console.log(this.cart.totalHarga);
    };
    KeranjangPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-keranjang',template:/*ion-inline-start:"C:\Users\Luthfi\Documents\GitHub\bread\src\pages\keranjang\keranjang.html"*/`<!--\n\n  Generated template for the KeranjangPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Keranjang Belanja</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <!--<ion-list>\n\n    <ion-item *ngFor="let item of items">\n\n      {{item.name}}\n\n      {{item.quantity}}\n\n      {{item.total}}\n\n    </ion-item>\n\n    <ion-item>{{total}}</ion-item>\n\n  </ion-list>-->\n\n\n\n  <ion-item *ngFor="let item of items">\n\n      <ion-thumbnail item-start>\n\n        <img src="http://www.seafast.ipb.ac.id/images/stories/ilustrasi/muffin.jpg" height="60" width="65"/>\n\n      </ion-thumbnail>\n\n        <h5>Nama Produk : {{item.name}}<br>\n\n        Kuantitas : {{item.quantity}} Pcs</h5>\n\n        <p>Total Biaya : Rp.{{item.total}}</p> \n\n        <ion-col><ion-badge (click)="removeitem(item)" ><ion-icon ios="ios-trash" md="md-trash"></ion-icon></ion-badge></ion-col>\n\n  </ion-item>\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <ion-toolbar color="light">\n\n        <button ion-button (click)="pengiriman()" full>Bayar</button>\n\n    </ion-toolbar>\n\n</ion-footer>`/*ion-inline-end:"C:\Users\Luthfi\Documents\GitHub\bread\src\pages\keranjang\keranjang.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__providers_service_keranjang__["a" /* CartService */]])
    ], KeranjangPage);
    return KeranjangPage;
}());

//# sourceMappingURL=keranjang.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransaksiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_transaksi_detail_transaksi__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service_keranjang__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the TransaksiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TransaksiPage = (function () {
    function TransaksiPage(navCtrl, fireauth, db, cart, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.fireauth = fireauth;
        this.db = db;
        this.cart = cart;
        this.navParams = navParams;
        this.transaksi = [];
        this.items = [];
        this.DetailTransaksiPage = __WEBPACK_IMPORTED_MODULE_2__detail_transaksi_detail_transaksi__["a" /* DetailTransaksiPage */];
        var user = this.fireauth.auth.currentUser;
        this.db.list('/transaksi/').subscribe(function (data) {
            for (var i = 0, j = 0; i < data.length; i++) {
                if (data[i].punyauser == user.uid) {
                    _this.transaksi[j] = data[i];
                    j++;
                }
            }
            var key = user.uid;
            console.log(_this.transaksi);
            console.log(_this.transaksi.key);
            if (_this.transaksi.status == 0) {
                _this.classbadge = 'belumDibayar';
            }
        });
    }
    TransaksiPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TransaksiPage');
    };
    TransaksiPage.prototype.detail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__detail_transaksi_detail_transaksi__["a" /* DetailTransaksiPage */]);
    };
    TransaksiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-transaksi',template:/*ion-inline-start:"C:\Users\Luthfi\Documents\GitHub\bread\src\pages\transaksi\transaksi.html"*/`<!--\n\n  Generated template for the TransaksiPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Transaksi</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<ion-item *ngFor="let item of transaksi; let i = index;"  [navPush]="DetailTransaksiPage" [navParams]="{detailtrans:item.$key,itemku:item}">\n\n        <ion-thumbnail item-start>\n\n          <img src="http://www.seafast.ipb.ac.id/images/stories/ilustrasi/muffin.jpg" height="60" width="65"/>\n\n        </ion-thumbnail>\n\n	        <h5>Order #{{i+1}}</h5>\n\n          <p></p>\n\n          <p><ion-badge [hidden]="item.status!=0" class=\'belumDibayar\'>Belum Dibayar</ion-badge></p>\n\n          <p><ion-badge [hidden]="item.status!=1" >Diproses</ion-badge></p>\n\n          <p><ion-badge [hidden]="item.status!=2" class="sudahDikirim">Selesai</ion-badge></p>\n\n    </ion-item>\n\n    <!--<ion-item>\n\n        <ion-thumbnail item-start (click)="detail()">\n\n           <img src="http://www.seafast.ipb.ac.id/images/stories/ilustrasi/muffin.jpg" height="60" width="65"/>\n\n        </ion-thumbnail>\n\n	        <h5>Roti Muffin Enak Cokelat</h5>\n\n	        <p>Rp 35.000<br><ion-badge>Sedang dikirim</ion-badge></p>\n\n	</ion-item>\n\n	<ion-item>\n\n        <ion-thumbnail item-start (click)="detail()">\n\n           <img src="http://www.seafast.ipb.ac.id/images/stories/ilustrasi/muffin.jpg" height="60" width="65"/>\n\n        </ion-thumbnail>\n\n	        <h5>Roti Muffin Enak Cokelat</h5>\n\n	        <p>Rp 40.000<br><ion-badge class="sudahDikirim">Sudah dikirim</ion-badge></p>\n\n  </ion-item>\n\n  <ion-row>\n\n    <ion-col col-6 round *ngFor="let item of transaksi" [navPush]="DetailTransaksiPage" [navParams]="{detailtrans:item.$key}">\n\n      <img src="http://www.seafast.ipb.ac.id/images/stories/ilustrasi/muffin.jpg"/>\n\n      <h6>{{ item.pembayaran }}</h6> <h5>{{ item.total }}</h5>\n\n    </ion-col>\n\n    <p ion-text [hidden]="username.valid || submitted == false" color="danger" padding-left class="Warning">\n\n			Email harus diisi\n\n			</p>\n\n  </ion-row>-->\n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\Luthfi\Documents\GitHub\bread\src\pages\transaksi\transaksi.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__providers_service_keranjang__["a" /* CartService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], TransaksiPage);
    return TransaksiPage;
}());

//# sourceMappingURL=transaksi.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailTransaksiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__konfirmasi_pembayaran_konfirmasi_pembayaran__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the DetailTransaksiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailTransaksiPage = (function () {
    function DetailTransaksiPage(navCtrl, fireauth, db, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.fireauth = fireauth;
        this.db = db;
        this.navParams = navParams;
        this.items = [];
        this.trans = this.navParams.get('detailtrans');
        this.itemsaya = this.navParams.get('itemku');
        this.index = this.navParams.get('index');
        this.KonfirmasiPage = __WEBPACK_IMPORTED_MODULE_0__konfirmasi_pembayaran_konfirmasi_pembayaran__["a" /* KonfirmasiPembayaranPage */];
        var user = this.fireauth.auth.currentUser;
        this.db.list('/transaksi/' + this.trans + '/item').subscribe(function (data) {
            _this.detailtransaksi = data;
            console.log(_this.detailtransaksi);
        });
    }
    DetailTransaksiPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailTransaksiPage');
        console.log(this.trans);
        console.log(this.itemsaya);
    };
    DetailTransaksiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-detail-transaksi',template:/*ion-inline-start:"C:\Users\Luthfi\Documents\GitHub\bread\src\pages\detail-transaksi\detail-transaksi.html"*/`<!--\n\n  Generated template for the DetailTransaksiPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Detail Transaksi</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-item *ngFor="let item of detailtransaksi">\n\n          <ion-thumbnail item-start><img src="http://www.seafast.ipb.ac.id/images/stories/ilustrasi/muffin.jpg"height="60" width="65"/>\n\n          </ion-thumbnail>\n\n          <h6>{{ item.name }}</h6>\n\n          <h6>Quantity : {{ item.quantity }}</h6>\n\n          <h6>Jadwal Pengiriman :</h6>\n\n          <p> {{ item.tanggal}} <br> {{item.waktu}} </p>\n\n    </ion-item>\n\n  <h5>Order #{{index+1}}</h5><ion-badge [hidden]="itemsaya.status!=0" class=\'belumDibayar\'>Belum Dibayar</ion-badge>\n\n  <ion-badge [hidden]="itemsaya.status!=1" >Diproses</ion-badge>\n\n  <ion-badge [hidden]="itemsaya.status!=2" class="sudahDikirim">Selesai</ion-badge>\n\n    <p>Total Pembayaran :<b> Rp.{{itemsaya.total}}</b></p>\n\n    <p>Dikirim ke alamat :<b> {{itemsaya.alamat}}</b></p>\n\n    <h6>Transfer ke :</h6>\n\n    <b [hidden]="itemsaya.pembayaran!=\'bca\'">BCA dengan Nomer Rekening 731 025 2527 a/n Denny</b>\n\n    <b [hidden]="itemsaya.pembayaran!=\'bni\'">BNI dengan Nomer Rekening 023 827 2088 a/n Denny</b>\n\n    <b [hidden]="itemsaya.pembayaran!=\'bri\'">BRI dengan Nomer Rekening 034 101 000 743 303 a/n Denny</b>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar color="light" [navPush]="KonfirmasiPage" [navParams]="{itemgue:itemsaya}">\n\n      <button [hidden]="itemsaya.status!=0" ion-button full>Konfirmasi</button>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n\n\n`/*ion-inline-end:"C:\Users\Luthfi\Documents\GitHub\bread\src\pages\detail-transaksi\detail-transaksi.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */]])
    ], DetailTransaksiPage);
    return DetailTransaksiPage;
}());

//# sourceMappingURL=detail-transaksi.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_profil_edit_profil__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ProfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilPage = (function () {
    function ProfilPage(app, db, alertCtrl, fire, navCtrl, navParams) {
        var _this = this;
        this.app = app;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        var user = this.fire.auth.currentUser;
        console.log(user.uid); //user.uid
        this.db.object('/user/' + user.uid).subscribe(function (data) {
            console.log(data);
            _this.nama = data.name;
            _this.username = data.username;
            _this.telepon = data.telepon;
            _this.alamat = data.alamat;
        });
    }
    ProfilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilPage');
    };
    ProfilPage.prototype.EditProfil = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__edit_profil_edit_profil__["a" /* EditProfilPage */]);
    };
    ProfilPage.prototype.Logout = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Apakah Anda Yakin?',
            subTitle: 'Profil Anda akan disimpan. Kami akan menunggu order Anda di BReAD',
            buttons: [
                {
                    text: 'Tidak',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Ya',
                    handler: function () {
                        console.log('Agree clicked');
                        // this.navCtrl.setRoot(MyApp);
                        _this.fire.auth.signOut;
                        _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
                    }
                }
            ]
        });
        confirm.present();
    };
    ProfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profil',template:/*ion-inline-start:"C:\Users\Luthfi\Documents\GitHub\bread\src\pages\profil\profil.html"*/`<!--\n\n  Generated template for the ProfilPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Profil</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<ion-list>\n\n		<ion-item (click)="EditProfil()">\n\n			<ion-row class="EditProfil">\n\n				<img src="http://www.pvhc.net/img148/awvxzwhtrrtafvkavddd.png" width="70" height="60"/>\n\n				<ion-col>\n\n					<h3><br>{{nama}}</h3>\n\n					<p>edit profil</p>\n\n				</ion-col>	\n\n			</ion-row>\n\n	    </ion-item>\n\n		<ion-item>\n\n			<h3><br><br><b>Email</b></h3>\n\n			<p>{{username}}</p>\n\n		</ion-item>\n\n		<ion-item>\n\n		    <h3><b>No. HP</b></h3>\n\n		    <p>{{telepon}}</p>\n\n		</ion-item>\n\n		<ion-item>\n\n		    <h3><b>Alamat</b></h3>\n\n		    <p>{{alamat}}</p>\n\n		</ion-item>\n\n		<ion-item (click)="Logout()">\n\n			<button ion-button outline item-end>Logout</button>\n\n		</ion-item>\n\n	</ion-list>\n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\Luthfi\Documents\GitHub\bread\src\pages\profil\profil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ProfilPage);
    return ProfilPage;
}());

//# sourceMappingURL=profil.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(db, alertCtrl, fire, navCtrl, navParams) {
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.submitted = false;
        this.ayam = 'belum diisi';
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.alert = function (message) {
        this.alertCtrl.create({
            title: 'Info!',
            subTitle: message,
            buttons: ['OK']
        }).present();
    };
    RegisterPage.prototype.reg = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            this.fire.auth.createUserWithEmailAndPassword(this.email, this.password)
                .then(function (data) {
                console.log('got data ', data);
                console.log(_this.email);
                _this.db.object('/user/' + data.uid).set({
                    id: data.uid,
                    name: _this.name,
                    username: _this.email,
                    telepon: _this.telepon,
                    alamat: _this.ayam
                });
                console.log(data);
                _this.alert('Registered!');
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
            })
                .catch(function (error) {
                console.log('got an error ', error);
                _this.alert(error.message);
            });
        }
        else {
        }
    };
    RegisterPage.prototype.masuk = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\Luthfi\Documents\GitHub\bread\src\pages\register\register.html"*/`<!--\n\n  Generated template for the RegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Register</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<img src="http://cdn1-a.production.liputan6.static6.com/medias/875802/big/067921900_1431505957-20150512_084409.JPG"/>\n\n  <form #registerForm="ngForm" novalidate>\n\n<ion-list >\n\n      <ion-item>\n\n				<ion-label floating>Nama</ion-label>\n\n				<ion-input [(ngModel)]="name" name="name" type="text" #nama="ngModel" spellcheck="false" autocapitalize="off"\n\n					required>\n\n				</ion-input>\n\n			</ion-item>\n\n		\n\n			<p ion-text [hidden]="nama.valid || submitted==false" color="danger" padding-left class="Warning">\n\n				Nama harus diisi.\n\n			</p>\n\n\n\n			<ion-item>\n\n				<ion-label floating>Telepon</ion-label>					\n\n				<ion-input [(ngModel)]="telepon" name="telepon" type="number" minlength="11" maxlength="12" #telp="ngModel" spellcheck="false" autocapitalize="off"\n\n						required>\n\n				</ion-input>\n\n			</ion-item>\n\n\n\n			<p ion-text [hidden]="telp.valid || submitted==false" color="danger" padding-left class="Warning">\n\n				Nomor telepon harus diisi.\n\n			</p>\n\n		\n\n		  <ion-item>\n\n			<ion-label floating>Email</ion-label>\n\n			<ion-input [(ngModel)]="email" name="email" type="text" #mail="ngModel" required></ion-input>\n\n			</ion-item>\n\n			\n\n			<p ion-text [hidden]="mail.valid || submitted==false" color="danger" padding-left class="Warning">\n\n					Email harus diisi.\n\n			</p>\n\n		\n\n		  <ion-item>\n\n			<ion-label floating>Password</ion-label>\n\n			<ion-input [(ngModel)]="password" name="password" type="password" #passwd="ngModel" required></ion-input>\n\n			</ion-item>\n\n			\n\n			<p ion-text [hidden]="passwd.valid || submitted==false" color="danger" padding-left class="Warning">\n\n					Password harus diisi.\n\n			</p>\n\n		  \n\n      <ion-item>\n\n      <ion-label floating>Ketik Ulang Password</ion-label>\n\n			<ion-input [(ngModel)]="password2" name="password2" type="password" #passwd2="ngModel" required></ion-input>\n\n      </ion-item>\n\n			\n\n			<p ion-text [hidden]="passwd2.valid || submitted==false" color="danger" padding-left class="Warning">\n\n					Harus diisi.\n\n			</p>\n\n\n\n			<p ion-text [hidden]="!passwd.valid || !passwd2.valid || password==password2" color="danger" padding-left class="Warning">\n\n				Password tidak cocok, coba lagi.\n\n			</p>\n\n		</ion-list>\n\n\n\n		<!--<ion-row responsive-sm>\n\n			<ion-col>\n\n				<button ion-button (click)="login(loginForm)" type="submit" block>Masuk</button>\n\n			</ion-col>\n\n		</ion-row>-->\n\n\n\n		<!--ini buat mock up-->\n\n		<ion-row>\n\n			<ion-col>\n\n				<button block ion-button color="primary" type="submit" (click)="reg(registerForm)">Register</button>\n\n			</ion-col>\n\n		</ion-row>\n\n\n\n<!--		\n\n		<div text-center>\n\n			<button ion-button medium>\n\n				Click Here\n\n			</button>\n\n		</div>\n\n				-->\n\n\n\n		<ion-grid>\n\n			<ion-row>\n\n				<ion-col text-center>\n\n					<p class="Head">\n\n						<font color="black">Sudah punya akun?</font>\n\n						<a class="Link" (click)="masuk()"> Masuk.</a>\n\n					</p>\n\n				</ion-col>\n\n			</ion-row>\n\n			<!--<ion-row>\n\n				<ion-col text-center><a><font color="black"></font><a (click)="lupaPassword()">Lupa password.</a></a></ion-col>\n\n			</ion-row>-->\n\n		</ion-grid>\n\n\n\n	</form>\n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\Luthfi\Documents\GitHub\bread\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], RegisterPage);
    return RegisterPage;
}());

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
//# sourceMappingURL=register.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(343);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_konfirmasi_pembayaran_konfirmasi_pembayaran__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_edit_profil_edit_profil__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_detailpesanan_detailpesanan__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_produkadmin_produkadmin__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_profiladmin_profiladmin__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_pesananadmin_pesananadmin__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabsadmin_tabsadmin__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_beli_beli__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_pengiriman_pengiriman__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_detail_transaksi_detail_transaksi__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_register_register__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_home_home__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_list_list__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_keranjang_keranjang__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_transaksi_transaksi__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_profil_profil__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_tabs_tabs__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_detail_detail__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_status_bar__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_splash_screen__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_angularfire2__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angularfire2_auth__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_angularfire2_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_service_keranjang__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_pesanan_pesanan__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_edit_produk_edit_produk__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_tambah_produk_tambah_produk__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var config = {
    apiKey: "AIzaSyD1YKYgoywKMAXcIrXPMt7QmRMCQdL3fr0",
    authDomain: "meong-8704a.firebaseapp.com",
    databaseURL: "https://meong-8704a.firebaseio.com",
    projectId: "meong-8704a",
    storageBucket: "",
    messagingSenderId: "97474052902"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_10__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_16__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_keranjang_keranjang__["a" /* KeranjangPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_transaksi_transaksi__["a" /* TransaksiPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_profil_profil__["a" /* ProfilPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_detail_transaksi_detail_transaksi__["a" /* DetailTransaksiPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_pengiriman_pengiriman__["a" /* PengirimanPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_pesanan_pesanan__["a" /* PesananPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_beli_beli__["a" /* BeliPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabsadmin_tabsadmin__["a" /* TabsadminPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_pesananadmin_pesananadmin__["a" /* PesananadminPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_produkadmin_produkadmin__["a" /* ProdukadminPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_profiladmin_profiladmin__["a" /* ProfiladminPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_detailpesanan_detailpesanan__["a" /* DetailpesananPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_edit_produk_edit_produk__["a" /* EditProdukPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_tambah_produk_tambah_produk__["a" /* TambahProdukPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_edit_profil_edit_profil__["a" /* EditProfilPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_konfirmasi_pembayaran_konfirmasi_pembayaran__["a" /* KonfirmasiPembayaranPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_12_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/detailpesanan/detailpesanan.module#DetailpesananPageModule', name: 'DetailpesananPage', segment: 'detailpesanan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-produk/edit-produk.module#EditProdukPageModule', name: 'EditProdukPage', segment: 'edit-produk', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-profil/edit-profil.module#EditProfilPageModule', name: 'EditProfilPage', segment: 'edit-profil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/konfirmasi-pembayaran/konfirmasi-pembayaran.module#KonfirmasiPembayaranPageModule', name: 'KonfirmasiPembayaranPage', segment: 'konfirmasi-pembayaran', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pengiriman/pengiriman.module#PengirimanPageModule', name: 'PengirimanPage', segment: 'pengiriman', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pesanan/pesanan.module#PesananPageModule', name: 'PesananPage', segment: 'pesanan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pesananadmin/pesananadmin.module#PesananadminPageModule', name: 'PesananadminPage', segment: 'pesananadmin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/picture/picture.module#PicturePageModule', name: 'PicturePage', segment: 'picture', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/produkadmin/produkadmin.module#ProdukadminPageModule', name: 'ProdukadminPage', segment: 'produkadmin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profiladmin/profiladmin.module#ProfiladminPageModule', name: 'ProfiladminPage', segment: 'profiladmin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabsadmin/tabsadmin.module#TabsadminPageModule', name: 'TabsadminPage', segment: 'tabsadmin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tambah-produk/tambah-produk.module#TambahProdukPageModule', name: 'TambahProdukPage', segment: 'tambah-produk', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_25_angularfire2__["a" /* AngularFireModule */].initializeApp(config),
                __WEBPACK_IMPORTED_MODULE_26_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_27_angularfire2_database__["b" /* AngularFireDatabaseModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_12_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_16__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_keranjang_keranjang__["a" /* KeranjangPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_transaksi_transaksi__["a" /* TransaksiPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_profil_profil__["a" /* ProfilPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_detail_transaksi_detail_transaksi__["a" /* DetailTransaksiPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_pengiriman_pengiriman__["a" /* PengirimanPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_pesanan_pesanan__["a" /* PesananPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_beli_beli__["a" /* BeliPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabsadmin_tabsadmin__["a" /* TabsadminPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_pesananadmin_pesananadmin__["a" /* PesananadminPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_profiladmin_profiladmin__["a" /* ProfiladminPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_produkadmin_produkadmin__["a" /* ProdukadminPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_detailpesanan_detailpesanan__["a" /* DetailpesananPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_edit_produk_edit_produk__["a" /* EditProdukPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_tambah_produk_tambah_produk__["a" /* TambahProdukPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_edit_profil_edit_profil__["a" /* EditProfilPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_konfirmasi_pembayaran_konfirmasi_pembayaran__["a" /* KonfirmasiPembayaranPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_28__providers_service_keranjang__["a" /* CartService */],
                { provide: __WEBPACK_IMPORTED_MODULE_10__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_12_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Luthfi\Documents\GitHub\bread\src\app\app.html"*/`<ion-nav [root]="rootPage"></ion-nav>\n\n`/*ion-inline-end:"C:\Users\Luthfi\Documents\GitHub\bread\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartService = (function () {
    function CartService(fireauth, db) {
        this.fireauth = fireauth;
        this.db = db;
        this.cartitem = [];
    }
    CartService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], CartService);
    return CartService;
}());

//# sourceMappingURL=service-keranjang.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tabsadmin_tabsadmin__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register__ = __webpack_require__(277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { AngularFireAuth } from 'angularfire2/auth';
// import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(fire, navCtrl, navParams, alertCtrl) {
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.submitted = false;
    }
    // @ViewChild('username') uname;
    // @ViewChild('password') password;
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
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
    LoginPage.prototype.alert = function (message) {
        this.alertCtrl.create({
            title: 'Info!',
            subTitle: message,
            buttons: ['OK']
        }).present();
    };
    LoginPage.prototype.masuk = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            this.fire.auth.signInWithEmailAndPassword(this.uname, this.password)
                .then(function (user) {
                //this.navCtrl.setRoot( LoggedinPage );
                // user is logged in
                if (_this.uname == 'nuhsat@gmail.com' || _this.uname == 'jovan@gmail.com') {
                    console.log('got some data', _this.fire.auth.currentUser);
                    _this.alert('Success! You\'re logged in');
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__tabsadmin_tabsadmin__["a" /* TabsadminPage */]);
                }
                else {
                    console.log('got some data', _this.fire.auth.currentUser);
                    _this.alert('Success! You\'re logged in');
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
                }
            })
                .catch(function (error) {
                console.log('got an error', error);
                _this.alert(error.message);
            });
        }
        else {
        }
        console.log('Would sign in with ', this.uname, this.password);
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__register_register__["a" /* RegisterPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Luthfi\Documents\GitHub\bread\src\pages\login\login.html"*/`<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="bread">\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<img src="http://cdn1-a.production.liputan6.static6.com/medias/875802/big/067921900_1431505957-20150512_084409.JPG"/>\n\n  <form #loginForm="ngForm" novalidate>\n\n		<ion-list >\n\n			<ion-item>\n\n				<ion-label floating><p>Email</p></ion-label>\n\n				<ion-input [(ngModel)]="uname" name="uname" type="email" #username="ngModel" spellcheck="false" autocapitalize="off"\n\n					required>\n\n				</ion-input>\n\n			</ion-item>\n\n			<p ion-text [hidden]="username.valid || submitted == false" color="danger" padding-left class="Warning">\n\n			Email harus diisi\n\n			</p>\n\n\n\n			<ion-item>\n\n				<ion-label floating><p>Password</p></ion-label>\n\n				\n\n				\n\n				<ion-input [(ngModel)]="password" name="pass" type="password" #pass="ngModel" spellcheck="false" autocapitalize="off"\n\n				required></ion-input>\n\n				<!-- <button class="tombol" [hidden]="lihat == false" (click)="showPassword()" ion-button clear color="dark" type="button" item-right> <ion-icon name="md-eye" class=\'icon\' color="primary2"> </ion-icon> </button>\n\n				<button class="tombol" [hidden]="lihat == true" (click)="hidePassword()" ion-button clear color="dark" type="button" item-right> <ion-icon name="md-eye-off" class=\'icon\' color="primary2"> </ion-icon> </button> -->\n\n				\n\n\n\n			</ion-item>\n\n			\n\n			<p ion-text [hidden]="pass.valid || submitted == false" color="danger" padding-left class="Warning">\n\n				Password harus diisi\n\n			</p>\n\n		</ion-list>\n\n\n\n		<!--<ion-row responsive-sm>\n\n			<ion-col>\n\n				<button ion-button (click)="login(loginForm)" type="submit" block>Masuk</button>\n\n			</ion-col>\n\n		</ion-row>-->\n\n\n\n		<!--ini buat mock up-->\n\n		<ion-row>\n\n			<ion-col>\n\n				<button class="ButtonMasuk" ion-button color="AyoDermawan" (click)="masuk(loginForm)" type="submit" full><p class="ButtonWord">Masuk</p></button>\n\n			</ion-col>\n\n		</ion-row>\n\n\n\n<!--		\n\n		<div text-center>\n\n			<button ion-button medium>\n\n				Click Here\n\n			</button>\n\n		</div>\n\n				-->\n\n\n\n		<ion-grid>\n\n			<ion-row>\n\n				<ion-col text-center>\n\n					<p class="Head">\n\n						<font color="black">Tidak punya akun?</font>\n\n						<a class="Link" (click)="register()"> Buat akun.</a>\n\n					</p>\n\n				</ion-col>\n\n			</ion-row>\n\n			<!--<ion-row>\n\n				<ion-col text-center><a><font color="black"></font><a (click)="lupaPassword()">Lupa password.</a></a></ion-col>\n\n			</ion-row>-->\n\n		</ion-grid>\n\n\n\n	</form>\n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\Luthfi\Documents\GitHub\bread\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the EditProfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditProfilPage = (function () {
    function EditProfilPage(db, alertCtrl, fire, navCtrl, navParams) {
        var _this = this;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        var user = this.fire.auth.currentUser;
        console.log(user.uid); //user.uid
        this.db.object('/user/' + user.uid).subscribe(function (data) {
            console.log(data);
            _this.nama = data.name;
            _this.username = data.username;
            _this.telepon = data.telepon;
            _this.alamat = data.alamat;
        });
    }
    EditProfilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditProfilPage');
    };
    EditProfilPage.prototype.alert = function (message) {
        this.alertCtrl.create({
            title: 'Info!',
            subTitle: message,
            buttons: ['OK']
        }).present();
    };
    EditProfilPage.prototype.simpan = function () {
        var user = this.fire.auth.currentUser;
        this.db.object('/user/' + user.uid).update({
            name: this.nama,
            telepon: this.telepon,
            alamat: this.alamat
        });
        this.navCtrl.pop();
        this.alert('Profil Berhasil Diedit');
    };
    EditProfilPage.prototype.EditFoto = function () {
        var _this = this;
        Object(__WEBPACK_IMPORTED_MODULE_4_firebase__["storage"])().ref().child('/picture/' + this.user_id).getDownloadURL().then(function (url) {
            _this.image = url;
        });
    };
    EditProfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-profil',template:/*ion-inline-start:"C:\Users\Luthfi\Documents\GitHub\bread\src\pages\edit-profil\edit-profil.html"*/`<!--\n\n  Generated template for the EditProfilPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Edit Profil</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<ion-list>\n\n		<ion-item (click)="EditFoto()">\n\n			<ion-row>\n\n				<img src="http://www.pvhc.net/img148/awvxzwhtrrtafvkavddd.png" width="35" height="30"/>\n\n				<ion-col><p>edit foto</p></ion-col>\n\n			</ion-row>\n\n		</ion-item>\n\n\n\n	  <ion-item>\n\n	    <ion-label stacked>Username</ion-label>\n\n	    <ion-input type="text" value="{{nama}}" [(ngModel)]="nama" name="nama" #user="ngModel"></ion-input>\n\n	  </ion-item>\n\n\n\n	  <ion-item>\n\n	    <ion-label stacked>Nomor Telepon</ion-label>\n\n	    <ion-input type="text[0-9]" value="{{telepon}}"></ion-input>\n\n		</ion-item>\n\n		\n\n	  <ion-item>\n\n	    <ion-label stacked>Alamat</ion-label> \n\n	    <ion-textarea type="text" value="{{alamat}}"></ion-textarea>\n\n	  </ion-item>\n\n	</ion-list>\n\n\n\n	<button ion-button full (click)="simpan()">Simpan</button>\n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\Luthfi\Documents\GitHub\bread\src\pages\edit-profil\edit-profil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], EditProfilPage);
    return EditProfilPage;
}());

//# sourceMappingURL=edit-profil.js.map

/***/ })

},[321]);
//# sourceMappingURL=main.js.map