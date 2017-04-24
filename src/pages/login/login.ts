import { Component } from '@angular/core';
import { NavController, NavParams , ToastController} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Signup } from '../signup/signup';
import { HomePage } from '../home/home';
import {CustomerService} from "../../providers/customer-service";
import {RepService} from "../../providers/rep-service";



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public customer = {};
  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              public navParams: NavParams,
              private customerService: CustomerService ,
              private repService: RepService ,
              private toastCtrl : ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  goToSignUp(){
    this.navCtrl.push(Signup);
  }
  gotolog(){
    this.customerService.customerLogin(this.customer).subscribe(
      (user)=>{
        if(user.error)
        {
          // return with errors
          this.presentToast(user.error);
        }
        else
        {
          if(user.type == this.customerService.CustomerCode)
          {
            // success
            this.customerService.customer = user;
            this.customerService.customerStorageSave(user);
          }
          else if(user.type == this.repService.RepCode)
          {
            // success
            this.repService.rep = user;
            this.repService.repStorageSave(user);
          }
          this.navCtrl.setRoot(HomePage);
          this.presentToast("Success Login");
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
   showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Forget Password',
      message: "Enter you Email to reset password",
      inputs: [
        {
          name: 'Email',
          placeholder: 'Email'
        },
      ],
      buttons: [
        {
          text: 'OK',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

}
