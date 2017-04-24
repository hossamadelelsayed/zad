import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Historydetails } from '../historydetails/historydetails';
import {CustomerService} from "../../providers/customer-service";
import {RepService} from "../../providers/rep-service";


@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
  public orders :any;
  public mode : number;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public customerService: CustomerService,
              public repService: RepService) {
    if(this.customerService.customer != null){
      this.mode = this.customerService.CustomerCode;
    }
    else if(this.repService.rep != null){
      this.mode = this.repService.RepCode;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad History');
  }
  ionViewWillEnter(){

    if(this.mode == this.customerService.CustomerCode){
      console.log(this.mode);
      this.customerService.customerOrdersGet({customer_id:this.customerService.customer.id}).subscribe((res)=>{
        this.orders = res;
      });
    }
    else if(this.mode == this.repService.RepCode){
      console.log(this.mode);
      this.repService.repClosedOrdersGet({rep_id:this.repService.rep.id}).subscribe((res)=>{
        this.orders = res;
      });
    }
  }
  showdetails(order:any){
    this.navCtrl.push(Historydetails,order);
  }

}
