import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { TurfProvider  } from "../../providers/turf/turf";
import { Turf } from "../../models/turf";
import { Feedback } from "../../models/feedback";
import { FeedbackProvider  } from "../../providers/feedback/feedback";
/**
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class FeedbackPage {
  turflist: Turf[]=[];
  feedback:Feedback=new Feedback();
  Comment:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
      public toastCtrl: ToastController,private turfProvider:TurfProvider,
    private feedbackProvider:FeedbackProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackPage');
    this.turfProvider.turflist().subscribe(
      result=>{
        console.log(result);
        if(result["success"]==true)
        {
          this.turflist=result["turfs"];
          console.log(this.turflist);
         
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
        
    });
  }
  feedbackTurf():void{
    this.feedbackProvider.feedbackTurf(this.feedback).subscribe(
      result=>{
        if(result["success"]==true){
          let toast = this.toastCtrl.create({
            message: result["message"],
            duration: 3000,
            position: 'top'
          });
          toast.present();
        }else{
          let toast = this.toastCtrl.create({
            message: result["message"],
            duration: 3000,
            position: 'top'
          });
          toast.present();
        }
        
      }
    );
  }

}
