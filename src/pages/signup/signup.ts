import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {Editaccount} from '../editaccount/editaccount';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class Signup {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Signup');
  }

 gotolog(){
  this.navCtrl.push(Editaccount);
  }
}
