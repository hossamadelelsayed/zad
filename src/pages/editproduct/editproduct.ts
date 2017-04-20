import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';



@Component({
  selector: 'page-editproduct',
  templateUrl: 'editproduct.html',
})
export class Editproduct {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Editproduct');
  }

}
