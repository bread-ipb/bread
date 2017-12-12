webpackJsonp([0],{

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KonfirmasiPembayaranPageModule", function() { return KonfirmasiPembayaranPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__konfirmasi_pembayaran__ = __webpack_require__(437);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var KonfirmasiPembayaranPageModule = (function () {
    function KonfirmasiPembayaranPageModule() {
    }
    KonfirmasiPembayaranPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__konfirmasi_pembayaran__["a" /* KonfirmasiPembayaranPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__konfirmasi_pembayaran__["a" /* KonfirmasiPembayaranPage */]),
            ],
        })
    ], KonfirmasiPembayaranPageModule);
    return KonfirmasiPembayaranPageModule;
}());

//# sourceMappingURL=konfirmasi-pembayaran.module.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KonfirmasiPembayaranPage; });
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
 * Generated class for the KonfirmasiPembayaranPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var KonfirmasiPembayaranPage = (function () {
    function KonfirmasiPembayaranPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    KonfirmasiPembayaranPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad KonfirmasiPembayaranPage');
    };
    KonfirmasiPembayaranPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-konfirmasi-pembayaran',template:/*ion-inline-start:"D:\DV\bread\src\pages\konfirmasi-pembayaran\konfirmasi-pembayaran.html"*/`<!--\n\n  Generated template for the KonfirmasiPembayaranPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>konfirmasi-pembayaran</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<form #konfirmForm="ngForm" novalidate>\n\n\n\n  <ion-item>\n\n    <ion-label floating>Nama Pengirim</ion-label>\n\n    <ion-input [(ngModel)]="nama" name="namaPengirim" type="text" #namaPengirim="ngModel" required></ion-input>\n\n  </ion-item>\n\n  \n\n  <ion-item>\n\n    <ion-label floating>No. Rekening</ion-label>\n\n    <ion-input [(ngModel)]="rekening" name="norek" type="number" #norek="ngModel" required></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-list radio-group>\n\n    <ion-list-header>\n\n      Bank\n\n    </ion-list-header>\n\n  \n\n    <ion-item>\n\n      <ion-label>BCA</ion-label>\n\n      <ion-radio  value="bca"></ion-radio>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n      <ion-label>BNI</ion-label>\n\n      <ion-radio value="bni"></ion-radio>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n      <ion-label>BRI</ion-label>\n\n      <ion-radio value="bri" ></ion-radio>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Tanggal Pembayaran</ion-label>\n\n      <ion-datetime displayFormat="DDDD, DD MMMM YYYY" type="string" [(ngModel)]="tanggal" name="date" #date="ngModel" spellcheck="false" autocapitalize="off" required></ion-datetime>\n\n    </ion-item>\n\n\n\n    <button ion-button [disabled]="!qty.valid || !date.valid || !time.valid" full (click)="beli(beliForm)" type="submit">Beli</button>\n\n  </form>\n\n  \n\n</ion-content>\n\n`/*ion-inline-end:"D:\DV\bread\src\pages\konfirmasi-pembayaran\konfirmasi-pembayaran.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], KonfirmasiPembayaranPage);
    return KonfirmasiPembayaranPage;
}());

//# sourceMappingURL=konfirmasi-pembayaran.js.map

/***/ })

});
//# sourceMappingURL=0.js.map