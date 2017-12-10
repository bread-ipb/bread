import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase,FirebaseListObservable } from 'angularfire2/database';
import { Injectable } from "@angular/core";

@Injectable()
export class CartService{
    cartitem=[];
    payment:any;
    alamat:any;
    totalHarga:any;
    waktuKirim:any;
    noTelp:any;
    penerima:any;
    constructor(private fireauth: AngularFireAuth,public db:AngularFireDatabase){}

    
}