import { Component } from '@angular/core';
import {  NavController, NavParams ,ToastController ,ViewController} from 'ionic-angular';
import {Editaccount} from '../editaccount/editaccount';
import {CustomerService} from "../../../providers/customer-service";
import {HomePage} from "../../home/home";

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class RepCustomerAdd {
  public customer = {
    type:1
  };
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private customerService : CustomerService ,
              private viewCtrl : ViewController ,
              private toastCtrl : ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Signup');
  }

 addCustomer(){
    console.log(this.customer);
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
          this.presentToast("Success Added");
          this.viewCtrl.dismiss();
        }

    });

   //this.navCtrl.push(Editaccount);
  }
  closeModal(){
    this.viewCtrl.dismiss();
  }
  presentToast(txt:string) {
    let toast = this.toastCtrl.create({
      message: txt,
      duration: 3000
    });
    toast.present();
  }

}
