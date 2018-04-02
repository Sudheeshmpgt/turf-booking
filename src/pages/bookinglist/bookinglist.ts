import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { Booking } from "../../models/booking";
import { BookingProvider } from "../../providers/booking/booking";
import { AppPreferences } from '@ionic-native/app-preferences';
/**
 * Generated class for the BookinglistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bookinglist',
  templateUrl: 'bookinglist.html',
})
export class BookinglistPage {
  UserId:string;
  userpresent:boolean;
  bookinglist: Booking[]=[];
  dataPresent:boolean=false;
 
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private bookingProvider:BookingProvider,
    private appPreferences:AppPreferences,
    public toastCtrl: ToastController) {
        
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookinglistPage');
   // this.getBookings();
   this.UserId=localStorage.getItem("UserId").toString();
    console.log("USer="+localStorage.getItem("UserId").toString());
    this.bookingProvider.bookList(localStorage.getItem("UserId")).subscribe(
      result=>{
        console.log(result);
        if(result["success"]==true)
        {
          this.bookinglist=result["bookings"];
          console.log(this.bookinglist);
          //console.log(this.UserId);
          console.log(this.dataPresent);
          this.dataPresent=true;
          let toast = this.toastCtrl.create({
            message: result["message"],
            duration: 3000,
            position: 'top'
          });
          toast.present();
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
      let toast = this.toastCtrl.create({
        message: err["message"],
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }

    );
  }
  getBookings():void{
    this.appPreferences.fetch("UserId").then(res=>{this.UserId=res;
      this.userpresent=true;
    
      this.bookingProvider.bookList(this.UserId).subscribe(
        result=>{
          console.log(result);
          if(result["success"]==true)
          {
            this.bookinglist=result["bookings"];
            console.log(this.bookinglist);
            console.log(this.UserId);
            console.log(this.dataPresent);
            this.dataPresent=true;
            let toast = this.toastCtrl.create({
              message: result["message"],
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
        let toast = this.toastCtrl.create({
          message: err["message"],
          duration: 3000,
          position: 'top'
        });
        toast.present();
      }
  
      )
    },err=>{ let toast = this.toastCtrl.create({
      message: err,
      duration: 3000,
      position: 'top'
    });
    toast.present();});
    
  }
  doRefresh(refresher) {
    
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
      this.getBookings();
    }, 1000);
  }
}
