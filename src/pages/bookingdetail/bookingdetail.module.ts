import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookingdetailPage } from './bookingdetail';

@NgModule({
  declarations: [
    BookingdetailPage,
  ],
  imports: [
    IonicPageModule.forChild(BookingdetailPage),
  ],
})
export class BookingdetailPageModule {}
