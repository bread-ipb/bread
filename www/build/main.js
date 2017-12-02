webpackJsonp([0],{

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(238);
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
            selector: 'page-login',template:/*ion-inline-start:"F:\IONIC\bread\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="bread">\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<img src="http://cdn1-a.production.liputan6.static6.com/medias/875802/big/067921900_1431505957-20150512_084409.JPG"/>\n  <form #loginForm="ngForm" novalidate>\n		<ion-list >\n			<ion-item>\n				<ion-label floating><p>Email</p></ion-label>\n				<ion-input [(ngModel)]="email" name="email" type="email" #user="ngModel" spellcheck="false" autocapitalize="off"\n					required>\n				</ion-input>\n			</ion-item>\n			<!-- <p ion-text [hidden]="user.valid || submitted == false" color="danger" padding-left class="Warning">\n			Email harus diisi\n			</p> -->\n\n			<ion-item>\n				<ion-label floating><p>Password</p></ion-label>\n				\n				\n				<ion-input  [(ngModel)]="password" name="password" type="{{status}}" #pass="ngModel"  required>\n				</ion-input>\n				<button class="tombol" [hidden]="lihat == false" (click)="showPassword()" ion-button clear color="dark" type="button" item-right> <ion-icon name="md-eye" class=\'icon\' color="primary2"> </ion-icon> </button>\n				<button class="tombol" [hidden]="lihat == true" (click)="hidePassword()" ion-button clear color="dark" type="button" item-right> <ion-icon name="md-eye-off" class=\'icon\' color="primary2"> </ion-icon> </button>\n				\n\n			</ion-item>\n			\n			<!-- <p ion-text [hidden]="pass.valid || submitted == false" color="danger" padding-left class="Warning">\n				Password harus diisi\n			</p> -->\n		</ion-list>\n\n		<!--<ion-row responsive-sm>\n			<ion-col>\n				<button ion-button (click)="login(loginForm)" type="submit" block>Masuk</button>\n			</ion-col>\n		</ion-row>-->\n\n		<!--ini buat mock up-->\n		<ion-row>\n			<ion-col>\n				<button class="ButtonMasuk" ion-button color="AyoDermawan" (click)="masuk()" full><p class="ButtonWord">Masuk</p></button>\n			</ion-col>\n		</ion-row>\n\n<!--		\n		<div text-center>\n			<button ion-button medium>\n				Click Here\n			</button>\n		</div>\n				-->\n\n		<ion-grid>\n			<ion-row>\n				<ion-col text-center>\n					<p class="Head">\n						<font color="black">Tidak punya akun?</font>\n						<a class="Link" (click)="register()"> Buat akun.</a>\n					</p>\n				</ion-col>\n			</ion-row>\n			<!--<ion-row>\n				<ion-col text-center><a><font color="black"></font><a (click)="lupaPassword()">Lupa password.</a></a></ion-col>\n			</ion-row>-->\n		</ion-grid>\n\n	</form>\n</ion-content>\n'/*ion-inline-end:"F:\IONIC\bread\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_list__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__keranjang_keranjang__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__transaksi_transaksi__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profil_profil__ = __webpack_require__(237);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\IONIC\bread\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" id="underscore" tabTitle="_" tabIcon="ios-home-outline"></ion-tab>\n  <ion-tab [root]="tab2Root" id="underscore" tabTitle="_" tabIcon="ios-pizza-outline"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="0 item" tabIcon="ios-cart-outline"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="2 pending" tabIcon="ios-card-outline"></ion-tab>\n  <ion-tab [root]="tab5Root" id="underscore" tabTitle="_" tabIcon="ios-contact-outline"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"F:\IONIC\bread\src\pages\tabs\tabs.html"*/
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
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
                        else if (data.amount > 20 && data.amount < 100) {
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
            selector: 'page-detail',template:/*ion-inline-start:"F:\IONIC\bread\src\pages\detail\detail.html"*/'<!--\n  Generated template for the DetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Detail</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <img src="http://www.seafast.ipb.ac.id/images/stories/ilustrasi/muffin.jpg"/>\n    <h6>Roti Muffin Enak Cokelat</h6>\n    <h5>Rp59.000</h5>\n    <p>Bahan: Tepung, telur, gula, mentega.</p>\n    \n    \n</ion-content>\n\n<ion-footer>\n    <ion-toolbar color="light">\n        <button class="jumlahRoti" ion-button full color="white" (click)="presentPrompt()">{{jumlahRoti}} buah</button>\n        <button ion-button full (click)="masukKeranjang()">Beli</button>\n    </ion-toolbar>\n  </ion-footer>\n'/*ion-inline-end:"F:\IONIC\bread\src\pages\detail\detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
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
            selector: 'page-keranjang',template:/*ion-inline-start:"F:\IONIC\bread\src\pages\keranjang\keranjang.html"*/'<!--\n  Generated template for the KeranjangPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Keranjang</ion-title>\n  </ion-navbar>\n  <ion-item>\n      <ion-label>Pilih semua</ion-label>\n      <ion-checkbox color="secondary"></ion-checkbox>\n  </ion-item>\n</ion-header>\n\n\n<ion-content padding>\n   <ion-grid>\n     <ion-row>      \n       <ion-col col-12 round>\n          <ion-item>\n              <ion-label>Muffin Coklat</ion-label>\n              <ion-checkbox color="secondary"></ion-checkbox>\n          </ion-item>\n          <img src="http://www.seafast.ipb.ac.id/images/stories/ilustrasi/muffin.jpg" class="gambarItem"/>\n        </ion-col>\n        <ion-col col-12 round>\n            <ion-item>\n                <ion-label>Muffin Coklat</ion-label>\n                <ion-checkbox color="secondary"></ion-checkbox>\n            </ion-item>\n            <img src="http://www.seafast.ipb.ac.id/images/stories/ilustrasi/muffin.jpg" class="gambarItem"/>\n          </ion-col>\n          <ion-col col-12 round>\n              <ion-item>\n                  <ion-label>Muffin Coklat</ion-label>\n                  <ion-checkbox color="secondary"></ion-checkbox>\n              </ion-item>\n              <img src="http://www.seafast.ipb.ac.id/images/stories/ilustrasi/muffin.jpg" class="gambarItem"/>\n          </ion-col>\n      </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"F:\IONIC\bread\src\pages\keranjang\keranjang.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], KeranjangPage);
    return KeranjangPage;
}());

//# sourceMappingURL=keranjang.js.map

/***/ }),

/***/ 147:
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
webpackEmptyAsyncContext.id = 147;

/***/ }),

/***/ 190:
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
webpackEmptyAsyncContext.id = 190;

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
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
            selector: 'page-home',template:/*ion-inline-start:"F:\IONIC\bread\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Produk Terlaris</h2>\n  <ion-grid>\n      <ion-row>\n        <ion-col col-6 round (click)="detail()">\n          <img src="http://www.seafast.ipb.ac.id/images/stories/ilustrasi/muffin.jpg"/>\n          <h6>Roti Muffin Enak Cokelat</h6>\n          <h5>Rp59.000</h5>\n        </ion-col>\n        <ion-col col-6 round (click)="detail()">\n          <img src="http://www.seafast.ipb.ac.id/images/stories/ilustrasi/muffin.jpg"/>\n          <h6>Roti Muffin Enak Cokelat</h6>\n          <h5>Rp59.000</h5>\n        </ion-col>\n        <ion-col col-6 round (click)="detail()">\n          <img src="http://www.seafast.ipb.ac.id/images/stories/ilustrasi/muffin.jpg"/>\n          <h6>Roti Muffin Enak Cokelat</h6>\n          <h5>Rp59.000</h5>\n        </ion-col>\n      </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"F:\IONIC\bread\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
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
            selector: 'page-list',template:/*ion-inline-start:"F:\IONIC\bread\src\pages\list\list.html"*/'<!--\n  Generated template for the ListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>List Produk</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n    <ion-label>Filter</ion-label>\n    <ion-select [(ngModel)]="jenis" multiple="true">\n      <ion-option>Bolu</ion-option>\n      <ion-option>Kering</ion-option>\n      <ion-option>Basah</ion-option>\n      <ion-option>Manis</ion-option>\n      <ion-option>Asin</ion-option>\n      <ion-option>Keju</ion-option>\n    </ion-select>\n  </ion-item>\n  <ion-row> \n    <ion-col col-6 round (click)="detail()">\n        <img src="http://www.seafast.ipb.ac.id/images/stories/ilustrasi/muffin.jpg"/>\n        <h6>Roti Muffin Enak Cokelat</h6>\n        <h5>Rp59.000</h5>\n      </ion-col>\n      <ion-col col-6 round (click)="detail()">\n        <img src="http://www.seafast.ipb.ac.id/images/stories/ilustrasi/muffin.jpg"/>\n        <h6>Roti Muffin Enak Cokelat</h6>\n        <h5>Rp59.000</h5>\n      </ion-col>\n      <ion-col col-6 round (click)="detail()">\n        <img src="http://www.seafast.ipb.ac.id/images/stories/ilustrasi/muffin.jpg"/>\n        <h6>Roti Muffin Enak Cokelat</h6>\n        <h5>Rp59.000</h5>\n      </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"F:\IONIC\bread\src\pages\list\list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransaksiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
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
    TransaksiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-transaksi',template:/*ion-inline-start:"F:\IONIC\bread\src\pages\transaksi\transaksi.html"*/'<!--\n  Generated template for the TransaksiPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Transaksi</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"F:\IONIC\bread\src\pages\transaksi\transaksi.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], TransaksiPage);
    return TransaksiPage;
}());

//# sourceMappingURL=transaksi.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
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
            selector: 'page-profil',template:/*ion-inline-start:"F:\IONIC\bread\src\pages\profil\profil.html"*/'<!--\n  Generated template for the ProfilPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Profil</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"F:\IONIC\bread\src\pages\profil\profil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ProfilPage);
    return ProfilPage;
}());

//# sourceMappingURL=profil.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
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
            selector: 'page-register',template:/*ion-inline-start:"F:\IONIC\bread\src\pages\register\register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<img src="http://cdn1-a.production.liputan6.static6.com/medias/875802/big/067921900_1431505957-20150512_084409.JPG"/>\n  <form #loginForm="ngForm" novalidate>\n		<ion-list >\n      <ion-item>\n				<ion-label floating><p>Nama</p></ion-label>\n				<ion-input [(ngModel)]="nama" name="name" type="text" #user="ngModel" spellcheck="false" autocapitalize="off"\n					required>\n				</ion-input>\n      </ion-item>\n      \n			<ion-item>\n				<ion-label floating><p>Email</p></ion-label>\n				<ion-input [(ngModel)]="email" name="email" type="email" #user="ngModel" spellcheck="false" autocapitalize="off"\n					required>\n				</ion-input>\n			</ion-item>\n			<!-- <p ion-text [hidden]="user.valid || submitted == false" color="danger" padding-left class="Warning">\n			Email harus diisi\n			</p> -->\n\n			<ion-item>\n				<ion-label floating><p>Password</p></ion-label>\n				\n				\n				<ion-input  [(ngModel)]="password" name="password" type="{{status}}" #pass="ngModel"  required>\n				</ion-input>\n      </ion-item>\n      \n      <ion-item>\n          <ion-label floating><p>Ketik Ulang Password</p></ion-label>\n          \n          \n          <ion-input  [(ngModel)]="password" name="password2" type="{{status}}" #pass="ngModel"  required>\n          </ion-input>\n        </ion-item>\n			\n			<!-- <p ion-text [hidden]="pass.valid || submitted == false" color="danger" padding-left class="Warning">\n				Password harus diisi\n			</p> -->\n		</ion-list>\n\n		<!--<ion-row responsive-sm>\n			<ion-col>\n				<button ion-button (click)="login(loginForm)" type="submit" block>Masuk</button>\n			</ion-col>\n		</ion-row>-->\n\n		<!--ini buat mock up-->\n		<ion-row>\n			<ion-col>\n				<button class="ButtonMasuk" ion-button color="AyoDermawan" (click)="register()" full><p class="ButtonWord">Daftar</p></button>\n			</ion-col>\n		</ion-row>\n\n<!--		\n		<div text-center>\n			<button ion-button medium>\n				Click Here\n			</button>\n		</div>\n				-->\n\n		<ion-grid>\n			<ion-row>\n				<ion-col text-center>\n					<p class="Head">\n						<font color="black">Sudah punya akun?</font>\n						<a class="Link" (click)="masuk()"> Masuk.</a>\n					</p>\n				</ion-col>\n			</ion-row>\n			<!--<ion-row>\n				<ion-col text-center><a><font color="black"></font><a (click)="lupaPassword()">Lupa password.</a></a></ion-col>\n			</ion-row>-->\n		</ion-grid>\n\n	</form>\n</ion-content>\n'/*ion-inline-end:"F:\IONIC\bread\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(310);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_register_register__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_keranjang_keranjang__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_transaksi_transaksi__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_profil_profil__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_detail_detail__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_auth__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_database__ = __webpack_require__(396);
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
                __WEBPACK_IMPORTED_MODULE_5__pages_register_register__["a" /* RegisterPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_15_angularfire2__["a" /* AngularFireModule */].initializeApp(config),
                __WEBPACK_IMPORTED_MODULE_16_angularfire2_auth__["a" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_17_angularfire2_database__["a" /* AngularFireDatabaseModule */]
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
                __WEBPACK_IMPORTED_MODULE_5__pages_register_register__["a" /* RegisterPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(233);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\IONIC\bread\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"F:\IONIC\bread\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[289]);
//# sourceMappingURL=main.js.map