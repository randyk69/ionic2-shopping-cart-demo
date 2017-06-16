import { Component } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpProvider } from '../../providers/http-provider';
import { CartData } from '../../providers/cart-data';
import { AlertController, LoadingController } from 'ionic-angular';

@Component({   selector: 'page-checkout',   templateUrl: 'checkout.html', })

export class Checkout {   
  public orders: any;    
  public prices: any;    
  public data;     
  public items = '';   
  public loadingPopup: any;   
  public totalBill: any;   
  public total = 0;
  

  constructor(private http: Http, public cart_data: CartData, public alertCtrl: AlertController, private loadingCtrl: LoadingController) {

  	this.cart_data.loadAllItemsOrdered().then(result => {
      this.orders = result;
    });

    this.cart_data.getTotalBill().then(result => {
      this.totalBill = result;
    });

    this.data = {};
    this.data.trans_info = '';
	  this.data.username = '';
	  this.data.phone = '';
	  this.data.payment = '';
	  this.data.response = '';
	  this.http = http;
  }
  

  submit() {
  		let headers = new Headers();
	    headers.append('Content-Type', 'application/json' );

	    for(let order of this.orders) {
			   this.items += order.title+",";
		  }

	    let postParams = { trans_info: this.data.username + "-" + this.data.phone + "-" + this.data.payment, trans_info2: this.items }

		var link = 'http://localhost:8100/mystore/api.php';

		this.http.post(link, JSON.stringify(postParams), {headers: headers})
		.subscribe(data => {
			this.data.response = data["_body"];
			alert("Your orders has been received and will be processed shortly.");
		}, error => {
			console.log("Error while processing your orders.");
		});
  }

  showConfirm(ndx) {
    let confirm = this.alertCtrl.create({
      title: 'Remove this item from Cart?',
      cssClass: 'alertcss',
      message: 'Please confirm.',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.cart_data.removeItem(ndx);

            this.cart_data.getTotalBill().then(result => {
              this.totalBill = result;
            });
    
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

  sendConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Proceed Sending your Orders?',
      message: 'Please confirm.',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
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
