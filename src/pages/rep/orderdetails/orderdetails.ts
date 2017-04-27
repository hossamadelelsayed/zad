import { Component } from '@angular/core';
import { NavController, NavParams ,ToastController} from 'ionic-angular';
import {CustomerService} from "../../../providers/customer-service";
import {ProductService} from "../../../providers/product-service";
import {OrderService} from "../../../providers/order-service";
import {Createorder} from '../createorder/createorder';
import {RepService} from "../../../providers/rep-service";


@Component({
  selector: 'page-orderdetails',
  templateUrl: 'orderdetails.html',
})
export class Orderdetails {
  public customers : any;
  public products : any;
  public order : any ;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public customerService : CustomerService,
              public orderService:OrderService,
              public repService : RepService,
              private toastCtrl : ToastController) {

    this.order = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log(this.order);
    this.customerService.customersGet().subscribe((res)=>{
      this.customers = res;
    });
    this.repService.repOrderProducts({order_id:this.order.id}).subscribe((res)=>{
      this.products = res;
    });
  }
  updateOrder(){
    let order = {
      id : this.order.id ,
      delivery_date : this.order.delivery_date
    }
    this.orderService.orderUpdate(order).subscribe((res)=>{
       if(res.success){
         this.presentToast(res.success);
       }
       else{
          this.presentToast(res.error);
       }
    });
  }
  updateCustomer(select) {
    let order = {
      id : this.order.id ,
      customer_id : select._values[0],
      delivery_date : this.order.delivery_date
    };
    console.log(select._values[0]);
    this.orderService.orderUpdate(order).subscribe((res)=>{
      if(res.success){
        this.presentToast(res.success);
        this.order.customer_id = select._values[0];

      }
      else{
        this.presentToast(res.error);
      }
    });
  }
  updateOrderItem(product_id:number,quantity:number)
  {
    let inputs = {
        order_id : this.order.id,
        product_id :product_id,
        quantity : quantity
    };
     this.orderService.updateOrderItem(inputs).subscribe((res)=>{
       if(res.success){
         this.presentToast(res.success);
       }
       else{
          this.presentToast(res.error);
       }
    });
  }
  confirmOrder(){
    let customer={
      customer_id:this.order.customer_id
    };
    this.orderService.cartConfirm(customer).subscribe((res)=>{
      //handling
      if(res.success){
        this.presentToast(res.success);
        this.navCtrl.setRoot(Createorder);
      }
      else{
        this.presentToast(res.error);
      }

    });
  }
  presentToast(txt:string) {
    let toast = this.toastCtrl.create({
      message: txt,
      duration: 3000
    });
    toast.present();
  }
}
