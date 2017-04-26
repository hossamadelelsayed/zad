import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {MainService} from "./main-service";

/*
  Generated class for the OrderService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class OrderService {
  public cartDetailsGetUrl : string = MainService.baseUrl+"api/order/cart/details/get";
  public cartItemAddUrl : string = MainService.baseUrl+"api/order/cart/add";
  public cartConfirmUrl : string = MainService.baseUrl+"api/order/confirm";
  public cartItemDelUrl : string = MainService.baseUrl+"api/order/details/del";
  public orderUpdateUrl : string = MainService.baseUrl+"api/order/update";
  public updateOrderItemUrl : string = MainService.baseUrl+"api/order/item/update";
  constructor(public http: Http) {
    console.log('Hello OrderService Provider');
  }
  cartDetailsGet(inputs : any){
    inputs.lang = MainService.lang;
    return this.http.post(this.cartDetailsGetUrl,inputs).map((res) => res.json());
  }
  cartItemAdd(inputs : any){
    inputs.lang = MainService.lang;
    return this.http.post(this.cartItemAddUrl,inputs).map((res) => res.json());
  }
  cartConfirm(inputs : any){
    inputs.lang = MainService.lang;
    return this.http.post(this.cartConfirmUrl,inputs).map((res) => res.json());
  }
  cartItemDel(inputs : any){
    inputs.lang = MainService.lang;
    return this.http.post(this.cartItemDelUrl,inputs).map((res) => res.json());
  }
  orderUpdate(inputs : any){
    inputs.lang = MainService.lang;
    return this.http.post(this.orderUpdateUrl,inputs).map((res) => res.json());
  }
  updateOrderItem(inputs : any){
    inputs.lang = MainService.lang;
    return this.http.post(this.updateOrderItemUrl,inputs).map((res) => res.json());
  }
}
