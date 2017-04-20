import { Component } from '@angular/core';
import {  NavController, NavParams ,ToastController} from 'ionic-angular';
import {Editaccount} from '../editaccount/editaccount';
import {CustomerService} from "../../providers/customer-service";
import {HomePage} from "../home/home";

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class Signup {
  public customer = {
    type:1
  };
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private customerService : CustomerService ,
              private toastCtrl : ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Signup');
  }

 gotolog(){
   this.customerService.customerRegister(this.customer).subscribe(
      (customer)=>{
        if(customer.error)
        {
          // return with errors
          this.presentToast(customer.error);
        }
        else
        {
          // success
          this.customerService.customer = customer;
          this.customerService.customerStorageSave(customer);
          this.navCtrl.setRoot(HomePage);
          console.log(this.customerService.customer);
          this.presentToast("Success Register");
        }

    });

   //this.navCtrl.push(Editaccount);
  }
  presentToast(txt:string) {
    let toast = this.toastCtrl.create({
      message: txt,
      duration: 3000
    });
    toast.present();
  }

}
