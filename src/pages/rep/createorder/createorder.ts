import { Component } from '@angular/core';
import { NavController, NavParams ,LoadingController} from 'ionic-angular';
import {Orderdetails} from '../orderdetails/orderdetails';
import {CustomerService} from "../../../providers/customer-service";
import {RepService} from "../../../providers/rep-service";

@Component({
  selector: 'page-createorder',
  templateUrl: 'createorder.html',
})
export class Createorder {
  public customers : any;
  public delivery_date : any;
  public orderInputs : any;
  public loading :any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              public customerService : CustomerService,
              public repService : RepService) {
       this.orderInputs = {
         rep_id : this.repService.rep.id,
         customer_id:null,
         delivery_date:null
     };  
}

  ionViewDidLoad() {
    this.customerService.customersGet().subscribe((res)=>{
      this.customers = res;
    });
    this.loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });
  }
  createOrder(){
      this.loading.present();    
      this.repService.repOrderCreate(this.orderInputs).subscribe((order)=>{
      this.loading.dismiss();
      this.navCtrl.setRoot(Orderdetails,order) ;
    });
  }
}
