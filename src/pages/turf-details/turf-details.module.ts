import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TurfDetailsPage } from './turf-details';

@NgModule({
  declarations: [
    TurfDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(TurfDetailsPage),
  ],
})
export class TurfDetailsPageModule {}
