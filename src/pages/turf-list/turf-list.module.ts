import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TurfListPage } from './turf-list';

@NgModule({
  declarations: [
    TurfListPage,
  ],
  imports: [
    IonicPageModule.forChild(TurfListPage),
  ],
})
export class TurfListPageModule {}
