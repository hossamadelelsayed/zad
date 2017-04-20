import { Component } from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
import {MainService} from "../../providers/main-service";
import {FavoriteService} from "../../providers/favorite-service";
import {OrderService} from "../../providers/order-service";
import {CustomerService} from "../../providers/customer-service";


/**
 * Generated class for the Productdetails page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-productdetails',
  templateUrl: 'productdetails.html',
})
export class Productdetails {
  public MainService = MainService;
  public product : any ;
  constructor(public navCtrl: NavController
            , public navParams: NavParams
            ,public toastCtrl: ToastController
            ,public favoriteService: FavoriteService
            ,public orderService: OrderService
            ,public customerService: CustomerService) {
    this.product = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Productdetails');
  }
  CartItemAdd(product_id){
    let inputs = {
      product_id : product_id,
      quantity : 1 ,
      customer_id : this.customerService.customer.id
    };
    this.orderService.cartItemAdd(inputs).subscribe((res)=>{
      //handling
      if(res){
        this.presentToast(res);
      }
      //console.log(res);
    });
  }
  favoriteItemAdd(product_id){
    let inputs = {
      product_id : product_id,
      quantity : 1 ,
      customer_id : this.customerService.customer.id
    };
    this.favoriteService.favoriteItemAdd(inputs).subscribe((res)=>{
      //handling
      if(res.success){
        this.presentToast(res.success);
      }
      //console.log(res);
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
