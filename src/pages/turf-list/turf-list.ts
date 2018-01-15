import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController} from 'ionic-angular';
import { Turf } from "../../models/turf";
import { TurfProvider  } from "../../providers/turf/turf";
import { concat } from 'rxjs/observable/concat';

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
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private turfProvider:TurfProvider,
    public toastCtrl: ToastController,
  ) {
    
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TurfListPage');
    this.getTurfs();
  }

  getTurfs():void{
    this.turfProvider.turflist().subscribe(
      result=>{
          console.log(result);
          if(result["success"]==true)
          {
            this.turflist=result["turfs"];
            console.log(this.turflist);
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
}
