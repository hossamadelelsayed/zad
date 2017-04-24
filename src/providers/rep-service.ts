import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {MainService} from "./main-service";
import { NativeStorage } from '@ionic-native/native-storage';

/*
  Generated class for the RepService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RepService {
  public rep:any = null;
  public readonly RepCode : number = 2 ;
  public userUpdateUrl : string = MainService.baseUrl+"api/user/update";
  public RepClosedOrdersGetUrl : string = MainService.baseUrl+"api/rep/closed/orders/get";
  public RepPendingOrdersGetUrl : string = MainService.baseUrl+"api/rep/pending/orders/get";
  constructor(public http: Http,
              private nativeStorage: NativeStorage) {
    console.log('Hello RepService Provider');
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
        },
        error => console.error(error)
      );
  }
  repUpdate(rep) {
    rep.lang = MainService.lang;
    return this.http.post(this.userUpdateUrl, rep).map((res) => res.json());
  }
}
