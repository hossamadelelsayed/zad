import { Component } from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {CustomerService} from "../../providers/customer-service";

/**
 * Generated class for the CustomerSearch page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-customer-search',
  templateUrl: 'customer-search.html',
})
export class CustomerSearch {
  public customers :any;
  public customersFilter :any;
  constructor(  public navCtrl: NavController,
                public navParams: NavParams,
                public customerService : CustomerService,
                public viewCtrl : ViewController) {
  }
  ionViewWillEnter()
  {
    this.customers = this.navParams.data;
    this.customersFilter = this.navParams.data;
  }

  getCustomers(ev)
  {
      console.log(ev.target.value);
    // set val to the value of the searchbar
    let val = ev.target.value;
      if (val && val.trim() != '') {
        this.customersFilter = this.customers.filter((customer) => {
          return (customer.user.user_name.indexOf(val) > -1
                || customer.user.mobile.indexOf(val) > -1 );
        });
      }
      else
      {
          this.customersFilter = this.customers;
      }
  }
  selectCustomer(customer)
  {
    console.log(customer);
    this.viewCtrl.dismiss(customer.id);
  }
  closeModal(){
    this.viewCtrl.dismiss();
  }
}
