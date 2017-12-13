import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsadminPage } from './tabsadmin';

@NgModule({
  declarations: [
    TabsadminPage,
  ],
  imports: [
    IonicPageModule.forChild(TabsadminPage),
  ]
})
export class TabsadminPageModule {}
