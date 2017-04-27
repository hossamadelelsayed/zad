import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {MainService} from "./main-service";
import { NativeStorage } from '@ionic-native/native-storage';
import { Observable } from 'rxjs/Rx';
import { Geolocation } from '@ionic-native/geolocation';

/*
  Generated class for the RepService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RepService {
  private timer;
  public rep:any = null;
  public readonly RepCode : number = 2 ;
  public userUpdateUrl : string = MainService.baseUrl+"api/user/update";
  public RepClosedOrdersGetUrl : string = MainService.baseUrl+"api/rep/closed/orders/get";
  public RepPendingOrdersGetUrl : string = MainService.baseUrl+"api/rep/pending/orders/get";
  public RepOrderCreateUrl : string = MainService.baseUrl+"api/rep/order/create";
  public RepOrderProductsUrl : string = MainService.baseUrl+"api/rep/order/products";
  public RepPositionSendUrl : string = MainService.baseUrl+"api/rep/position/send";

  constructor(public http: Http,
              private nativeStorage: NativeStorage,
              private geolocation: Geolocation) {
    console.log('Hello RepService Provider');
  }
  repPositionSend(lat:number,lng:number){
    let inputs = {
      lat : lat ,
      lng : lng ,
      rep_id : this.rep.id ,
      lang : MainService.lang
    };
    return this.http.post(this.RepPositionSendUrl, inputs).map((res) => res.json());
  }
  getAndSendRepPosition(){
    this.geolocation.getCurrentPosition().then((resp) => {
       this.repPositionSend(resp.coords.latitude,resp.coords.longitude).subscribe((res)=>{
         console.log(res.success)
       });
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }
  timerInit(){

    this.timer = Observable.timer(1000, 5000);
    // subscribing to a observable returns a subscription object
    this.timer.subscribe(() => {
      this.getAndSendRepPosition();
    });
  }
  repOrderProducts(order){
    order.lang = MainService.lang;
    return this.http.post(this.RepOrderProductsUrl, order).map((res) => res.json());
  }
  repOrderCreate(rep){
    rep.lang = MainService.lang;
    return this.http.post(this.RepOrderCreateUrl, rep).map((res) => res.json());
  }
  repClosedOrdersGet(rep){
    rep.lang = MainService.lang;
    return this.http.post(this.RepClosedOrdersGetUrl, rep).map((res) => res.json());
  }
  repPendingOrdersGet(rep){
    rep.lang = MainService.lang;
    return this.http.post(this.RepPendingOrdersGetUrl, rep).map((res) => res.json());
  }
  repStorageSave(rep:any){
    this.nativeStorage.setItem('rep', rep)
      .then(
        () => {
          this.rep = rep;
          console.log('Rep Is Stored!');
          this.timerInit();
        },
        error => console.error('Error storing item', error)
      );
  }
  repStorageErase(){
    this.nativeStorage.remove('rep')
      .then(
        () => {
          this.rep = null;
          console.log('Rep Is Erased!');
        },
        error => console.error(error)
      );
  }
  repStorageGet(){
    this.nativeStorage.getItem('rep')
      .then(
        (rep) => {
          this.rep = rep;
          console.log('Rep Is Geted!');
          //return customer
          this.timerInit();
        },
        error => console.error(error)
      );
  }
  repUpdate(rep) {
    rep.lang = MainService.lang;
    return this.http.post(this.userUpdateUrl, rep).map((res) => res.json());
  }
}
