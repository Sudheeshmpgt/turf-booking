var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { ListMasterPage } from './list-master';
var ListMasterPageModule = (function () {
    function ListMasterPageModule() {
    }
    ListMasterPageModule = __decorate([
        NgModule({
            declarations: [
                ListMasterPage,
            ],
            imports: [
                IonicPageModule.forChild(ListMasterPage),
                TranslateModule.forChild()
            ],
            exports: [
                ListMasterPage
            ]
        })
    ], ListMasterPageModule);
    return ListMasterPageModule;
}());
export { ListMasterPageModule };
//# sourceMappingURL=list-master.module.js.map