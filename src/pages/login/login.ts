import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Signup } from '../signup/signup';
import { Productdetails } from '../productdetails/productdetails';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  gotolog(){
  this.navCtrl.push(Signup);
}
  gotonext(){
    this.navCtrl.push(HomePage)
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