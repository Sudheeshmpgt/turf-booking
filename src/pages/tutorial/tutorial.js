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
import { IonicPage, MenuController, NavController, Platform } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
var TutorialPage = (function () {
    function TutorialPage(navCtrl, menu, translate, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.platform = platform;
        this.showSkip = true;
        this.dir = 'ltr';
        this.dir = platform.dir();
        translate.get(["SLIDE1_TITLE",
            "SLIDE1_DESCRIPTION",
            "SLIDE2_TITLE",
            "SLIDE2_DESCRIPTION",
            "SLIDE3_TITLE",
            "SLIDE3_DESCRIPTION",
        ]).subscribe(function (values) {
            console.log('Loaded values', values);
            _this.slides = [
                {
                    title: values.SLIDE1_TITLE,
                    description: values.SLIDE1_DESCRIPTION,
                    image: 'assets/img/ica-slidebox-img-1.png',
                },
                {
                    title: values.SLIDE2_TITLE,
                    description: values.SLIDE2_DESCRIPTION,
                    image: 'assets/img/ica-slidebox-img-2.png',
                },
                {
                    title: values.SLIDE3_TITLE,
                    description: values.SLIDE3_DESCRIPTION,
                    image: 'assets/img/ica-slidebox-img-3.png',
                }
            ];
        });
    }
    TutorialPage.prototype.startApp = function () {
        this.navCtrl.setRoot('WelcomePage', {}, {
            animate: true,
            direction: 'forward'
        });
    };
    TutorialPage.prototype.onSlideChangeStart = function (slider) {
        this.showSkip = !slider.isEnd();
    };
    TutorialPage.prototype.ionViewDidEnter = function () {
        // the root left menu should be disabled on the tutorial page
        this.menu.enable(false);
    };
    TutorialPage.prototype.ionViewWillLeave = function () {
        // enable the root left menu when leaving the tutorial page
        this.menu.enable(true);
    };
    TutorialPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-tutorial',
            templateUrl: 'tutorial.html'
        }),
        __metadata("design:paramtypes", [NavController, MenuController, TranslateService, Platform])
    ], TutorialPage);
    return TutorialPage;
}());
export { TutorialPage };
//# sourceMappingURL=tutorial.js.map