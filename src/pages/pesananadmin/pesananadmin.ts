import { Component,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailpesananPage } from '../detailpesanan/detailpesanan';
import { AngularFireAuth } from 'angularfire2/auth';
import { Chart } from 'chart.js';
import { AngularFireDatabase,FirebaseListObservable } from 'angularfire2/database';
/**
 * Generated class for the PesananadminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-pesananadmin',
  templateUrl: 'pesananadmin.html',
})
export class PesananadminPage {
  @ViewChild('barCanvas') barCanvas;
  barChart:any;
  DetailpesananPage:any;
  transaksi:any;
  lengthTrans:any=0;
  lengthBelum:any=0;
  lengthProses:any=0;
  lengthKelar:any=0;
  detailtrans:any;
  constructor(public navCtrl: NavController,private fireauth: AngularFireAuth,public db:AngularFireDatabase, public navParams: NavParams) {
    this.DetailpesananPage=DetailpesananPage;
    this.db.list('/transaksi/').subscribe(data => {
          this.transaksi=data;
          this.lengthTrans=data.length;
          console.log(data.length);
          for(var i=0, j=0;i<data.length;i++)
          {
            if(data[i].status==0)
            {
              this.lengthBelum++;
            }
          }
          for(var i=0, j=0;i<data.length;i++)
          {
            if(data[i].status==1)
            {
              this.lengthProses++;
            }
          } 
          this.lengthKelar=this.lengthTrans-this.lengthBelum-this.lengthProses;

          this.barChart = new Chart(this.barCanvas.nativeElement, {
            
                       type: 'bar',
                       data: {
                           labels: ["Pesanan", "Belum Dibayar", "Diproses", "Selesai"],
                           datasets: [{
                               label: '# of Votes',
                               data: [this.lengthTrans, this.lengthBelum, this.lengthProses, this.lengthKelar],
                               backgroundColor: [
                                   'rgba(255, 99, 132, 0.2)',
                                   'rgba(54, 162, 235, 0.2)',
                                   'rgba(255, 206, 86, 0.2)',
                                   'rgba(75, 192, 192, 0.2)',
                                   'rgba(153, 102, 255, 0.2)',
                                   'rgba(255, 159, 64, 0.2)'
                               ],
                               borderColor: [
                                   'rgba(255,99,132,1)',
                                   'rgba(54, 162, 235, 1)',
                                   'rgba(255, 206, 86, 1)',
                                   'rgba(75, 192, 192, 1)',
                                   'rgba(153, 102, 255, 1)',
                                   'rgba(255, 159, 64, 1)'
                               ],
                               borderWidth: 1
                           }]
                       },
                       options: {
                           scales: {
                               yAxes: [{
                                   ticks: {
                                       beginAtZero:true
                                   }
                               }]
                           }
                       }
            
                   });
        });
        console.log(this.lengthTrans);

      }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PesananPage');
    console.log(this.lengthTrans);
    
  }

  DetailPesanan(){
    this.navCtrl.push(DetailpesananPage)
  }

}