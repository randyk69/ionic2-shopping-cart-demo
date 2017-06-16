import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CartData {
  items: any = []; 
  public total = 0;

  constructor(public http: Http) {}

  addItem(item, price){
        this.items.push({title: item, amount: price});
  }

  removeItem(ndx) {
      this.items.splice(ndx, 1);
  }

  loadAll(){
    return Promise.resolve(this.items);
  };

  loadAllItemsOrdered(){
    return Promise.resolve(this.items);
  }

  getTotalBill() {
      this.total = 0;
      for(let item of this.items) {
          this.total += parseInt(item.amount);          
      }
      return Promise.resolve(this.total);
  }

  getSize() {
    return Promise.resolve(this.items);
  }

}
