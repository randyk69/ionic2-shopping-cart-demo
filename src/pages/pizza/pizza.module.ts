import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PizzaPage } from './pizza';

@NgModule({
  declarations: [
    PizzaPage,
  ],
  imports: [
    IonicPageModule.forChild(PizzaPage),
  ],
  exports: [
    PizzaPage
  ]
})
export class PizzaModule {}
