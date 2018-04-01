import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { DateTime } from 'ionic-angular/components/datetime/datetime';

/**
 * Generated class for the BookingdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bookingdetail',
  templateUrl: 'bookingdetail.html',
})
export class BookingdetailPage {
  slot:any;
  bookId:number;
  dataPresent:boolean=false;
  bookingDate:DateTime;
  NumberOfPlayers:number;
  totalAmount:number;
  startTime:DateTime;
  endTime:DateTime;

  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingdetailPage');
    this.slot=this.navParams.get('slot');
    this.bookId=this.navParams.get('bookId');
    console.log(this.slot);
    console.log(this.bookId);
    this.bookingDate=this.navParams.get('date');
    this.NumberOfPlayers=this.navParams.get('players');
    this.startTime=this.navParams.get('startTime');
    this.endTime=this.navParams.get('endTime');
    this.totalAmount=this.slot.Ground.BaseAmount+this.slot.Rate;
    this.dataPresent=true;
  }

  goToTurfList():void{
    this.presentLoadingDefault();
    this.navCtrl.push('TurfListPage');
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
