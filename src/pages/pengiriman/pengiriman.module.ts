import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PengirimanPage } from './pengiriman';
import { TransaksiPage } from '../transaksi/transaksi';

@NgModule({
  declarations: [
    PengirimanPage,
  ],
  imports: [
    IonicPageModule.forChild(PengirimanPage),
  ],
})
export class PengirimanPageModule {}
