import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController,LoadingController } from 'ionic-angular';

import { User } from '../../providers/providers';
import { MainPage } from '../pages';
import { ApplicationUser } from "../../models/application-user";
import { ApplicationUserProvider } from "../../providers/application-user/application-user";

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  applicationUser: ApplicationUser=new ApplicationUser();

  // Our translated text strings
  private signupErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    private applicatioUserProvider: ApplicationUserProvider,
    public loadingCtrl: LoadingController) {

    this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
      this.signupErrorString = value;
    })
}

  doSignup() {
    // Attempt to login in through our User service
    this.applicatioUserProvider.register(this.applicationUser).subscribe((resp) => {
      console.log(resp);
      if(resp["success"]==false){
        // Unable to sign up
        let toast = this.toastCtrl.create({
          message: resp["message"],
          duration: 3000,
          position: 'top'
        });
        toast.present();
      }
      else{
        let toast = this.toastCtrl.create({
          message: resp["message"],
          duration: 5000,
          position: 'top'
        });
        toast.present();
        this.presentLoadingDefault();
        this.navCtrl.push('LoginPage');

      }
     
    }, (err) => {

     // this.navCtrl.push(MainPage);

      // Unable to sign up
      let toast = this.toastCtrl.create({
        message: this.signupErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
    
  }
  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      spinner:'bubbles',
      content: 'Please wait...'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 5000);
  }
}
