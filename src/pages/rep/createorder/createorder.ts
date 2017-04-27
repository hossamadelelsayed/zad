import { Component } from '@angular/core';
import {NavController, NavParams, LoadingController, ModalController} from 'ionic-angular';
import {Orderdetails} from '../orderdetails/orderdetails';
import {CustomerService} from "../../../providers/customer-service";
import {RepService} from "../../../providers/rep-service";
import {RepCustomerAdd} from "../addCustomer/signup";

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
              public repService : RepService,
              public modalCtrl: ModalController) {
       this.orderInputs = {
         rep_id : this.repService.rep.id,
         customer_id:null,
         delivery_date:null
     };
}

  ionViewDidLoad() {
    this.getCustomers();
    this.loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });
  }
  getCustomers(){
    this.customerService.customersGet().subscribe((res)=>{
      this.customers = res;
    });
  }
  createOrder(){
      this.loading.present();
      this.repService.repOrderCreate(this.orderInputs).subscribe((order)=>{
      this.loading.dismiss();
      this.navCtrl.setRoot(Orderdetails,order) ;
    });
  }
  addCustomerModal(){
    let modal = this.modalCtrl.create(RepCustomerAdd);
    modal.present();
    modal.onDidDismiss(()=>{
      this.getCustomers();
    });
  }
}
