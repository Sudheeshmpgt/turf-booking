import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,LoadingController } from 'ionic-angular';
import { DateTime } from 'ionic-angular/components/datetime/datetime';
import { SlotProvider } from "../../providers/slot/slot";
import { Slot } from "../../models/slot";
import { BookingProvider } from "../../providers/booking/booking";
import { SlotdetailProvider } from '../../providers/slotdetail/slotdetail';
import { DatePicker } from '@ionic-native/date-picker';
import { DatePickerModule } from 'datepicker-ionic2';
/**
 * Generated class for the BookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html',
})
export class BookingPage {
  groundId:number;
  bookingDate:DateTime;
  NumberOfPlayers:number;
  slotList:Slot[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
     public toastCtrl: ToastController,private slotProvider:SlotProvider, 
     private bookProvider:BookingProvider,
     private slotDetailProvider:SlotdetailProvider,
     private datePicker: DatePicker,
     public loadingCtrl: LoadingController
    ) {
    this.groundId=Number(navParams.get('gid'));
    console.log(navParams.get('gid'));
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingPage');
    // this.groundId=this.navParams.get('gid');
    
    
  }
  
  fetchSlot():void{
    this.presentLoadingDefault();
    console.log(this.groundId);
    console.log(this.bookingDate);
   // var date=new DateTime(this.);
    //console.log(date);
    this.slotProvider.slotlist(this.groundId,this.bookingDate).subscribe(
      res=>{
        if(res["success"])
        {
        console.log(res);
        this.slotList=res['slots'];
        console.log(this.slotList);
        }else{
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

  slotDetail(slotId:number,status:boolean):void{
    this.presentLoadingDefault();
    if(status!=true){
    this.slotDetailProvider.slotDetailProvider(slotId).subscribe(
      res=>{
        if(res["success"])
        {
        console.log(res);
          this.navCtrl.push('SlotdetailPage',{slot:res['slot'],startTime:res['startTime'],endTime:res['endTime'],date:this.bookingDate,players:this.NumberOfPlayers});
        }else{
          let toast = this.toastCtrl.create({
            message: res["message"],
            duration: 3000,
            position: 'top'
          });
          toast.present();
        }
      }
    );
  }else{
    let toast = this.toastCtrl.create({
      message: "Slot already Booked!",
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
  }  
  showDate():void{
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => console.log(date),
        
       
      err => console.log('Error occurred while getting date: ', err)
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
