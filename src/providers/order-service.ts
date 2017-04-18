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
}
