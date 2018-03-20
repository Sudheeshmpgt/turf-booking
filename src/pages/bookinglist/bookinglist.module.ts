import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookinglistPage } from './bookinglist';

@NgModule({
  declarations: [
    BookinglistPage,
  ],
  imports: [
    IonicPageModule.forChild(BookinglistPage),
  ],
})
export class BookinglistPageModule {}
