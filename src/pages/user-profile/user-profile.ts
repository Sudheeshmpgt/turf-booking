import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppPreferences } from '@ionic-native/app-preferences';
/**
 * Generated class for the UserProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {
  Email:any;
  Password:any;
  Name:any;
  Contact:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private appPreferences: AppPreferences) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserProfilePage');
    this.appPreferences.fetch("Email").then(res=>{this.Email=res},err=>{console.error()});
    this.appPreferences.fetch("Password").then(res=>{this.Password=res},err=>{console.error()});
    this.appPreferences.fetch("Name").then(res=>{this.Name=res},err=>{console.error()});
    this.appPreferences.fetch("Contact").then(res=>{this.Contact=res},err=>{console.error()});
    
  }

}
