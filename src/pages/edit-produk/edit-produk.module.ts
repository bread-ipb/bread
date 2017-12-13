import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditProdukPage } from './edit-produk';

@NgModule({
  declarations: [
    EditProdukPage,
  ],
  imports: [
    IonicPageModule.forChild(EditProdukPage),
  ],
})
export class EditProdukPageModule {}
