import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Productdetails } from '../productdetails/productdetails';



@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class Contact {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Contact');
  }
 
}
