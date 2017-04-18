import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {MainService} from "./main-service";

/*
  Generated class for the CustomerService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CustomerService {
  public customer:any = null;
  public readonly CustomerCode : number = 1 ;
  public customerRegisterUrl : string = MainService.baseUrl+"api/customer/register";
  public customerLoginUrl : string = MainService.baseUrl+"api/customer/login";
  constructor(public http: Http) {
    console.log('Hello CustomerService Provider');
  }
  customerRegister(customer:any)
  {
    customer.lang = MainService.lang;
    return this.http.post(this.customerRegisterUrl,customer).map((res) => res.json());
  }
  customerLogin(customer:any)
  {
    customer.lang = MainService.lang;
    return this.http.post(this.customerLoginUrl,customer).map((res) => res.json());
  }

}
