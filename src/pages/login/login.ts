import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController,LoadingController } from 'ionic-angular';
import { ApplicationUser } from "../../models/application-user";
import { User } from '../../providers/providers';
import { MainPage } from '../pages';
import { ApplicationUserProvider } from "../../providers/application-user/application-user";
import { LoginModel } from "../../models/login-model";
import { AppPreferences } from '@ionic-native/app-preferences';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type

  login:LoginModel=new LoginModel();
  // Our translated text strings
  private loginErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    private applicationUserProvider: ApplicationUserProvider,
    public translateService: TranslateService,
    public loadingCtrl: LoadingController,
    private appPreferences: AppPreferences) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
    this.appPreferences.clearAll();
  }

  // Attempt to login in through our User service
  doLogin() {
    this.presentLoadingDefault();
    this.applicationUserProvider.login(this.login).subscribe((resp) => {
      console.log(resp);
      let toast = this.toastCtrl.create({
        message: resp["message"],
        duration: 3000,
        position: 'top'
      });
      toast.present();
      if(resp["success"]==true){
        this.appPreferences.store("Email",this.login.Email);
        this.appPreferences.store("Password",this.login.Password);
        this.appPreferences.store("Name",resp["user"].Name);
        this.appPreferences.store("Contact",resp["user"].Contact);
        this.appPreferences.store("UserId",resp["user"].Id);
        localStorage.setItem("UserId",resp["user"].Id);
        this.navCtrl.push(MainPage);
       
      }else{
        let toast = this.toastCtrl.create({
          message: resp["message"],
          duration: 3000,
          position: 'top'
      });
      toast.present();
    }
     
    }, (err) => {

     // this.navCtrl.push(MainPage);

      // Unable to sign up
      let toast = this.toastCtrl.create({
        message: err["message"],
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
    }, 3000);
  }
}
