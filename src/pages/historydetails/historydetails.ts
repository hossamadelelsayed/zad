import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Editproduct } from '../editproduct/editproduct';
import {MainService} from "../../providers/main-service";


@Component({
  selector: 'page-historydetails',
  templateUrl: 'historydetails.html',
})
export class Historydetails {
  public MainService :MainService = MainService;
  public order :any ;
  public orderDetails :any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.order = this.navParams.data;
    this.orderDetails = this.order.details;
  }
  ionViewWillEnter(){
    if(this.navParams.data.orderDetails)
      this.orderDetails = this.navParams.data.orderDetails;
  }
  edit(detail :any){
    this.navCtrl.push(Editproduct,detail);
  }
}
