webpackJsonp([3],{

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_service_keranjang__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__keranjang_keranjang__ = __webpack_require__(146);
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
        this.jumlahRoti = 20;
        this.idRoti = 1;
    }
    DetailPage.prototype.ionViewWillLoad = function () {
        this.item = this.navParams.get('items');
    };
    DetailPage.prototype.presentPrompt = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Jumlah Pembelian',
            inputs: [
                {
                    name: 'amount',
                    placeholder: this.jumlahRoti + ' buah'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Submit',
                    handler: function (data) {
                        if (data.amount != /([A-Z])\w+/g && data.amount > 20 && data.amount < 100) {
                            _this.jumlahRoti = data.amount;
                        }
                        else if (data.amount < 20) {
                            _this.jumlahRoti = 20;
                            var alert_1 = _this.alertCtrl.create({
                                title: 'Pembelian Kurang dari Jumlah Minimum!',
                                subTitle: 'Pembelian roti minimum menggunakan aplikasi ini adalah 20 buah.',
                                buttons: ['OK']
                            });
                            alert_1.present();
                        }
                        else {
                            console.log("lebihmasuk");
                            _this.jumlahRoti = 20;
                            var alert_2 = _this.alertCtrl.create({
                                title: 'Pembelian Lebih dari Jumlah Maksimum!',
                                subTitle: 'Pembelian roti maksimum menggunakan aplikasi ini adalah 100 buah.',
                                buttons: ['OK']
                            });
                            alert_2.present();
                        }
                        // if (User.isValid(data.username, data.password)) {
                        //   // logged in!
                        // } else {
                        //   // invalid login
                        //   return false;
                        // }
                    }
                }
            ]
        });
        alert.present();
    };
    DetailPage.prototype.masukKeranjang = function () {
        this.cart.cartitem.push({ quantity: this.jumlahRoti, name: this.item.namaBarang, total: this.item.hargaBarang * this.jumlahRoti });
        console.log(this.cart.cartitem);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__keranjang_keranjang__["a" /* KeranjangPage */]);
        var alert = this.alertCtrl.create({
            title: 'Pembelian Berhasil Masuk Keranjang!',
            subTitle: 'Selesaikan pembayaran agar barang segera dikirim.',
            buttons: ['OK']
        });
        alert.present();
    };
    DetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-detail',template:/*ion-inline-start:"C:\Users\ariel\Documents\Project\bread\src\pages\detail\detail.html"*/`<!--\n\n  Generated template for the DetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Detail</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <img src="http://www.seafast.ipb.ac.id/images/stories/ilustrasi/muffin.jpg"/>\n\n    <h6>{{item.namaBarang}}</h6>\n\n    <h5>{{item.hargaBarang}}</h5>\n\n    <p>Bahan: Tepung, telur, gula, mentega.</p>\n\n    \n\n    \n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <ion-toolbar color="light">\n\n        <ion-row>\n\n            <ion-col col-6>\n\n                <button ion-button full color="secondary" (click)="presentPrompt()">{{jumlahRoti}} buah</button>\n\n            </ion-col>\n\n            <ion-col col-6>\n\n                <button ion-button full (click)="masukKeranjang()">Beli</button>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-toolbar>\n\n  </ion-footer>\n\n`/*ion-inline-end:"C:\Users\ariel\Documents\Project\bread\src\pages\detail\detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_service_keranjang__["a" /* CartService */]])
    ], DetailPage);
    return DetailPage;
}());

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeranjangPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pengiriman_pengiriman__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_service_keranjang__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(17);
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
        this.pengiriman = __WEBPACK_IMPORTED_MODULE_0__pengiriman_pengiriman__["a" /* PengirimanPage */];
        for (var i = 0; i < this.items.length; i++) {
            var produk = this.items[i];
            this.total += produk.total;
        }
    }
    KeranjangPage.prototype.ionViewDidLoad = function () {
        console.log(this.total);
    };
    KeranjangPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-keranjang',template:/*ion-inline-start:"C:\Users\ariel\Documents\Project\bread\src\pages\keranjang\keranjang.html"*/`<!--\n\n  Generated template for the KeranjangPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item *ngFor="let item of items">\n\n      {{item.name}}\n\n      {{item.quantity}}\n\n      {{item.total}}\n\n    </ion-item>\n\n<ion-item>{{total}}</ion-item>\n\n</ion-list>\n\n  <ion-navbar>\n\n    <ion-title>Keranjang</ion-title>\n\n  </ion-navbar>\n\n  <ion-item>\n\n      <ion-label>Pilih semua</ion-label>\n\n      <ion-checkbox color="secondary"></ion-checkbox>\n\n  </ion-item>\n\n    <ion-footer>\n\n			<ion-col>\n\n				<button class="ButtonMasuk" ion-button color="AyoDermawan" [navPush]="pengiriman" full><p class="ButtonWord">Masuk</p></button>\n\n			</ion-col>\n\n		</ion-footer>\n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\ariel\Documents\Project\bread\src\pages\keranjang\keranjang.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__providers_service_keranjang__["a" /* CartService */]])
    ], KeranjangPage);
    return KeranjangPage;
}());

//# sourceMappingURL=keranjang.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PengirimanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pesanan_pesanan__ = __webpack_require__(286);
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
    function PengirimanPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PengirimanPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PengirimanPage');
    };
    PengirimanPage.prototype.pesanan = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pesanan_pesanan__["a" /* PesananPage */]);
    };
    PengirimanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pengiriman',template:/*ion-inline-start:"C:\Users\ariel\Documents\Project\bread\src\pages\pengiriman\pengiriman.html"*/`<!--\n  Generated template for the PengirimanPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>pengiriman</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n    <ion-label stacked>Nama Penerima</ion-label>\n    <ion-input type="text"></ion-input>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label stacked>Alamat</ion-label>\n    <ion-textarea type="text"></ion-textarea>\n  </ion-item>\n  <ion-item>\n      <ion-label stacked>No.Telp</ion-label>\n      <ion-input type="number"></ion-input>\n    </ion-item>\n  <ion-list radio-group>\n    <ion-list-header>\n      Pilihan Pembayaran\n    </ion-list-header>\n  \n    <ion-item>\n      <ion-label>BCA</ion-label>\n      <ion-radio  value="bca"></ion-radio>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label>BNI</ion-label>\n      <ion-radio value="bni"></ion-radio>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label>BRI</ion-label>\n      <ion-radio value="bri" ></ion-radio>\n    </ion-item>\n  </ion-list>\n  <ion-footer>\n			<ion-col>\n				<button class="ButtonMasuk" ion-button color="AyoDermawan" (click)="pesanan()" full><p class="ButtonWord">Masuk</p></button>\n			</ion-col>\n		</ion-footer>\n</ion-content>\n`/*ion-inline-end:"C:\Users\ariel\Documents\Project\bread\src\pages\pengiriman\pengiriman.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], PengirimanPage);
    return PengirimanPage;
}());

//# sourceMappingURL=pengiriman.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailTransaksiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
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
    function DetailTransaksiPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DetailTransaksiPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailTransaksiPage');
    };
    DetailTransaksiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail-transaksi',template:/*ion-inline-start:"C:\Users\ariel\Documents\Project\bread\src\pages\detail-transaksi\detail-transaksi.html"*/`<!--\n\n  Generated template for the DetailTransaksiPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Detail Transaksi</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<h5>Roti Muffin Enak Cokelat</h5><ion-badge class="belumDibayar" item-end>Belum dibayar</ion-badge>\n\n    <p>20 buah<br><b>Rp 59.000</b></p>\n\n    <h6>Transfer ke:</h6>\n\n    <p>012 2323 35445 (Bank BRC)<br>a.n. Bread Unit IPB</p>\n\n    <h6>Dikirim:</h6>\n\n    <p>Selasa, 1 Januari 2018<br>07.00 WIB</p>\n\n    <h6>Alamat:</h6>\n\n    <p>Jalan-jalan kuy</p>\n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\ariel\Documents\Project\bread\src\pages\detail-transaksi\detail-transaksi.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DetailTransaksiPage);
    return DetailTransaksiPage;
}());

//# sourceMappingURL=detail-transaksi.js.map

/***/ }),

/***/ 156:
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
webpackEmptyAsyncContext.id = 156;

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/detail-transaksi/detail-transaksi.module": [
		430,
		2
	],
	"../pages/pengiriman/pengiriman.module": [
		431,
		1
	],
	"../pages/pesanan/pesanan.module": [
		432,
		0
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
webpackAsyncContext.id = 197;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(285);
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
        this.lihat = true;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.showPassword = function () {
        this.status = "text";
        this.lihat = false;
        console.log(this.status);
    };
    LoginPage.prototype.hidePassword = function () {
        this.status = "password";
        this.lihat = true;
        console.log(this.status);
    };
    LoginPage.prototype.alert = function (message) {
        this.alertCtrl.create({
            title: 'Info!',
            subTitle: message,
            buttons: ['OK']
        }).present();
    };
    LoginPage.prototype.masuk = function () {
        var _this = this;
        this.fire.auth.signInWithEmailAndPassword(this.uname.value, this.password.value)
            .then(function (data) {
            console.log('got some data', _this.fire.auth.currentUser);
            _this.alert('Success! You\'re logged in');
            //this.navCtrl.setRoot( LoggedinPage );
            // user is logged in
        })
            .catch(function (error) {
            console.log('got an error', error);
            _this.alert(error.message);
        });
        console.log('Would sign in with ', this.uname.value, this.password.value);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* RegisterPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('username'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "uname", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('password'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "password", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\ariel\Documents\Project\bread\src\pages\login\login.html"*/`<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="bread">\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<img src="http://cdn1-a.production.liputan6.static6.com/medias/875802/big/067921900_1431505957-20150512_084409.JPG"/>\n\n  <form #loginForm="ngForm" novalidate>\n\n		<ion-list >\n\n			<ion-item>\n\n				<ion-label floating><p>Email</p></ion-label>\n\n				<ion-input [(ngModel)]="email" name="email" type="email" #username="ngModel" spellcheck="false" autocapitalize="off"\n\n					required>\n\n				</ion-input>\n\n			</ion-item>\n\n			<!-- <p ion-text [hidden]="user.valid || submitted == false" color="danger" padding-left class="Warning">\n\n			Email harus diisi\n\n			</p> -->\n\n\n\n			<ion-item>\n\n				<ion-label floating><p>Password</p></ion-label>\n\n				\n\n				\n\n				<ion-input type="password" #password></ion-input>\n\n				<button class="tombol" [hidden]="lihat == false" (click)="showPassword()" ion-button clear color="dark" type="button" item-right> <ion-icon name="md-eye" class=\'icon\' color="primary2"> </ion-icon> </button>\n\n				<button class="tombol" [hidden]="lihat == true" (click)="hidePassword()" ion-button clear color="dark" type="button" item-right> <ion-icon name="md-eye-off" class=\'icon\' color="primary2"> </ion-icon> </button>\n\n				\n\n\n\n			</ion-item>\n\n			\n\n			<!-- <p ion-text [hidden]="pass.valid || submitted == false" color="danger" padding-left class="Warning">\n\n				Password harus diisi\n\n			</p> -->\n\n		</ion-list>\n\n\n\n		<!--<ion-row responsive-sm>\n\n			<ion-col>\n\n				<button ion-button (click)="login(loginForm)" type="submit" block>Masuk</button>\n\n			</ion-col>\n\n		</ion-row>-->\n\n\n\n		<!--ini buat mock up-->\n\n		<ion-row>\n\n			<ion-col>\n\n				<button class="ButtonMasuk" ion-button color="AyoDermawan" (click)="masuk()" full><p class="ButtonWord">Masuk</p></button>\n\n			</ion-col>\n\n		</ion-row>\n\n\n\n<!--		\n\n		<div text-center>\n\n			<button ion-button medium>\n\n				Click Here\n\n			</button>\n\n		</div>\n\n				-->\n\n\n\n		<ion-grid>\n\n			<ion-row>\n\n				<ion-col text-center>\n\n					<p class="Head">\n\n						<font color="black">Tidak punya akun?</font>\n\n						<a class="Link" (click)="register()"> Buat akun.</a>\n\n					</p>\n\n				</ion-col>\n\n			</ion-row>\n\n			<!--<ion-row>\n\n				<ion-col text-center><a><font color="black"></font><a (click)="lupaPassword()">Lupa password.</a></a></ion-col>\n\n			</ion-row>-->\n\n		</ion-grid>\n\n\n\n	</form>\n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\ariel\Documents\Project\bread\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_list__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__keranjang_keranjang__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__transaksi_transaksi__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profil_profil__ = __webpack_require__(284);
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
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__list_list__["a" /* ListPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__keranjang_keranjang__["a" /* KeranjangPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__transaksi_transaksi__["a" /* TransaksiPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__profil_profil__["a" /* ProfilPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\ariel\Documents\Project\bread\src\pages\tabs\tabs.html"*/`<ion-tabs>\n\n  <ion-tab [root]="tab1Root" id="underscore" tabTitle="_" tabIcon="ios-home-outline"></ion-tab>\n\n  <ion-tab [root]="tab2Root" id="underscore" tabTitle="_" tabIcon="ios-pizza-outline"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="0 item" tabIcon="ios-cart-outline"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="2 pending" tabIcon="ios-card-outline"></ion-tab>\n\n  <ion-tab [root]="tab5Root" id="underscore" tabTitle="_" tabIcon="ios-contact-outline"></ion-tab>\n\n</ion-tabs>`/*ion-inline-end:"C:\Users\ariel\Documents\Project\bread\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_detail__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service_keranjang__ = __webpack_require__(61);
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
        this.DetailPage = __WEBPACK_IMPORTED_MODULE_2__detail_detail__["a" /* DetailPage */];
        this.db.list('/item').subscribe(function (data) {
            _this.items = data;
            console.log(_this.items);
        });
    }
    HomePage.prototype.detail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__detail_detail__["a" /* DetailPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\ariel\Documents\Project\bread\src\pages\home\home.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <h2>Produk Terlaris</h2>\n\n  <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-6 round *ngFor="let item of items" [navPush]="DetailPage" [navParams]="{items:item}"><!--item variabel untuk ambil isi dari array items yang ada di add-item.ts -->\n\n          <img src="http://www.seafast.ipb.ac.id/images/stories/ilustrasi/muffin.jpg"/>\n\n          <h6>{{ item.namaBarang }}</h6> <h5>{{ item.hargaBarang }}</h5>\n\n        </ion-col>\n\n      </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\ariel\Documents\Project\bread\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__providers_service_keranjang__["a" /* CartService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_detail__ = __webpack_require__(137);
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
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListPage');
    };
    ListPage.prototype.detail = function () {
        console.log("masuk");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__detail_detail__["a" /* DetailPage */]);
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\ariel\Documents\Project\bread\src\pages\list\list.html"*/`<!--\n\n  Generated template for the ListPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>List Produk</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-item>\n\n    <ion-label>Filter</ion-label>\n\n    <ion-select [(ngModel)]="jenis" multiple="true">\n\n      <ion-option>Bolu</ion-option>\n\n      <ion-option>Kering</ion-option>\n\n      <ion-option>Basah</ion-option>\n\n      <ion-option>Manis</ion-option>\n\n      <ion-option>Asin</ion-option>\n\n      <ion-option>Keju</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n  <ion-row> \n\n    <ion-col col-6 round (click)="detail()">\n\n        <img src="http://www.seafast.ipb.ac.id/images/stories/ilustrasi/muffin.jpg"/>\n\n        <h6>Roti Muffin Enak Cokelat</h6>\n\n        <h5>Rp59.000</h5>\n\n      </ion-col>\n\n      <ion-col col-6 round (click)="detail()">\n\n        <img src="http://www.seafast.ipb.ac.id/images/stories/ilustrasi/muffin.jpg"/>\n\n        <h6>Roti Muffin Enak Cokelat</h6>\n\n        <h5>Rp59.000</h5>\n\n      </ion-col>\n\n      <ion-col col-6 round (click)="detail()">\n\n        <img src="http://www.seafast.ipb.ac.id/images/stories/ilustrasi/muffin.jpg"/>\n\n        <h6>Roti Muffin Enak Cokelat</h6>\n\n        <h5>Rp59.000</h5>\n\n      </ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\ariel\Documents\Project\bread\src\pages\list\list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransaksiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_transaksi_detail_transaksi__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service_keranjang__ = __webpack_require__(61);
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
        this.DetailTransaksiPage = __WEBPACK_IMPORTED_MODULE_2__detail_transaksi_detail_transaksi__["a" /* DetailTransaksiPage */];
        var user = this.fireauth.auth.currentUser;
        this.db.list('/item' + user.uid).subscribe(function (data) {
            _this.transaksi = data;
            console.log(_this.transaksi);
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
            selector: 'page-transaksi',template:/*ion-inline-start:"C:\Users\ariel\Documents\Project\bread\src\pages\transaksi\transaksi.html"*/`<!--\n\n  Generated template for the TransaksiPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Transaksi</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<ion-item>\n\n        <ion-thumbnail item-start (click)="detail()">\n\n          <img src="http://www.seafast.ipb.ac.id/images/stories/ilustrasi/muffin.jpg" height="60" width="65"/>\n\n        </ion-thumbnail>\n\n	        <h5>Roti Muffin Enak Cokelat</h5>\n\n	        <p>Rp 59.000<br><ion-badge class="belumDibayar">Belum dibayar</ion-badge></p>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-thumbnail item-start (click)="detail()">\n\n           <img src="http://www.seafast.ipb.ac.id/images/stories/ilustrasi/muffin.jpg" height="60" width="65"/>\n\n        </ion-thumbnail>\n\n	        <h5>Roti Muffin Enak Cokelat</h5>\n\n	        <p>Rp 35.000<br><ion-badge>Sedang dikirim</ion-badge></p>\n\n	</ion-item>\n\n	<ion-item>\n\n        <ion-thumbnail item-start (click)="detail()">\n\n           <img src="http://www.seafast.ipb.ac.id/images/stories/ilustrasi/muffin.jpg" height="60" width="65"/>\n\n        </ion-thumbnail>\n\n	        <h5>Roti Muffin Enak Cokelat</h5>\n\n	        <p>Rp 40.000<br><ion-badge class="sudahDikirim">Sudah dikirim</ion-badge></p>\n\n  </ion-item>\n\n  <ion-row>\n\n    <ion-col col-6 round *ngFor="let item of transaksi"><!--item variabel untuk ambil isi dari array items yang ada di add-item.ts -->\n\n      <img src="http://www.seafast.ipb.ac.id/images/stories/ilustrasi/muffin.jpg"/>\n\n      <h6>{{ item.namaBarang }}</h6> <h5>{{ item.hargaBarang }}</h5>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\ariel\Documents\Project\bread\src\pages\transaksi\transaksi.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__providers_service_keranjang__["a" /* CartService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TransaksiPage);
    return TransaksiPage;
}());

//# sourceMappingURL=transaksi.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
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
    function ProfilPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilPage');
    };
    ProfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profil',template:/*ion-inline-start:"C:\Users\ariel\Documents\Project\bread\src\pages\profil\profil.html"*/`<!--\n\n  Generated template for the ProfilPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Profil</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\ariel\Documents\Project\bread\src\pages\profil\profil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ProfilPage);
    return ProfilPage;
}());

//# sourceMappingURL=profil.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(47);
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
    function RegisterPage(alertCtrl, fire, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.lihat = true;
        this.lihat2 = true;
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
    RegisterPage.prototype.reg = function () {
        var _this = this;
        this.fire.auth.createUserWithEmailAndPassword(this.user.value, this.passwd.value)
            .then(function (data) {
            console.log('got data ', data);
            _this.alert('Registered!');
        })
            .catch(function (error) {
            console.log('got an error ', error);
            _this.alert(error.message);
        });
        console.log('Would Register with', this.user.value, this.passwd.value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('username'),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('password'),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "passwd", void 0);
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\ariel\Documents\Project\bread\src\pages\register\register.html"*/`<!--\n\n  Generated template for the RegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Register</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<img src="http://cdn1-a.production.liputan6.static6.com/medias/875802/big/067921900_1431505957-20150512_084409.JPG"/>\n\n  <form #loginForm="ngForm" novalidate>\n\n<ion-list >\n\n      <ion-item>\n\n				<ion-label floating><p>Nama</p></ion-label>\n\n				<ion-input [name="name" type="text" #username spellcheck="false" autocapitalize="off"\n\n					required>\n\n				</ion-input>\n\n      </ion-item>\n\n      <ion-list>\n\n		\n\n		  <ion-item>\n\n			<ion-label floating>Username</ion-label>\n\n			<ion-input type="text" #username></ion-input>\n\n		  </ion-item>\n\n		\n\n		  <ion-item>\n\n			<ion-label floating>Password</ion-label>\n\n			<ion-input type="password" #password></ion-input>\n\n		  </ion-item>\n\n		\n\n		</ion-list>\n\n			\n\n      \n\n      <ion-item>\n\n          <ion-label floating><p>Ketik Ulang Password</p></ion-label>\n\n          \n\n          \n\n          <ion-input  [name="password2" type="password" #password2 required>\n\n          </ion-input>\n\n        </ion-item>\n\n			\n\n			<!-- <p ion-text [hidden]="pass.valid || submitted == false" color="danger" padding-left class="Warning">\n\n				Password harus diisi\n\n			</p> -->\n\n		</ion-list>\n\n\n\n		<!--<ion-row responsive-sm>\n\n			<ion-col>\n\n				<button ion-button (click)="login(loginForm)" type="submit" block>Masuk</button>\n\n			</ion-col>\n\n		</ion-row>-->\n\n\n\n		<!--ini buat mock up-->\n\n		<ion-row>\n\n			<ion-col>\n\n				<button block ion-button color="primary" (click)="reg()">Register</button>\n\n			</ion-col>\n\n		</ion-row>\n\n\n\n<!--		\n\n		<div text-center>\n\n			<button ion-button medium>\n\n				Click Here\n\n			</button>\n\n		</div>\n\n				-->\n\n\n\n		<ion-grid>\n\n			<ion-row>\n\n				<ion-col text-center>\n\n					<p class="Head">\n\n						<font color="black">Sudah punya akun?</font>\n\n						<a class="Link" (click)="masuk()"> Masuk.</a>\n\n					</p>\n\n				</ion-col>\n\n			</ion-row>\n\n			<!--<ion-row>\n\n				<ion-col text-center><a><font color="black"></font><a (click)="lupaPassword()">Lupa password.</a></a></ion-col>\n\n			</ion-row>-->\n\n		</ion-grid>\n\n\n\n	</form>\n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\ariel\Documents\Project\bread\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
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

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PesananPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
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
    };
    PesananPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pesanan',template:/*ion-inline-start:"C:\Users\ariel\Documents\Project\bread\src\pages\pesanan\pesanan.html"*/`<!--\n  Generated template for the PesananPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>pesanan</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n`/*ion-inline-end:"C:\Users\ariel\Documents\Project\bread\src\pages\pesanan\pesanan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], PesananPage);
    return PesananPage;
}());

//# sourceMappingURL=pesanan.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(309);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_pengiriman_pengiriman__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_detail_transaksi_detail_transaksi__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_register_register__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_list_list__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_keranjang_keranjang__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_transaksi_transaksi__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_profil_profil__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_detail_detail__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_auth__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2_database__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_service_keranjang__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_pesanan_pesanan__ = __webpack_require__(286);
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
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_keranjang_keranjang__["a" /* KeranjangPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_transaksi_transaksi__["a" /* TransaksiPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_profil_profil__["a" /* ProfilPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_detail_transaksi_detail_transaksi__["a" /* DetailTransaksiPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_pengiriman_pengiriman__["a" /* PengirimanPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_pesanan_pesanan__["a" /* PesananPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/detail-transaksi/detail-transaksi.module#DetailTransaksiPageModule', name: 'DetailTransaksiPage', segment: 'detail-transaksi', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pengiriman/pengiriman.module#PengirimanPageModule', name: 'PengirimanPage', segment: 'pengiriman', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pesanan/pesanan.module#PesananPageModule', name: 'PesananPage', segment: 'pesanan', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_17_angularfire2__["a" /* AngularFireModule */].initializeApp(config),
                __WEBPACK_IMPORTED_MODULE_18_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_19_angularfire2_database__["b" /* AngularFireDatabaseModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_keranjang_keranjang__["a" /* KeranjangPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_transaksi_transaksi__["a" /* TransaksiPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_profil_profil__["a" /* ProfilPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_detail_transaksi_detail_transaksi__["a" /* DetailTransaksiPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_pengiriman_pengiriman__["a" /* PengirimanPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_pesanan_pesanan__["a" /* PesananPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_20__providers_service_keranjang__["a" /* CartService */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(241);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\ariel\Documents\Project\bread\src\app\app.html"*/`<ion-nav [root]="rootPage"></ion-nav>\n\n`/*ion-inline-end:"C:\Users\ariel\Documents\Project\bread\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _c || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(77);
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

/***/ })

},[287]);
//# sourceMappingURL=main.js.map