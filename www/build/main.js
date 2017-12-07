webpackJsonp([1],{

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(239);
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
    function LoginPage(
        // private fireauth: AngularFireAuth,
        // private firedata: AngularFireDatabase,
        navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
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
    LoginPage.prototype.masuk = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\S.Komp\5\Sistem Informasi\Project\BreadStory aseli\bread\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="bread">\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<img src="http://cdn1-a.production.liputan6.static6.com/medias/875802/big/067921900_1431505957-20150512_084409.JPG"/>\n\n  <form #loginForm="ngForm" novalidate>\n\n		<ion-list >\n\n			<ion-item>\n\n				<ion-label floating><p>Email</p></ion-label>\n\n				<ion-input [(ngModel)]="email" name="email" type="email" #user="ngModel" spellcheck="false" autocapitalize="off"\n\n					required>\n\n				</ion-input>\n\n			</ion-item>\n\n			<!-- <p ion-text [hidden]="user.valid || submitted == false" color="danger" padding-left class="Warning">\n\n			Email harus diisi\n\n			</p> -->\n\n\n\n			<ion-item>\n\n				<ion-label floating><p>Password</p></ion-label>\n\n				\n\n				\n\n				<ion-input  [(ngModel)]="password" name="password" type="{{status}}" #pass="ngModel"  required>\n\n				</ion-input>\n\n				<button class="tombol" [hidden]="lihat == false" (click)="showPassword()" ion-button clear color="dark" type="button" item-right> <ion-icon name="md-eye" class=\'icon\' color="primary2"> </ion-icon> </button>\n\n				<button class="tombol" [hidden]="lihat == true" (click)="hidePassword()" ion-button clear color="dark" type="button" item-right> <ion-icon name="md-eye-off" class=\'icon\' color="primary2"> </ion-icon> </button>\n\n				\n\n\n\n			</ion-item>\n\n			\n\n			<!-- <p ion-text [hidden]="pass.valid || submitted == false" color="danger" padding-left class="Warning">\n\n				Password harus diisi\n\n			</p> -->\n\n		</ion-list>\n\n\n\n		<!--<ion-row responsive-sm>\n\n			<ion-col>\n\n				<button ion-button (click)="login(loginForm)" type="submit" block>Masuk</button>\n\n			</ion-col>\n\n		</ion-row>-->\n\n\n\n		<!--ini buat mock up-->\n\n		<ion-row>\n\n			<ion-col>\n\n				<button class="ButtonMasuk" ion-button color="AyoDermawan" (click)="masuk()" full><p class="ButtonWord">Masuk</p></button>\n\n			</ion-col>\n\n		</ion-row>\n\n\n\n<!--		\n\n		<div text-center>\n\n			<button ion-button medium>\n\n				Click Here\n\n			</button>\n\n		</div>\n\n				-->\n\n\n\n		<ion-grid>\n\n			<ion-row>\n\n				<ion-col text-center>\n\n					<p class="Head">\n\n						<font color="black">Tidak punya akun?</font>\n\n						<a class="Link" (click)="register()"> Buat akun.</a>\n\n					</p>\n\n				</ion-col>\n\n			</ion-row>\n\n			<!--<ion-row>\n\n				<ion-col text-center><a><font color="black"></font><a (click)="lupaPassword()">Lupa password.</a></a></ion-col>\n\n			</ion-row>-->\n\n		</ion-grid>\n\n\n\n	</form>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\S.Komp\5\Sistem Informasi\Project\BreadStory aseli\bread\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_list__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__keranjang_keranjang__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__transaksi_transaksi__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profil_profil__ = __webpack_require__(238);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\S.Komp\5\Sistem Informasi\Project\BreadStory aseli\bread\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" id="underscore" tabTitle="_" tabIcon="ios-home-outline"></ion-tab>\n\n  <ion-tab [root]="tab2Root" id="underscore" tabTitle="_" tabIcon="ios-pizza-outline"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="0 item" tabIcon="ios-cart-outline"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="2 pending" tabIcon="ios-card-outline"></ion-tab>\n\n  <ion-tab [root]="tab5Root" id="underscore" tabTitle="_" tabIcon="ios-contact-outline"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"D:\S.Komp\5\Sistem Informasi\Project\BreadStory aseli\bread\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__keranjang_keranjang__ = __webpack_require__(126);
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
    function DetailPage(alertCtrl, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.jumlahRoti = 20;
    }
    DetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailPage');
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
                        if (data.amount == /([A-Z])\w+/g) {
                            _this.jumlahRoti = 20;
                        }
                        else if (data.amount > 20 && data.amount <= 100) {
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
                        else if (data.amount > 100) {
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__keranjang_keranjang__["a" /* KeranjangPage */]);
        var alert = this.alertCtrl.create({
            title: 'Pembelian Berhasil Masuk Keranjang!',
            subTitle: 'Selesaikan pembayaran agar barang segera dikirim.',
            buttons: ['OK']
        });
        alert.present();
    };
    DetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail',template:/*ion-inline-start:"D:\S.Komp\5\Sistem Informasi\Project\BreadStory aseli\bread\src\pages\detail\detail.html"*/'<!--\n\n  Generated template for the DetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Detail</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <img src="http://www.seafast.ipb.ac.id/images/stories/ilustrasi/muffin.jpg"/>\n\n    <h6>Roti Muffin Enak Cokelat</h6>\n\n    <h5>Rp59.000</h5>\n\n    <p>Bahan: Tepung, telur, gula, mentega.</p>\n\n    \n\n    \n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <ion-toolbar color="light">\n\n        <button class="jumlahRoti" ion-button full color="white" (click)="presentPrompt()">{{jumlahRoti}} buah</button>\n\n        <button ion-button full (click)="masukKeranjang()">Beli</button>\n\n    </ion-toolbar>\n\n  </ion-footer>\n\n'/*ion-inline-end:"D:\S.Komp\5\Sistem Informasi\Project\BreadStory aseli\bread\src\pages\detail\detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DetailPage);
    return DetailPage;
}());

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeranjangPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
    function KeranjangPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    KeranjangPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad KeranjangPage');
    };
    KeranjangPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-keranjang',template:/*ion-inline-start:"D:\S.Komp\5\Sistem Informasi\Project\BreadStory aseli\bread\src\pages\keranjang\keranjang.html"*/'<!--\n\n  Generated template for the KeranjangPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Keranjang</ion-title>\n\n  </ion-navbar>\n\n  <ion-item>\n\n      <ion-label>Pilih semua</ion-label>\n\n      <ion-checkbox color="secondary"></ion-checkbox>\n\n  </ion-item>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n   <ion-grid>\n\n     <ion-row>      \n\n       <ion-col col-12 round>\n\n          <ion-item>\n\n              <ion-label>Muffin Coklat</ion-label>\n\n              <ion-checkbox color="secondary"></ion-checkbox>\n\n          </ion-item>\n\n          <img src="http://www.seafast.ipb.ac.id/images/stories/ilustrasi/muffin.jpg" class="gambarItem"/>\n\n        </ion-col>\n\n        <ion-col col-12 round>\n\n            <ion-item>\n\n                <ion-label>Muffin Coklat</ion-label>\n\n                <ion-checkbox color="secondary"></ion-checkbox>\n\n            </ion-item>\n\n            <img src="http://www.seafast.ipb.ac.id/images/stories/ilustrasi/muffin.jpg" class="gambarItem"/>\n\n          </ion-col>\n\n          <ion-col col-12 round>\n\n              <ion-item>\n\n                  <ion-label>Muffin Coklat</ion-label>\n\n                  <ion-checkbox color="secondary"></ion-checkbox>\n\n              </ion-item>\n\n              <img src="http://www.seafast.ipb.ac.id/images/stories/ilustrasi/muffin.jpg" class="gambarItem"/>\n\n          </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\S.Komp\5\Sistem Informasi\Project\BreadStory aseli\bread\src\pages\keranjang\keranjang.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], KeranjangPage);
    return KeranjangPage;
}());

//# sourceMappingURL=keranjang.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailTransaksiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
            selector: 'page-detail-transaksi',template:/*ion-inline-start:"D:\S.Komp\5\Sistem Informasi\Project\BreadStory aseli\bread\src\pages\detail-transaksi\detail-transaksi.html"*/'<!--\n\n  Generated template for the DetailTransaksiPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Detail Transaksi</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<h5>Roti Muffin Enak Cokelat</h5><ion-badge class="belumDibayar" item-end>Belum dibayar</ion-badge>\n\n    <p>20 buah<br><b>Rp 59.000</b></p>\n\n    <h6>Transfer ke:</h6>\n\n    <p>012 2323 35445 (Bank BRC)<br>a.n. Bread Unit IPB</p>\n\n    <h6>Dikirim:</h6>\n\n    <p>Selasa, 1 Januari 2018<br>07.00 WIB</p>\n\n    <h6>Alamat:</h6>\n\n    <p>Jalan-jalan kuy</p>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\S.Komp\5\Sistem Informasi\Project\BreadStory aseli\bread\src\pages\detail-transaksi\detail-transaksi.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DetailTransaksiPage);
    return DetailTransaksiPage;
}());

//# sourceMappingURL=detail-transaksi.js.map

/***/ }),

/***/ 148:
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
webpackEmptyAsyncContext.id = 148;

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/detail-transaksi/detail-transaksi.module": [
		456,
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
webpackAsyncContext.id = 191;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_detail__ = __webpack_require__(125);
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
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.detail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__detail_detail__["a" /* DetailPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\S.Komp\5\Sistem Informasi\Project\BreadStory aseli\bread\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>BreadStory #muachh</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <h4><b>Produk Terlaris</b></h4>\n\n  <ion-item height="70" width="70">\n\n    <ion-thumbnail item-start (click)="detail()">\n\n      <img src="http://www.seafast.ipb.ac.id/images/stories/ilustrasi/muffin.jpg"/>\n\n      <h6>Roti Muffin Enak Cokelat</h6>\n\n      <h5>Rp 59.000</h5>\n\n    </ion-thumbnail>\n\n    <ion-thumbnail item-start (click)="detail()">\n\n      <img src="http://www.seafast.ipb.ac.id/images/stories/ilustrasi/muffin.jpg"/>\n\n      <h6>Roti Muffin Enak Cokelat</h6>\n\n      <h5>Rp 59.000</h5>\n\n    </ion-thumbnail>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-thumbnail item-start (click)="detail()">\n\n      <img src="http://www.seafast.ipb.ac.id/images/stories/ilustrasi/muffin.jpg"/>\n\n      <h6>Roti Muffin Enak Cokelat</h6>\n\n      <h5>Rp 59.000</h5>\n\n    </ion-thumbnail>\n\n  </ion-item>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\S.Komp\5\Sistem Informasi\Project\BreadStory aseli\bread\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_detail__ = __webpack_require__(125);
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
            selector: 'page-list',template:/*ion-inline-start:"D:\S.Komp\5\Sistem Informasi\Project\BreadStory aseli\bread\src\pages\list\list.html"*/'<!--\n\n  Generated template for the ListPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>List Produk</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-item>\n\n    <ion-label>Filter</ion-label>\n\n    <ion-select [(ngModel)]="jenis" multiple="true">\n\n      <ion-option>Bolu</ion-option>\n\n      <ion-option>Kering</ion-option>\n\n      <ion-option>Basah</ion-option>\n\n      <ion-option>Manis</ion-option>\n\n      <ion-option>Asin</ion-option>\n\n      <ion-option>Keju</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n  <ion-row> \n\n    <ion-col col-6 round (click)="detail()">\n\n        <img src="http://www.seafast.ipb.ac.id/images/stories/ilustrasi/muffin.jpg"/>\n\n        <h6>Roti Muffin Enak Cokelat</h6>\n\n        <h5>Rp59.000</h5>\n\n      </ion-col>\n\n      <ion-col col-6 round (click)="detail()">\n\n        <img src="http://www.seafast.ipb.ac.id/images/stories/ilustrasi/muffin.jpg"/>\n\n        <h6>Roti Muffin Enak Cokelat</h6>\n\n        <h5>Rp59.000</h5>\n\n      </ion-col>\n\n      <ion-col col-6 round (click)="detail()">\n\n        <img src="http://www.seafast.ipb.ac.id/images/stories/ilustrasi/muffin.jpg"/>\n\n        <h6>Roti Muffin Enak Cokelat</h6>\n\n        <h5>Rp59.000</h5>\n\n      </ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\S.Komp\5\Sistem Informasi\Project\BreadStory aseli\bread\src\pages\list\list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransaksiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_transaksi_detail_transaksi__ = __webpack_require__(136);
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
    function TransaksiPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TransaksiPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TransaksiPage');
    };
    TransaksiPage.prototype.detail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__detail_transaksi_detail_transaksi__["a" /* DetailTransaksiPage */]);
    };
    TransaksiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-transaksi',template:/*ion-inline-start:"D:\S.Komp\5\Sistem Informasi\Project\BreadStory aseli\bread\src\pages\transaksi\transaksi.html"*/'<!--\n\n  Generated template for the TransaksiPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Transaksi</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<ion-item>\n\n        <ion-thumbnail item-start (click)="detail()">\n\n          <img src="http://www.seafast.ipb.ac.id/images/stories/ilustrasi/muffin.jpg" height="60" width="65"/>\n\n        </ion-thumbnail>\n\n	        <h5>Roti Muffin Enak Cokelat</h5>\n\n	        <p>Rp 59.000<br><ion-badge class="belumDibayar">Belum dibayar</ion-badge></p>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-thumbnail item-start (click)="detail()">\n\n           <img src="http://www.seafast.ipb.ac.id/images/stories/ilustrasi/muffin.jpg" height="60" width="65"/>\n\n        </ion-thumbnail>\n\n	        <h5>Roti Muffin Enak Cokelat</h5>\n\n	        <p>Rp 35.000<br><ion-badge>Sedang dikirim</ion-badge></p>\n\n	</ion-item>\n\n	<ion-item>\n\n        <ion-thumbnail item-start (click)="detail()">\n\n           <img src="http://www.seafast.ipb.ac.id/images/stories/ilustrasi/muffin.jpg" height="60" width="65"/>\n\n        </ion-thumbnail>\n\n	        <h5>Roti Muffin Enak Cokelat</h5>\n\n	        <p>Rp 40.000<br><ion-badge class="sudahDikirim">Sudah dikirim</ion-badge></p>\n\n	</ion-item>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\S.Komp\5\Sistem Informasi\Project\BreadStory aseli\bread\src\pages\transaksi\transaksi.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TransaksiPage);
    return TransaksiPage;
}());

//# sourceMappingURL=transaksi.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
            selector: 'page-profil',template:/*ion-inline-start:"D:\S.Komp\5\Sistem Informasi\Project\BreadStory aseli\bread\src\pages\profil\profil.html"*/'<!--\n\n  Generated template for the ProfilPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Profil</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<ion-item>\n\n		<ion-thumbnail item-start>\n\n			<img src="http://www.icon2s.com/wp-content/uploads/2014/03/Contact-Icon.png">\n\n		</ion-thumbnail>\n\n		<h2>Nama Pengguna</h2>\n\n		<p>edit profil</p>\n\n	</ion-item>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\S.Komp\5\Sistem Informasi\Project\BreadStory aseli\bread\src\pages\profil\profil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ProfilPage);
    return ProfilPage;
}());

//# sourceMappingURL=profil.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(123);
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
    function RegisterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.lihat = true;
        this.lihat2 = true;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
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
    RegisterPage.prototype.register = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    RegisterPage.prototype.masuk = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"D:\S.Komp\5\Sistem Informasi\Project\BreadStory aseli\bread\src\pages\register\register.html"*/'<!--\n\n  Generated template for the RegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Register</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<img src="http://cdn1-a.production.liputan6.static6.com/medias/875802/big/067921900_1431505957-20150512_084409.JPG"/>\n\n  <form #loginForm="ngForm" novalidate>\n\n		<ion-list >\n\n      <ion-item>\n\n				<ion-label floating><p>Nama</p></ion-label>\n\n				<ion-input [(ngModel)]="nama" name="name" type="text" #user="ngModel" spellcheck="false" autocapitalize="off"\n\n					required>\n\n				</ion-input>\n\n      </ion-item>\n\n      \n\n			<ion-item>\n\n				<ion-label floating><p>Email</p></ion-label>\n\n				<ion-input [(ngModel)]="email" name="email" type="email" #user="ngModel" spellcheck="false" autocapitalize="off"\n\n					required>\n\n				</ion-input>\n\n			</ion-item>\n\n			<!-- <p ion-text [hidden]="user.valid || submitted == false" color="danger" padding-left class="Warning">\n\n			Email harus diisi\n\n			</p> -->\n\n\n\n			<ion-item>\n\n				<ion-label floating><p>Password</p></ion-label>\n\n				\n\n				\n\n				<ion-input  [(ngModel)]="password" name="password" type="{{status}}" #pass="ngModel"  required>\n\n				</ion-input>\n\n      </ion-item>\n\n      \n\n      <ion-item>\n\n          <ion-label floating><p>Ketik Ulang Password</p></ion-label>\n\n          \n\n          \n\n          <ion-input  [(ngModel)]="password" name="password2" type="{{status}}" #pass="ngModel"  required>\n\n          </ion-input>\n\n        </ion-item>\n\n			\n\n			<!-- <p ion-text [hidden]="pass.valid || submitted == false" color="danger" padding-left class="Warning">\n\n				Password harus diisi\n\n			</p> -->\n\n		</ion-list>\n\n\n\n		<!--<ion-row responsive-sm>\n\n			<ion-col>\n\n				<button ion-button (click)="login(loginForm)" type="submit" block>Masuk</button>\n\n			</ion-col>\n\n		</ion-row>-->\n\n\n\n		<!--ini buat mock up-->\n\n		<ion-row>\n\n			<ion-col>\n\n				<button class="ButtonMasuk" ion-button color="AyoDermawan" (click)="register()" full><p class="ButtonWord">Daftar</p></button>\n\n			</ion-col>\n\n		</ion-row>\n\n\n\n<!--		\n\n		<div text-center>\n\n			<button ion-button medium>\n\n				Click Here\n\n			</button>\n\n		</div>\n\n				-->\n\n\n\n		<ion-grid>\n\n			<ion-row>\n\n				<ion-col text-center>\n\n					<p class="Head">\n\n						<font color="black">Sudah punya akun?</font>\n\n						<a class="Link" (click)="masuk()"> Masuk.</a>\n\n					</p>\n\n				</ion-col>\n\n			</ion-row>\n\n			<!--<ion-row>\n\n				<ion-col text-center><a><font color="black"></font><a (click)="lupaPassword()">Lupa password.</a></a></ion-col>\n\n			</ion-row>-->\n\n		</ion-grid>\n\n\n\n	</form>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\S.Komp\5\Sistem Informasi\Project\BreadStory aseli\bread\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(311);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_register_register__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_keranjang_keranjang__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_transaksi_transaksi__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_profil_profil__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_detail_detail__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_detail_transaksi_detail_transaksi__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_auth__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_database__ = __webpack_require__(397);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var config = {
    apiKey: "AIzaSyCbAHcZ93Z4TmqQUO83tUqMnpHnP8yT7Ik",
    authDomain: "bread-ipb-tes.firebaseapp.com",
    databaseURL: "https://bread-ipb-tes.firebaseio.com",
    projectId: "bread-ipb-tes",
    storageBucket: "bread-ipb-tes.appspot.com",
    messagingSenderId: "279879616076"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_keranjang_keranjang__["a" /* KeranjangPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_transaksi_transaksi__["a" /* TransaksiPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_profil_profil__["a" /* ProfilPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_detail_transaksi_detail_transaksi__["a" /* DetailTransaksiPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/detail-transaksi/detail-transaksi.module#DetailTransaksiPageModule', name: 'DetailTransaksiPage', segment: 'detail-transaksi', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_16_angularfire2__["a" /* AngularFireModule */].initializeApp(config),
                __WEBPACK_IMPORTED_MODULE_17_angularfire2_auth__["a" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_18_angularfire2_database__["a" /* AngularFireDatabaseModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_keranjang_keranjang__["a" /* KeranjangPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_transaksi_transaksi__["a" /* TransaksiPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_profil_profil__["a" /* ProfilPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_detail_transaksi_detail_transaksi__["a" /* DetailTransaksiPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(123);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\S.Komp\5\Sistem Informasi\Project\BreadStory aseli\bread\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\S.Komp\5\Sistem Informasi\Project\BreadStory aseli\bread\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[290]);
//# sourceMappingURL=main.js.map