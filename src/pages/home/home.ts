import { Component } from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Lang } from '../lang/lang';
import { Productdetails } from '../productdetails/productdetails';
import { Favorite } from '../favorite/favorite';
import {ProductService} from "../../providers/product-service";
import {MainService} from "../../providers/main-service";
import {FavoriteService} from "../../providers/favorite-service";
import {CustomerService} from "../../providers/customer-service";
import {OrderService} from "../../providers/order-service";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public MainService = MainService;
  public products : any = null;
  constructor(public navCtrl: NavController
              ,public alertCtrl: AlertController
              ,public productService : ProductService
              ,public toastCtrl: ToastController
              ,public favoriteService: FavoriteService
              ,public orderService: OrderService
              ,public customerService: CustomerService) {

  }
  ionViewWillEnter(){
    this.productService.productGet().subscribe((res)=>{
      this.products = res;
    });
  }
  gotolog(){
    this.navCtrl.push(LoginPage);
  }
  gotolang()
  {
    this.navCtrl.push(Lang);
  }
  favorite(){
    this.navCtrl.push(Favorite);
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
  showCheckbox() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Which planets have you visited?');

    alert.addInput({
      type: 'checkbox',
      label: 'Alderaan',
      value: 'value1',
      checked: true
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Bespin',
      value: 'value2'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okay',
      handler: data => {
        console.log('Checkbox data:', data);
      }
    });
    alert.present();
  }
}








