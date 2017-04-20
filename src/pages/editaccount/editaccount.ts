import { Component } from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
import {Contact} from '../contact/contact';
import {CustomerService} from "../../providers/customer-service";
import {TranslateService} from "ng2-translate";
@Component({
  selector: 'page-editaccount',
  templateUrl: 'editaccount.html',
})
export class Editaccount {
  public user : any ;
  constructor(public navCtrl: NavController,
              public navParams: NavParams ,
              private customerService : CustomerService,
              private toastCtrl : ToastController,
              private translateService: TranslateService
  )
  {
    if(customerService.customer != null)
      this.user = customerService.customer ;
    // else reprentative
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Editaccount');
  }


  customerUpdate(){
    this.customerService.customerUpdate(this.user).subscribe((customer)=>{
      this.customerService.customer = customer ;
      console.log(this.customerService.customer);
      this.translateService.get('Done').subscribe(
        value => {
          // value is our translated string
          this.presentToast(value);
        }
      )
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
