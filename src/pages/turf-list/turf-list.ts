import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController,LoadingController} from 'ionic-angular';
import { Turf } from "../../models/turf";
import { TurfProvider  } from "../../providers/turf/turf";
import { concat } from 'rxjs/observable/concat';
import { Image } from "../../models/image";
import { AppPreferences } from '@ionic-native/app-preferences';
/**
 * Generated class for the TurfListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-turf-list',
  templateUrl: 'turf-list.html',
})
export class TurfListPage {

  turflist: Turf[]=[];
  string="Hello World";
  profilePic:string="";
  Email:any;
  Password:any;
  refresher:any;
  dataPresent:boolean=false;
  UserId:string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private turfProvider:TurfProvider,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    private appPreferences: AppPreferences
  ) {
    
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TurfListPage');
    this.getTurfs();

    console.log('ionViewDidLoad TurfDetailsPage');
   this.appPreferences.fetch("Email").then(res=>{this.Email=res},err=>{console.error()});
    this.appPreferences.fetch("Password").then(res=>{this.Password=res},err=>{console.error()});
    this.appPreferences.fetch("UserId").then(res=>{this.UserId=res},err=>{console.error()});
  }

  getTurfs():void{
    this.turfProvider.turflist().subscribe(
      result=>{
          console.log(result);
          if(result["success"]==true)
          {
            this.turflist=result["turfs"];
            console.log(this.turflist);
            this.dataPresent=true;
            let toast = this.toastCtrl.create({
              message: result["Email"],
              duration: 3000,
              position: 'top'
            });
            
          }
          else{
            let toast = this.toastCtrl.create({
              message: result["message"],
              duration: 3000,
              position: 'top'
            });
            toast.present();

          }
          
      },
      err=>{
        console.error(err);
      }

    )

  }

  //Fetch the turf
  fetchTurf(id:number):void{
    this.presentLoadingDefault();
    console.log(id);
    this.turfProvider.turffind(id).subscribe(
        res=>{
          if(res["success"])
          {
            //console.log(res);
            this.navCtrl.push('TurfDetailsPage', {
              turf:res
            });
          }
          else{
            let toast = this.toastCtrl.create({
              message: res["message"],
              duration: 3000,
              position: 'top'
            });
            toast.present();
          }
        },
        err=>{
          console.error(err);
        }
      
    )

  }

  doRefresh(refresher) {
    
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
      this.getTurfs();
    }, 1000);
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
