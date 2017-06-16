import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PastaPage } from '../pasta/pasta';
import { PizzaPage } from '../pizza/pizza';
import { StartersPage } from '../starters/starters';
import { CartData } from '../../providers/cart-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public total_ordered_items: any;

  constructor(public navCtrl: NavController, public cart_data: CartData) {
    this.cart_data.getSize().then(result => {
      this.total_ordered_items = result;
    });

  }

  gotoPastaPage() {
  	this.navCtrl.push(PastaPage);
  }

  gotoPizzaPage() {
  	this.navCtrl.push(PizzaPage);
  }

  gotoStartersPage() {
  	this.navCtrl.push(StartersPage);
  }

}
