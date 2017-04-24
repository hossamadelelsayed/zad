import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Orderdetails} from '../orderdetails/orderdetails';


@Component({
  selector: 'page-createorder',
  templateUrl: 'createorder.html',
})
export class Createorder {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Createorder');
  }
  
   details(){
     this.navCtrl.push(Orderdetails)
   }
}
