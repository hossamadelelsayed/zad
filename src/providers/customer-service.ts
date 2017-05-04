import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {MainService} from "./main-service";
import { NativeStorage } from '@ionic-native/native-storage';

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
  public customerUpdateUrl : string = MainService.baseUrl+"api/user/update";
  public customerOrdersUrl : string = MainService.baseUrl+"api/customer/orders/get";
  public customersGetUrl : string = MainService.baseUrl+"api/customer/all/get?lang=";
  public customerLocationSendUrl : string = MainService.baseUrl+"api/customer/location/send";


  constructor(public http: Http,
              private nativeStorage: NativeStorage) {
    console.log('Hello CustomerService Provider');
  }
  customerLocationSend(inputs)
  {
    inputs.lang = MainService.lang;
    return this.http.post(this.customerLocationSendUrl,inputs).map((res) => res.json());
  }
  customersGet(){
    return this.http.get(this.customersGetUrl+MainService.lang).map((res) => res.json());
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
  customerStorageSave(customer:any){
    this.nativeStorage.setItem('customer', customer)
      .then(
        () => {
          this.customer = customer;
          console.log('Customer Is Stored!');
        },
        error => console.error('Error storing item', error)
      );
  }
  customerStorageErase(){
    this.nativeStorage.remove('customer')
      .then(
        () => {
          this.customer = null;
          console.log('Customer Is Erased!');
        },
        error => console.error(error)
      );
  }
  customerStorageGet(){
    this.nativeStorage.getItem('customer')
      .then(
        (customer) => {
          this.customer = customer;
          console.log('Customer Is Geted!');
          //return customer
        },
        error => console.error(error)
      );
  }

  customerUpdate(customer){
    customer.lang = MainService.lang;
    return this.http.post(this.customerUpdateUrl,customer).map((res) => res.json());
  }
  customerOrdersGet(customer:any){
    customer.lang = MainService.lang;
    return this.http.post(this.customerOrdersUrl,customer).map((res) => res.json());
  }
}
