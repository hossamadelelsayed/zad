import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {MainService} from "./main-service";

/*
  Generated class for the ProductService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ProductService{
  //public baseUrl : string = MainService.baseUrl;
  public productGetUrl : string = MainService.baseUrl+"api/product/get?lang=";
  public productNewsGetUrl : string = MainService.baseUrl+"api/product/news/get?lang=";
  constructor(public http: Http) {
  }
  productGet()
  {
    return this.http.get(this.productGetUrl+MainService.lang).map((res) => res.json());
  }
  productNewsGet()
  {
    return this.http.get(this.productNewsGetUrl+MainService.lang).map((res) => res.json());
  }


}
