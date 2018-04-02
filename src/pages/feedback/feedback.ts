import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { TurfProvider  } from "../../providers/turf/turf";
import { Turf } from "../../models/turf";
import { Feedback } from "../../models/feedback";
import { FeedbackProvider  } from "../../providers/feedback/feedback";
import { AppPreferences } from '@ionic-native/app-preferences';
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
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
      public toastCtrl: ToastController,private turfProvider:TurfProvider,
    private feedbackProvider:FeedbackProvider,
    private appPreferences: AppPreferences) {
      this.appPreferences.fetch("UserId").then(res=>{this.feedback.UserId=res;
      console.log(this.feedback.UserId)},err=>{});

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
  setTurfId(Id:number):void{
    this.feedback.TurfId=Id;
    console.log(this.feedback.TurfId);
  }
  feedbackTurf():void{
  //  console.log(this.feedback.Comment);
  console.log(this.feedback);
  console.log(this.feedback.TurfId);
    this.feedbackProvider.feedbackproTurf(this.feedback).subscribe(
      result=>{
        console.log("fhjh"+result);
        if(result["success"]==true){
          console.log(result);
          console.log(this.feedback.Comment);
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
      },(err) => {
        
             // this.navCtrl.push(MainPage);
            console.log(err);
              // Unable to sign up
              let toast = this.toastCtrl.create({
                message: err.toString(),
                duration: 3000,
                position: 'top'
              });
              toast.present();
      });
  }

}
