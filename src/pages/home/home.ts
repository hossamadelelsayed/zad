import { Component } from '@angular/core';
import {NavController, ToastController, MenuController, LoadingController} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Lang } from '../lang/lang';
import { Productdetails } from '../productdetails/productdetails';
import {ProductService} from "../../providers/product-service";
import {MainService} from "../../providers/main-service";
import {FavoriteService} from "../../providers/favorite-service";
import {CustomerService} from "../../providers/customer-service";
import {OrderService} from "../../providers/order-service";
import {Cart} from "../cart/cart";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public MainService = MainService;
  public products : any = null;
  public categories : any = null;
  public productNews : any = null;
  constructor(public navCtrl: NavController
              ,public alertCtrl: AlertController
              ,public productService : ProductService
              ,public toastCtrl: ToastController
              ,public favoriteService: FavoriteService
              ,public orderService: OrderService
              ,public customerService: CustomerService
              ,public menuCtrl: MenuController
              ,public loadingCtrl: LoadingController) {

  }
  ionViewWillEnter(){
    this.productService.categoryGet().subscribe((res)=>{
      this.categories = res;
    });
    this.productService.productGet().subscribe((res)=>{
      this.products = res;
    });
    this.productService.productNewsGet().subscribe((res)=>{
      this.productNews = res;
      console.log(res);
    });

  }
  productDetails(product)
  {
    this.navCtrl.push(Productdetails,product);
  }
  gotolog(){
    this.navCtrl.push(LoginPage);
  }
  gotolang()
  {
    this.navCtrl.push(Lang);
  }
  cart(){
    this.navCtrl.push(Cart);
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
  filterByCategory(category_id)
  {
    let loading = this.loadingCtrl.create({content: 'Loading...'});
    loading.present();
    this.productService.productGetByCategory(category_id).subscribe((res)=>{
      this.products = res;
      loading.dismiss();
    });
  }
  toggleMenu() {
    this.menuCtrl.toggle();
  }
}








