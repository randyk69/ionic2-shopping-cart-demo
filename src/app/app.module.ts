import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PastaPage } from '../pages/pasta/pasta';
import { PizzaPage } from '../pages/pizza/pizza';
import { StartersPage } from '../pages/starters/starters';
import { CartData } from '../providers/cart-data';
import { Checkout } from '../pages/checkout/checkout';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PastaPage,
    PizzaPage,
    StartersPage,
    Checkout
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PastaPage,
    PizzaPage,
    StartersPage,
    Checkout
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CartData,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
