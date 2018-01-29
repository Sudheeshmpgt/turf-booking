import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Turf } from '../../models/turf';
import { Ground } from "../../models/ground";
import { GroundProvider } from "../../providers/ground/ground";
import { SlotProvider } from '../../providers/slot/slot';
import { DateTime } from 'ionic-angular/components/datetime/datetime';

/**
 * Generated class for the TurfDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-turf-details',
  templateUrl: 'turf-details.html',
})
export class TurfDetailsPage {

  turf:Turf=new Turf();
  groundList:Ground[]=[];
  image:string="";
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private groundProvider:GroundProvider) {
    var res=navParams.get('turf');
    this.turf=res['turf'];
    this.groundList=res['grounds'];
    console.log(this.turf);
    console.log(this.groundList);
    var images=res['images'];
    console.log(images[0].Path);
    this.image='http://localhost:49783/UploadedFiles/'+images[0].Path;
    console.log(this.image);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TurfDetailsPage');
   
    console.log('ionViewDidLoad BookingPage');
  }

  openPage(id:number) :void{
    this.navCtrl.push('BookingPage', {
     gid: id
    });
  }
 
}
