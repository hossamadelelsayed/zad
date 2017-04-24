import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {CustomerService} from "../../../providers/customer-service";
import {ProductService} from "../../../providers/product-service";



@Component({
  selector: 'page-orderdetails',
  templateUrl: 'orderdetails.html',
})
export class Orderdetails {
  public customers : any;
  public products : any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public customerService : CustomerService,
              public productService : ProductService) {
  }

  ionViewDidLoad() {
    this.customerService.customersGet().subscribe((res)=>{
      this.customers = res;
    });
    this.productService.productGet().subscribe((res)=>{
      this.products = res;
    });
  }

}
