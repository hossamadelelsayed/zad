import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Contact} from '../contact/contact';
@Component({
  selector: 'page-editaccount',
  templateUrl: 'editaccount.html',
})
export class Editaccount {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Editaccount');
  }
 
  
  gotolog(){
     this.navCtrl.push(Contact);
  }


}
