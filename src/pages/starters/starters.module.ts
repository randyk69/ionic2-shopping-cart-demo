import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StartersPage } from './starters';

@NgModule({
  declarations: [
    StartersPage,
  ],
  imports: [
    IonicPageModule.forChild(StartersPage),
  ],
  exports: [
    StartersPage
  ]
})
export class StartersModule {}
