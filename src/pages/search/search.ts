import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers/providers';
import { Turf } from "../../models/turf";
import { TurfProvider } from '../../providers/turf/turf';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  currentItems: Turf[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public items: Items,private turfProvider:TurfProvider,private toastCtrl:ToastController) { }

  /**
   * Perform a service for the proper items.
   */
  getItems(ev) {
    let val = ev.target.value;
    console.log(val);
    if (!val || !val.trim()) {
      this.currentItems = [];
      return;
    }
  /* this.currentItems = this.items.query({
      name: val
    });*/
    this.turfProvider.turfsearch(val).subscribe(
      res=>{
        if(res["success"])
        {
          console.log(res);
          this.currentItems=res["turfs"];
          console.log('currr:'+this.currentItems);
        }else
        {
          console.log(res);
          let toast = this.toastCtrl.create({
            message: res["message"],
            duration: 3000,
            position: 'top'
          });
          toast.present();

        }
      },
      err=>{
          console.log(err);
      }
    );
  }
  fetchTurf(id:number):void{
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

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }

}
