import { Component } from '@angular/core';
import { IonicPage, NavController ,ToastController} from 'ionic-angular';
import { AppPreferences } from '@ionic-native/app-preferences';
/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {
  user:any;
  Email:any;
  dataPresent:boolean=false;
  constructor(public navCtrl: NavController,private appPreferences:AppPreferences,public toastCtrl: ToastController) {
   // this.appPreferences.fetch("Email").then(res=>{this.navCtrl.push('TurfListPage');},err=>{});
    this.user=localStorage.getItem("UserId");
  }
  ionViewDidLoad(){
    this.appPreferences.fetch("Email").then(res=>{this.Email=res});
    this.load();
   /* this.appPreferences.fetch("Email").then(
    res=>{
     
      let toast = this.toastCtrl.create({
      message: res.toString(),
      duration: 3000,
      position: 'top'
      });
      toast.present();
      this.navCtrl.push('TurfListPage');
    },
    err=>{
      let toast = this.toastCtrl.create({
        message: err.toString(),
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });*/
    //this.dataPresent=true;
    console.log(this.user);
   /* if(this.user!=null){
      this.navCtrl.push('TurfListPage');
    }else{
      this.login();
    }*/
   }
  load(){
    if(this.Email!=null){
      this.navCtrl.push('TurfListPage'); 
    }else{
      this.dataPresent=true;
    }
  }
  login() {
    this.navCtrl.push('LoginPage'); 
  }

  signup() {
    this.navCtrl.push('SignupPage');
  }
}
