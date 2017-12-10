
import { NgModule } from "@angular/core/src/metadata/ng_module";
import { IonicPageModule } from "ionic-angular/module";
import { DetailPage } from './detail';





@NgModule({
    declarations:[DetailPage],
    imports:[IonicPageModule.forChild(DetailPage)]
})
export class DetailPageModule{

}