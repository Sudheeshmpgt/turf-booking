import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignoutPage } from './signout';

@NgModule({
  declarations: [
    SignoutPage,
  ],
  imports: [
    IonicPageModule.forChild(SignoutPage),
  ],
})
export class SignoutPageModule {}
