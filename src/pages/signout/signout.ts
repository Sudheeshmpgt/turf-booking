import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppPreferences } from '@ionic-native/app-preferences';
/**
 * Generated class for the SignoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signout',
  templateUrl: 'signout.html',
})
export class SignoutPage {

  constructor(public navCtrl: NavController,
    private appPreferences: AppPreferences, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignoutPage');
    this.appPreferences.clearAll().then(res=>{this.navCtrl.push('WelcomePage')},err=>{this.navCtrl.push('WelcomePage')});

  }

}
