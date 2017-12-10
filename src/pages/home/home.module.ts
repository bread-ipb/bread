import { HomePage } from './home';
import { NgModule } from "@angular/core/src/metadata/ng_module";
import { IonicPageModule } from "ionic-angular/module";



@NgModule({
    declarations:[HomePage],
    imports:[IonicPageModule.forChild(HomePage)]
})

export class HomeModule{

}