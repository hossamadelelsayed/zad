import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Productdetails } from '../productdetails/productdetails';


@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class Favorite {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Favorite');
  }
  details(){
    this.navCtrl.push(Productdetails);
  }

}
