import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PesananadminPage } from './pesananadmin';

@NgModule({
  declarations: [
    PesananadminPage,
  ],
  imports: [
    IonicPageModule.forChild(PesananadminPage),
  ],
})
export class PesananadminPageModule {}
