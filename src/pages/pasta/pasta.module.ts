import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PastaPage } from './pasta';

@NgModule({
  declarations: [
    PastaPage,
  ],
  imports: [
    IonicPageModule.forChild(PastaPage),
  ],
  exports: [
    PastaPage
  ]
})
export class PastaModule {}
