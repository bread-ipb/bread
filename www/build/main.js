webpackJsonp([4],{

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(288);
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
                console.log('got some data', _this.fire.auth.currentUser);
                _this.alert('Success! You\'re logged in');
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
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
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* RegisterPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\BGKTJL\bread\src\pages\login\login.html"*/`<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="bread">\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<img src="http://cdn1-a.production.liputan6.static6.com/medias/875802/big/067921900_1431505957-20150512_084409.JPG"/>\n\n  <form #loginForm="ngForm" novalidate>\n\n		<ion-list >\n\n			<ion-item>\n\n				<ion-label floating><p>Email</p></ion-label>\n\n				<ion-input [(ngModel)]="uname" name="uname" type="email" #username="ngModel" spellcheck="false" autocapitalize="off"\n\n					required>\n\n				</ion-input>\n\n			</ion-item>\n\n			<p ion-text [hidden]="username.valid || submitted == false" color="danger" padding-left class="Warning">\n\n			Email harus diisi\n\n			</p>\n\n\n\n			<ion-item>\n\n				<ion-label floating><p>Password</p></ion-label>\n\n				\n\n				\n\n				<ion-input [(ngModel)]="password" name="pass" type="password" #pass="ngModel" spellcheck="false" autocapitalize="off"\n\n				required></ion-input>\n\n				<!-- <button class="tombol" [hidden]="lihat == false" (click)="showPassword()" ion-button clear color="dark" type="button" item-right> <ion-icon name="md-eye" class=\'icon\' color="primary2"> </ion-icon> </button>\n\n				<button class="tombol" [hidden]="lihat == true" (click)="hidePassword()" ion-button clear color="dark" type="button" item-right> <ion-icon name="md-eye-off" class=\'icon\' color="primary2"> </ion-icon> </button> -->\n\n				\n\n\n\n			</ion-item>\n\n			\n\n			<p ion-text [hidden]="pass.valid || submitted == false" color="danger" padding-left class="Warning">\n\n				Password harus diisi\n\n			</p>\n\n		</ion-list>\n\n\n\n		<!--<ion-row responsive-sm>\n\n			<ion-col>\n\n				<button ion-button (click)="login(loginForm)" type="submit" block>Masuk</button>\n\n			</ion-col>\n\n		</ion-row>-->\n\n\n\n		<!--ini buat mock up-->\n\n		<ion-row>\n\n			<ion-col>\n\n				<button class="ButtonMasuk" ion-button color="AyoDermawan" (click)="masuk(loginForm)" type="submit" full><p class="ButtonWord">Masuk</p></button>\n\n			</ion-col>\n\n		</ion-row>\n\n\n\n<!--		\n\n		<div text-center>\n\n			<button ion-button medium>\n\n				Click Here\n\n			</button>\n\n		</div>\n\n				-->\n\n\n\n		<ion-grid>\n\n			<ion-row>\n\n				<ion-col text-center>\n\n					<p class="Head">\n\n						<font color="black">Tidak punya akun?</font>\n\n						<a class="Link" (click)="register()"> Buat akun.</a>\n\n					</p>\n\n				</ion-col>\n\n			</ion-row>\n\n			<!--<ion-row>\n\n				<ion-col text-center><a><font color="black"></font><a (click)="lupaPassword()">Lupa password.</a></a></ion-col>\n\n			</ion-row>-->\n\n		</ion-grid>\n\n\n\n	</form>\n\n</ion-content>\n\n`/*ion-inline-end:"D:\BGKTJL\bread\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__beli_beli__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_service_keranjang__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(14);
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
            selector: 'page-detail',template:/*ion-inline-start:"D:\BGKTJL\bread\src\pages\detail\detail.html"*/`<!--\n\n  Generated template for the DetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Detail</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <img src="http://www.seafast.ipb.ac.id/images/stories/ilustrasi/muffin.jpg"/>\n\n    <h6>{{item.namaBarang}}</h6>\n\n    <h5>{{item.hargaBarang}}</h5>\n\n    <p>Bahan: Tepung, telur, gula, mentega.</p>\n\n    \n\n    \n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <ion-toolbar color="light">\n\n        <ion-row>\n\n\n\n                <button ion-button full [navPush]="beliPage" [navParams]="{items:item}">Beli</button>\n\n\n\n        </ion-row>\n\n    </ion-toolbar>\n\n  </ion-footer>\n\n`/*ion-inline-end:"D:\BGKTJL\bread\src\pages\detail\detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__providers_service_keranjang__["a" /* CartService */]])
    ], DetailPage);
    return DetailPage;
}());

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PengirimanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_service_keranjang__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pesanan_pesanan__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(38);
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
            punyauser: user.uid
        });
        console.log(this.myType);
        this.cart.cartitem = [];
        this.cart.totalHarga = 0;
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pesanan_pesanan__["a" /* PesananPage */]);
    };
    PengirimanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-pengiriman',template:/*ion-inline-start:"D:\BGKTJL\bread\src\pages\pengiriman\pengiriman.html"*/`<!--\n  Generated template for the PengirimanPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>pengiriman</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n    <ion-label stacked>Nama Penerima</ion-label>\n    <ion-input type="text"></ion-input>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label stacked>Alamat</ion-label>\n    <ion-textarea type="text"></ion-textarea>\n  </ion-item>\n  <ion-item>\n      <ion-label stacked>No.Telp</ion-label>\n      <ion-input type="number"></ion-input>\n    </ion-item>\n  <ion-list radio-group [(ngModel)]="myType">\n    <ion-list-header>\n      Pilihan Pembayaran\n    </ion-list-header>\n  \n    <ion-item>\n      <ion-label>BCA</ion-label>\n      <ion-radio  value="bca"></ion-radio>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label>BNI</ion-label>\n      <ion-radio value="bni"></ion-radio>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label>BRI</ion-label>\n      <ion-radio value="bri" ></ion-radio>\n    </ion-item>\n  </ion-list>\n  <ion-footer>\n			<ion-col>\n				<button class="ButtonMasuk" ion-button color="AyoDermawan" (click)="pesanan()" full><p class="ButtonWord">Masuk</p></button>\n			</ion-col>\n		</ion-footer>\n</ion-content>\n`/*ion-inline-end:"D:\BGKTJL\bread\src\pages\pengiriman\pengiriman.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_service_keranjang__["a" /* CartService */]])
    ], PengirimanPage);
    return PengirimanPage;
}());

//# sourceMappingURL=pengiriman.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
    function EditProfilPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    EditProfilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditProfilPage');
    };
    EditProfilPage.prototype.simpan = function () {
        this.navCtrl.pop();
        var alert = this.alertCtrl.create({
            subTitle: 'Profil Berhasil Diedit :)'
        });
        alert.present();
    };
    EditProfilPage.prototype.EditFoto = function () {
    };
    EditProfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-profil',template:/*ion-inline-start:"D:\BGKTJL\bread\src\pages\edit-profil\edit-profil.html"*/`<!--\n\n  Generated template for the EditProfilPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Edit Profil</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<ion-list>\n\n		<ion-item (click)="EditFoto()">\n\n			<ion-row>\n\n				<img src="http://www.pvhc.net/img148/awvxzwhtrrtafvkavddd.png" width="35" height="30"/>\n\n				<ion-col><p>edit foto</p></ion-col>\n\n			</ion-row>\n\n		</ion-item>\n\n\n\n	  <ion-item>\n\n	    <ion-label stacked>Username</ion-label>\n\n	    <ion-input type="text" placeholder="Nama Pengguna Sekarang"></ion-input>\n\n	  </ion-item>\n\n\n\n	  <ion-item>\n\n	    <ion-label stacked>Password</ion-label>\n\n	    <ion-input type="password" placeholder="........"></ion-input>\n\n		</ion-item>\n\n		\n\n	  <ion-item>\n\n	    <ion-label stacked>Alamat</ion-label> \n\n	    <ion-textarea type="text" placeholder="Alamat Pengguna Sekarang"></ion-textarea>\n\n	  </ion-item>\n\n	</ion-list>\n\n\n\n	<button ion-button full (click)="simpan()">Simpan</button>\n\n</ion-content>\n\n`/*ion-inline-end:"D:\BGKTJL\bread\src\pages\edit-profil\edit-profil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], EditProfilPage);
    return EditProfilPage;
}());

//# sourceMappingURL=edit-profil.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PesananPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
            selector: 'page-pesanan',template:/*ion-inline-start:"D:\BGKTJL\bread\src\pages\pesanan\pesanan.html"*/`<!--\n\n  Generated template for the PesananPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>pesanan</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n`/*ion-inline-end:"D:\BGKTJL\bread\src\pages\pesanan\pesanan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], PesananPage);
    return PesananPage;
}());

//# sourceMappingURL=pesanan.js.map

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

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/edit-profil/edit-profil.module": [
		432,
		3
	],
	"../pages/konfirmasi-pembayaran/konfirmasi-pembayaran.module": [
		433,
		0
	],
	"../pages/pengiriman/pengiriman.module": [
		435,
		2
	],
	"../pages/pesanan/pesanan.module": [
		434,
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
webpackAsyncContext.id = 236;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailTransaksiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(38);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail-transaksi',template:/*ion-inline-start:"D:\BGKTJL\bread\src\pages\detail-transaksi\detail-transaksi.html"*/`<!--\n\n  Generated template for the DetailTransaksiPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Detail Transaksi</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-item *ngFor="let item of detailtransaksi">\n\n          <ion-thumbnail item-start><img src="http://www.seafast.ipb.ac.id/images/stories/ilustrasi/muffin.jpg"height="60" width="65"/>\n\n          </ion-thumbnail>\n\n            <h6>{{ item.name }}</h6> <h5>{{ item.quantity }}</h5>\n\n          <p>Jadwal Pengiriman {{ item.tanggal}} {{item.waktu}}</p>\n\n      </ion-item>\n\n	<h5>Roti Muffin Enak Cokelat</h5><ion-badge class="belumDibayar" item-end>Belum dibayar</ion-badge>\n\n    <p>Total Pembayaran:<b>Rp.{{itemsaya.total}}</b></p>\n\n    <h6>Transfer ke:</h6>\n\n    <p>012 2323 35445 (Bank BRC)<br>a.n. Bread Unit IPB</p>\n\n    <h6>Dikirim:</h6>\n\n   \n\n    <h6>Alamat:</h6>\n\n    <p>Jalan-jalan kuy</p>\n\n</ion-content>\n\n`/*ion-inline-end:"D:\BGKTJL\bread\src\pages\detail-transaksi\detail-transaksi.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DetailTransaksiPage);
    return DetailTransaksiPage;
}());

//# sourceMappingURL=detail-transaksi.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_list__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__keranjang_keranjang__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__transaksi_transaksi__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profil_profil__ = __webpack_require__(287);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\BGKTJL\bread\src\pages\tabs\tabs.html"*/`<ion-tabs>\n\n  <ion-tab [root]="tab1Root" id="underscore" tabTitle="_" tabIcon="ios-home-outline"></ion-tab>\n\n  <ion-tab [root]="tab2Root" id="underscore" tabTitle="_" tabIcon="ios-pizza-outline"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="0 item" tabIcon="ios-cart-outline"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="2 pending" tabIcon="ios-card-outline"></ion-tab>\n\n  <ion-tab [root]="tab5Root" id="underscore" tabTitle="_" tabIcon="ios-contact-outline"></ion-tab>\n\n</ion-tabs>`/*ion-inline-end:"D:\BGKTJL\bread\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_detail__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service_keranjang__ = __webpack_require__(36);
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
            selector: 'page-home',template:/*ion-inline-start:"D:\BGKTJL\bread\src\pages\home\home.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <h4>Produk Terlaris</h4>\n\n  <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-6 round *ngFor="let item of items" [navPush]="DetailPage" [navParams]="{items:item}"><!--item variabel untuk ambil isi dari array items yang ada di add-item.ts -->\n\n          <img src="http://www.seafast.ipb.ac.id/images/stories/ilustrasi/muffin.jpg"/>\n\n          <h6>{{ item.namaBarang }}</h6> <h5>Rp {{ item.hargaBarang }}</h5>\n\n        </ion-col>\n\n      </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n`/*ion-inline-end:"D:\BGKTJL\bread\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__providers_service_keranjang__["a" /* CartService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeliPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_keranjang__ = __webpack_require__(36);
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
            selector: 'page-beli',template:/*ion-inline-start:"D:\BGKTJL\bread\src\pages\beli\beli.html"*/`<!--\n\n  Generated template for the BeliPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Detail Order</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<form #beliForm="ngForm" novalidate>\n\n  <ion-item>\n\n    <ion-label floating>Quantity</ion-label>\n\n    <ion-input [(ngModel)]="quantity" name="qty" type="number" #qty="ngModel" spellcheck="false" autocapitalize="off" required></ion-input>\n\n  </ion-item>\n\n\n\n  <p ion-text [hidden]="!qty.valid" color="danger" *ngIf="quantity<20 || quantity>50" padding-left>\n\n    Quantity minimal 20, maksimal 50 \n\n  </p>\n\n\n\n  <ion-item>\n\n    <ion-label floating>Tanggal Pengiriman</ion-label>\n\n    <ion-datetime displayFormat="DDDD, DD MMMM YYYY" max="2020-12-31" type="string" [(ngModel)]="tanggal" name="date" #date="ngModel" spellcheck="false" autocapitalize="off" required></ion-datetime>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label floating>Jam Pengiriman</ion-label>\n\n    <ion-datetime displayFormat="HH.mm WIB" type="string" [(ngModel)]="waktu" name="time" #time="ngModel" spellcheck="false" autocapitalize="off" required></ion-datetime>\n\n  </ion-item>\n\n\n\n  <button ion-button [disabled]="!qty.valid || !date.valid || !time.valid || quantity<20 || quantity>50" full (click)="beli(beliForm)" type="submit">Beli</button>\n\n</form>\n\n</ion-content>\n\n`/*ion-inline-end:"D:\BGKTJL\bread\src\pages\beli\beli.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_service_keranjang__["a" /* CartService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], BeliPage);
    return BeliPage;
}());

//# sourceMappingURL=beli.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_detail__ = __webpack_require__(145);
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
            selector: 'page-list',template:/*ion-inline-start:"D:\BGKTJL\bread\src\pages\list\list.html"*/`<!--\n\n  Generated template for the ListPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>List Produk</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-item>\n\n    <ion-label>Filter</ion-label>\n\n    <ion-select [(ngModel)]="jenis" multiple="true">\n\n      <ion-option>Bolu</ion-option>\n\n      <ion-option>Kering</ion-option>\n\n      <ion-option>Basah</ion-option>\n\n      <ion-option>Manis</ion-option>\n\n      <ion-option>Asin</ion-option>\n\n      <ion-option>Keju</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n  <ion-row> \n\n    <ion-col col-6 round (click)="detail()">\n\n        <img src="http://www.seafast.ipb.ac.id/images/stories/ilustrasi/muffin.jpg"/>\n\n        <h6>Roti Muffin Enak Cokelat</h6>\n\n        <h5>Rp59.000</h5>\n\n      </ion-col>\n\n      <ion-col col-6 round (click)="detail()">\n\n        <img src="http://www.seafast.ipb.ac.id/images/stories/ilustrasi/muffin.jpg"/>\n\n        <h6>Roti Muffin Enak Cokelat</h6>\n\n        <h5>Rp59.000</h5>\n\n      </ion-col>\n\n      <ion-col col-6 round (click)="detail()">\n\n        <img src="http://www.seafast.ipb.ac.id/images/stories/ilustrasi/muffin.jpg"/>\n\n        <h6>Roti Muffin Enak Cokelat</h6>\n\n        <h5>Rp59.000</h5>\n\n      </ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n`/*ion-inline-end:"D:\BGKTJL\bread\src\pages\list\list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeranjangPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pengiriman_pengiriman__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_service_keranjang__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(14);
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
            selector: 'page-keranjang',template:/*ion-inline-start:"D:\BGKTJL\bread\src\pages\keranjang\keranjang.html"*/`<!--\n\n  Generated template for the KeranjangPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Keranjang Belanja</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <!--<ion-list>\n\n    <ion-item *ngFor="let item of items">\n\n      {{item.name}}\n\n      {{item.quantity}}\n\n      {{item.total}}\n\n    </ion-item>\n\n    <ion-item>{{total}}</ion-item>\n\n  </ion-list>-->\n\n\n\n  <ion-item *ngFor="let item of items">\n\n      <ion-thumbnail item-start>\n\n        <img src="http://www.seafast.ipb.ac.id/images/stories/ilustrasi/muffin.jpg" height="60" width="65"/>\n\n      </ion-thumbnail>\n\n        <h5>{{item.name}}<br>{{item.quantity}} Pcs</h5>\n\n        <p>{{item.total}}</p> \n\n        <ion-col><ion-badge (click)="removeitem(item)" ><ion-icon ios="ios-trash" md="md-trash"></ion-icon></ion-badge></ion-col>\n\n  </ion-item>\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <ion-toolbar color="light">\n\n        <button ion-button (click)="pengiriman()" full>Bayar</button>\n\n    </ion-toolbar>\n\n</ion-footer>`/*ion-inline-end:"D:\BGKTJL\bread\src\pages\keranjang\keranjang.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__providers_service_keranjang__["a" /* CartService */]])
    ], KeranjangPage);
    return KeranjangPage;
}());

//# sourceMappingURL=keranjang.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransaksiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_transaksi_detail_transaksi__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service_keranjang__ = __webpack_require__(36);
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
            selector: 'page-transaksi',template:/*ion-inline-start:"D:\BGKTJL\bread\src\pages\transaksi\transaksi.html"*/`<!--\n\n  Generated template for the TransaksiPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Transaksi</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<ion-item *ngFor="let item of transaksi"  [navPush]="DetailTransaksiPage" [navParams]="{detailtrans:item.$key,itemku:item}">\n\n        <ion-thumbnail item-start>\n\n          <img src="http://www.seafast.ipb.ac.id/images/stories/ilustrasi/muffin.jpg" height="60" width="65"/>\n\n        </ion-thumbnail>\n\n	        <h5>{{ item.pembayaran }}</h5>\n\n          <p>{{ item.total }}</p>\n\n          <p><ion-badge [hidden]="item.status!=0" class=\'belumDibayar\'>Belum Dibayar</ion-badge></p>\n\n          <p><ion-badge [hidden]="item.status!=1" >Diproses</ion-badge></p>\n\n    </ion-item>\n\n    <!--<ion-item>\n\n        <ion-thumbnail item-start (click)="detail()">\n\n           <img src="http://www.seafast.ipb.ac.id/images/stories/ilustrasi/muffin.jpg" height="60" width="65"/>\n\n        </ion-thumbnail>\n\n	        <h5>Roti Muffin Enak Cokelat</h5>\n\n	        <p>Rp 35.000<br><ion-badge>Sedang dikirim</ion-badge></p>\n\n	</ion-item>\n\n	<ion-item>\n\n        <ion-thumbnail item-start (click)="detail()">\n\n           <img src="http://www.seafast.ipb.ac.id/images/stories/ilustrasi/muffin.jpg" height="60" width="65"/>\n\n        </ion-thumbnail>\n\n	        <h5>Roti Muffin Enak Cokelat</h5>\n\n	        <p>Rp 40.000<br><ion-badge class="sudahDikirim">Sudah dikirim</ion-badge></p>\n\n  </ion-item>\n\n  <ion-row>\n\n    <ion-col col-6 round *ngFor="let item of transaksi" [navPush]="DetailTransaksiPage" [navParams]="{detailtrans:item.$key}">\n\n      <img src="http://www.seafast.ipb.ac.id/images/stories/ilustrasi/muffin.jpg"/>\n\n      <h6>{{ item.pembayaran }}</h6> <h5>{{ item.total }}</h5>\n\n    </ion-col>\n\n    <p ion-text [hidden]="username.valid || submitted == false" color="danger" padding-left class="Warning">\n\n			Email harus diisi\n\n			</p>\n\n  </ion-row>-->\n\n</ion-content>\n\n`/*ion-inline-end:"D:\BGKTJL\bread\src\pages\transaksi\transaksi.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__providers_service_keranjang__["a" /* CartService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TransaksiPage);
    return TransaksiPage;
}());

//# sourceMappingURL=transaksi.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_profil_edit_profil__ = __webpack_require__(147);
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
    ProfilPage.prototype.EditProfil = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__edit_profil_edit_profil__["a" /* EditProfilPage */]);
    };
    ProfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profil',template:/*ion-inline-start:"D:\BGKTJL\bread\src\pages\profil\profil.html"*/`<!--\n\n  Generated template for the ProfilPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Profil</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<ion-list>\n\n		<ion-item (click)="EditProfil()">\n\n			<ion-row class="EditProfil">\n\n				<img src="http://www.pvhc.net/img148/awvxzwhtrrtafvkavddd.png" width="70" height="60"/>\n\n				<ion-col>\n\n					<h3><br>Nama Pengguna</h3>\n\n					<p>edit profil</p>\n\n				</ion-col>	\n\n			</ion-row>\n\n	    </ion-item>\n\n		<ion-item>\n\n			<h3><br><br><b>Email</b></h3>\n\n			<p>namapengguna@email</p>\n\n		</ion-item>\n\n		<ion-item>\n\n		    <h3><b>No. HP</b></h3>\n\n		    <p>0812-3456-7890</p>\n\n		</ion-item>\n\n		<ion-item>\n\n		    <h3><b>Alamat</b></h3>\n\n		    <p>Jalan Suka Rindu Rt.00 Rw.00 Desa Suka<br>Kecamatan Suka Kabupaten Rindu, 16620</p>\n\n		</ion-item>\n\n		<ion-item (click)="Logout">\n\n			<button ion-button outline item-end>Logout</button>\n\n		</ion-item>\n\n	</ion-list>\n\n</ion-content>\n\n`/*ion-inline-end:"D:\BGKTJL\bread\src\pages\profil\profil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ProfilPage);
    return ProfilPage;
}());

//# sourceMappingURL=profil.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(38);
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
                    telepon: _this.telepon
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
            selector: 'page-register',template:/*ion-inline-start:"D:\BGKTJL\bread\src\pages\register\register.html"*/`<!--\n\n  Generated template for the RegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Register</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<img src="http://cdn1-a.production.liputan6.static6.com/medias/875802/big/067921900_1431505957-20150512_084409.JPG"/>\n\n  <form #registerForm="ngForm" novalidate>\n\n<ion-list >\n\n      <ion-item>\n\n				<ion-label floating>Nama</ion-label>\n\n				<ion-input [(ngModel)]="name" name="name" type="text" #nama="ngModel" spellcheck="false" autocapitalize="off"\n\n					required>\n\n				</ion-input>\n\n			</ion-item>\n\n		\n\n			<p ion-text [hidden]="nama.valid || submitted==false" color="danger" padding-left class="Warning">\n\n				Nama harus diisi.\n\n			</p>\n\n\n\n			<ion-item>\n\n				<ion-label floating>Telepon</ion-label>					\n\n				<ion-input [(ngModel)]="telepon" name="telepon" type="number" minlength="11" maxlength="12" #telp="ngModel" spellcheck="false" autocapitalize="off"\n\n						required>\n\n				</ion-input>\n\n			</ion-item>\n\n\n\n			<p ion-text [hidden]="telp.valid || submitted==false" color="danger" padding-left class="Warning">\n\n				Nomor telepon harus diisi.\n\n			</p>\n\n		\n\n		  <ion-item>\n\n			<ion-label floating>Email</ion-label>\n\n			<ion-input [(ngModel)]="email" name="email" type="text" #mail="ngModel" required></ion-input>\n\n			</ion-item>\n\n			\n\n			<p ion-text [hidden]="mail.valid || submitted==false" color="danger" padding-left class="Warning">\n\n					Email harus diisi.\n\n			</p>\n\n		\n\n		  <ion-item>\n\n			<ion-label floating>Password</ion-label>\n\n			<ion-input [(ngModel)]="password" name="password" type="password" #passwd="ngModel" required></ion-input>\n\n			</ion-item>\n\n			\n\n			<p ion-text [hidden]="passwd.valid || submitted==false" color="danger" padding-left class="Warning">\n\n					Password harus diisi.\n\n			</p>\n\n		  \n\n      <ion-item>\n\n      <ion-label floating>Ketik Ulang Password</ion-label>\n\n			<ion-input [(ngModel)]="password2" name="password2" type="password" #passwd2="ngModel" required></ion-input>\n\n      </ion-item>\n\n			\n\n			<p ion-text [hidden]="passwd2.valid || submitted==false" color="danger" padding-left class="Warning">\n\n					Harus diisi.\n\n			</p>\n\n\n\n			<p ion-text [hidden]="!passwd.valid || !passwd2.valid || password==password2" color="danger" padding-left class="Warning">\n\n				Password tidak cocok, coba lagi.\n\n			</p>\n\n		</ion-list>\n\n\n\n		<!--<ion-row responsive-sm>\n\n			<ion-col>\n\n				<button ion-button (click)="login(loginForm)" type="submit" block>Masuk</button>\n\n			</ion-col>\n\n		</ion-row>-->\n\n\n\n		<!--ini buat mock up-->\n\n		<ion-row>\n\n			<ion-col>\n\n				<button block ion-button color="primary" type="submit" (click)="reg(registerForm)">Register</button>\n\n			</ion-col>\n\n		</ion-row>\n\n\n\n<!--		\n\n		<div text-center>\n\n			<button ion-button medium>\n\n				Click Here\n\n			</button>\n\n		</div>\n\n				-->\n\n\n\n		<ion-grid>\n\n			<ion-row>\n\n				<ion-col text-center>\n\n					<p class="Head">\n\n						<font color="black">Sudah punya akun?</font>\n\n						<a class="Link" (click)="masuk()"> Masuk.</a>\n\n					</p>\n\n				</ion-col>\n\n			</ion-row>\n\n			<!--<ion-row>\n\n				<ion-col text-center><a><font color="black"></font><a (click)="lupaPassword()">Lupa password.</a></a></ion-col>\n\n			</ion-row>-->\n\n		</ion-grid>\n\n\n\n	</form>\n\n</ion-content>\n\n`/*ion-inline-end:"D:\BGKTJL\bread\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
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

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(311);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_pengiriman_pengiriman__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_detail_transaksi_detail_transaksi__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_register_register__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_list_list__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_keranjang_keranjang__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_transaksi_transaksi__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_profil_profil__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_detail_detail__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_edit_profil_edit_profil__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2_auth__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2_database__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_service_keranjang__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_pesanan_pesanan__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_beli_beli__ = __webpack_require__(283);
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
                __WEBPACK_IMPORTED_MODULE_22__pages_pesanan_pesanan__["a" /* PesananPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_beli_beli__["a" /* BeliPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_edit_profil_edit_profil__["a" /* EditProfilPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/edit-profil/edit-profil.module#EditProfilPageModule', name: 'EditProfilPage', segment: 'edit-profil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/konfirmasi-pembayaran/konfirmasi-pembayaran.module#KonfirmasiPembayaranPageModule', name: 'KonfirmasiPembayaranPage', segment: 'konfirmasi-pembayaran', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pesanan/pesanan.module#PesananPageModule', name: 'PesananPage', segment: 'pesanan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pengiriman/pengiriman.module#PengirimanPageModule', name: 'PengirimanPage', segment: 'pengiriman', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_18_angularfire2__["a" /* AngularFireModule */].initializeApp(config),
                __WEBPACK_IMPORTED_MODULE_19_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_20_angularfire2_database__["b" /* AngularFireDatabaseModule */]
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
                __WEBPACK_IMPORTED_MODULE_22__pages_pesanan_pesanan__["a" /* PesananPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_beli_beli__["a" /* BeliPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_edit_profil_edit_profil__["a" /* EditProfilPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_21__providers_service_keranjang__["a" /* CartService */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(38);
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

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(144);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\BGKTJL\bread\src\app\app.html"*/`<ion-nav [root]="rootPage"></ion-nav>\n\n`/*ion-inline-end:"D:\BGKTJL\bread\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[289]);
//# sourceMappingURL=main.js.map