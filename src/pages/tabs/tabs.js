var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Tab1Root } from '../pages';
import { Tab2Root } from '../pages';
import { Tab3Root } from '../pages';
var TabsPage = (function () {
    function TabsPage(navCtrl, translateService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.translateService = translateService;
        this.tab1Root = Tab1Root;
        this.tab2Root = Tab2Root;
        this.tab3Root = Tab3Root;
        this.tab1Title = " ";
        this.tab2Title = " ";
        this.tab3Title = " ";
        translateService.get(['TAB1_TITLE', 'TAB2_TITLE', 'TAB3_TITLE']).subscribe(function (values) {
            _this.tab1Title = values['TAB1_TITLE'];
            _this.tab2Title = values['TAB2_TITLE'];
            _this.tab3Title = values['TAB3_TITLE'];
        });
    }
    TabsPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-tabs',
            templateUrl: 'tabs.html'
        }),
        __metadata("design:paramtypes", [NavController, TranslateService])
    ], TabsPage);
    return TabsPage;
}());
export { TabsPage };
//# sourceMappingURL=tabs.js.map