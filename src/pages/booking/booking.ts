import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DateTime } from 'ionic-angular/components/datetime/datetime';
import { SlotProvider } from "../../providers/slot/slot";
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
  bookingDate:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private slotProvider:SlotProvider) {
    this.groundId=Number(navParams.get('gid'));
    console.log(navParams.get('gid'));
    //this.bookingDate="29/1/18";
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingPage');
    // this.groundId=this.navParams.get('gid');
    
    
  }
  
  fetchSlot():void{
    console.log(this.groundId);
    this.slotProvider.slotlist(this.groundId,this.bookingDate).subscribe(
      res=>{
        if(res["success"])
        {
        console.log(res);
        }
    },
    err=>{
      console.error(err);
    }
    )
  }
  

}
