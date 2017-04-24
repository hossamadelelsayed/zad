import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {MainService} from "../../providers/main-service";



@Component({
  selector: 'page-editproduct',
  templateUrl: 'editproduct.html',
})
export class Editproduct {
  public MainService :MainService = MainService;
  public detail : any;
  public counter : number = 1;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.detail = this.navParams.data;
  }
  plus(){
    this.counter++;
  }
  minus(){
    this.counter--;
  }
}
