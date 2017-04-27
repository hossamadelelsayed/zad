import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {MainService} from "../../providers/main-service";
import {OrderService} from "../../providers/order-service";
import {CustomerService} from "../../providers/customer-service";
import {HistoryPage} from "../history/history";



@Component({
  selector: 'page-editproduct',
  templateUrl: 'editproduct.html',
})
export class Editproduct {
  public MainService :MainService = MainService;
  public detail : any;
  public counter : number = 1;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public orderService: OrderService,
              public customerService: CustomerService) {
  }

  ionViewDidLoad() {
    this.detail = this.navParams.data;
    console.log(this.detail);
  }
  plus(){
    this.counter++;
  }
  minus(){
    if(this.counter > 1)
    this.counter--;
  }
  saveUpdates(){
    let inputs = {
      product_id : this.detail.product_id,
      customer_id : this.customerService.customer.id,
      quantity : this.counter
    };
    this.orderService.cartItemAdd(inputs).subscribe((res)=>{
      //this.navCtrl.popTo(HistoryPage);
      this.goToOrderHistory();
    });
  }
  delProduct(){
    let inputs ={
      odetails_id : this.detail.id
    };
    this.orderService.cartItemDel(inputs).subscribe((res)=>{
      //this.navCtrl.popTo(HistoryPage);
      this.goToOrderHistory();
    });
  }
  goToOrderHistory(){
    this.orderService.cartDetailsGet({customer_id : this.customerService.customer.id}).subscribe((res)=>{
      let orderDetails = {
        orderDetails :res.data
      }
      this.navCtrl.pop(orderDetails);
    });

  }
}
