import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProdukadminPage } from './produkadmin';

@NgModule({
  declarations: [
    ProdukadminPage,
  ],
  imports: [
    IonicPageModule.forChild(ProdukadminPage),
  ],
})
export class ProdukadminPageModule {}
