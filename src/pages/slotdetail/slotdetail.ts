import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { SlotdetailProvider } from "../../providers/slotdetail/slotdetail";   
import { Slot } from "../../models/slot";
import { DateTime } from 'ionic-angular/components/datetime/datetime';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { BookingProvider } from "../../providers/booking/booking";
import { AppPreferences } from '@ionic-native/app-preferences';
/**
 * Generated class for the SlotdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slotdetail',
  templateUrl: 'slotdetail.html',
})
export class SlotdetailPage {

  dataPresent:boolean=false;
  bookingDate:DateTime;
  NumberOfPlayers:number;
  totalAmount:number;
  startTime:DateTime;
  endTime:DateTime;
  slot:any;
  UserId:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private bookingProvider:BookingProvider,  private appPreferences:AppPreferences,
    private toastCtrl:ToastController, 
    public loadingCtrl: LoadingController)  {
      this.appPreferences.fetch("UserId").then(res=>{this.UserId=res},err=>{console.error()}); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlotdetailPage');
    console.log(this.navParams.get('slot'));
    this.slot=this.navParams.get('slot');
    console.log(this.slot.Ground.Number);
    console.log(this.navParams.get('date'));
    console.log(this.navParams.get('players'));
    this.bookingDate=this.navParams.get('date');
    this.NumberOfPlayers=this.navParams.get('players');
    this.startTime=this.navParams.get('startTime');
    this.endTime=this.navParams.get('endTime');
    this.totalAmount=this.slot.Ground.BaseAmount+this.slot.Rate;
    this.dataPresent=true;
  }

  bookSlot(Id:number,Rate:number):void{
    this.bookingProvider.bookSlot(Id,this.bookingDate,this.NumberOfPlayers,this.totalAmount,this.UserId).subscribe(
      res=>{
        if(res["success"])
        {
          console.log(res);
          let toast = this.toastCtrl.create({
            message: res["message"],
            duration: 3000,
            position: 'top'
          });
          toast.present();
          this.navCtrl.push('BookingdetailPage',{bookId:res['bookId'],slot:this.slot,date:this.bookingDate,players:this.NumberOfPlayers,startTime:this.startTime,endTime:this.endTime});
        }
        else
        {
          console.log(res);
          let toast = this.toastCtrl.create({
            message: res["message"],
            duration: 3000,
            position: 'top'
          });
          toast.present();
        }
      }
  
      );
      

  
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
