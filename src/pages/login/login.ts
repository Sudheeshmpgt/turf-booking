import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { ApplicationUser } from "../../models/application-user";
import { User } from '../../providers/providers';
import { MainPage } from '../pages';
import { ApplicationUserProvider } from "../../providers/application-user/application-user";
import { LoginModel } from "../../models/login-model";
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
    public translateService: TranslateService) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
  }

  // Attempt to login in through our User service
  doLogin() {
    this.applicationUserProvider.login(this.login).subscribe((resp) => {
      console.log(resp);
      let toast = this.toastCtrl.create({
        message: resp["message"],
        duration: 3000,
        position: 'top'
      });
      toast.present();
      if(resp["success"]==true){
      
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
}
