import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { HttpProvider } from '../../providers/http-provider';
import { AlertController } from 'ionic-angular';
import { CartData } from '../../providers/cart-data';

@Component({
  selector: 'page-pizza',
  templateUrl: 'pizza.html',
  providers:[HttpProvider]
})

export class PizzaPage {
  public data: any;	
  public orders: any;
  public total_ordered_items: any;

  constructor(private http: Http, public alertCtrl: AlertController, public cart_data: CartData) {
    this.data;
    this.getData();

    this.cart_data.loadAll().then(result => {
      this.orders = result;
    });

    this.cart_data.getSize().then(result => {
      this.total_ordered_items = result;
    });

  }

  getData(){
		this.http.get('http://localhost:8100/mystore/data/pizza.json').map(res => res.json()).subscribe(
		data => {
			this.data = data;
		}, (rej) => {console.error("Could not load local data",rej)});
  }

  showConfirm(item,price) {
    let confirm = this.alertCtrl.create({
      title: 'Add to Cart?',
      message: 'Please confirm if you wish to buy this product.',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.cart_data.addItem(item,price);
          }
        },
        {
          text: 'Cancel',
          handler: () => {
          }
        }
      ]
    });
    confirm.present();
  }

}
