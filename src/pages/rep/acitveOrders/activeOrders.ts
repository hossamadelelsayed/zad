import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {RepService} from "../../../providers/rep-service";
import {Orderdetails} from "../orderdetails/orderdetails";



@Component({
  selector: 'page-active-orders',
  templateUrl: 'activeOrders.html',
})
export class ActiveOrdersPage {
  public orders :any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public repService: RepService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad History');
  }
  ionViewWillEnter(){
      this.repService.repPendingOrdersGet({rep_id:this.repService.rep.id}).subscribe((res)=>{
        this.orders = res;
      });
  }
  showdetails(order:any){
    this.navCtrl.push(Orderdetails,order);
  }

}
