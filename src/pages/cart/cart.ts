import { Component } from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
import { Productdetails } from '../productdetails/productdetails'
import {CustomerService} from "../../providers/customer-service";
import {MainService} from "../../providers/main-service";
import {OrderService} from "../../providers/order-service";


@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class Cart {
  public cart:any;
  public MainService = MainService;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public toastCtrl: ToastController,
              public orderService: OrderService,
              public customerService: CustomerService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Favorite');
  }
  ionViewWillEnter(){
    this.getCartDetails();
  }
  getCartDetails(){
    let customer={
      customer_id:this.customerService.customer.id
    };
    this.orderService.cartDetailsGet(customer).subscribe((res)=>{
      //handling
      if(res.data){
        this.cart = res.data;
      }
      //console.log(res);
    });
  }
  details(){
    this.navCtrl.push(Productdetails);
  }

}
