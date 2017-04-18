import { Component } from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
import { Productdetails } from '../productdetails/productdetails';
import {FavoriteService} from "../../providers/favorite-service";
import {CustomerService} from "../../providers/customer-service";
import {MainService} from "../../providers/main-service";


@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class Favorite {
  public favorites : any ;
  public MainService = MainService;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public toastCtrl: ToastController,
              public favoriteService: FavoriteService,
              public customerService: CustomerService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Favorite');
  }
  ionViewWillEnter(){
    this.getFavorites();

  }
  getFavorites(){
  let customer={
    customer_id:this.customerService.customer.id
  };
  this.favoriteService.favoriteDetailsGet(customer).subscribe((res)=>{
    //handling
    if(res.data){
      this.favorites = res.data;
    }
    //console.log(res);
  });
}
  favoriteDetailsMove(fdetails_id){
    let inputs = {
      fdetails_id : fdetails_id,
      customer_id : this.customerService.customer.id
    };
    console.log(inputs);
    this.favoriteService.favoriteDetailsMove(inputs).subscribe((res)=>{
      //handling
      if(res){
        this.getFavorites();
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
        this.getFavorites();
        this.presentToast(res.success);
      }
      //console.log(res);
    });
  }
  details(){
    this.navCtrl.push(Productdetails);
  }
  presentToast(txt:string) {
    let toast = this.toastCtrl.create({
      message: txt,
      duration: 3000
    });
    toast.present();
  }
}
