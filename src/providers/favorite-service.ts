import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {MainService} from "./main-service";

/*
  Generated class for the FavoriteService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class FavoriteService {
  public favoriteItemAddUrl : string = MainService.baseUrl+"api/favorite/item/add";
  public favoriteDetailsGetUrl : string = MainService.baseUrl+"api/favorite/details/get";
  public favoriteDetailsMoveUrl : string = MainService.baseUrl+"api/favorite/details/move";

  constructor(public http: Http) {
    console.log('Hello FavoriteService Provider');
  }

  favoriteItemAdd(inputs:any){
    inputs.lang = MainService.lang;
    return this.http.post(this.favoriteItemAddUrl,inputs).map((res) => res.json());
  }
  favoriteDetailsGet(inputs:any){
    inputs.lang = MainService.lang;
    return this.http.post(this.favoriteDetailsGetUrl,inputs).map((res) => res.json());
  }
  favoriteDetailsMove(inputs:any){
    inputs.lang = MainService.lang;
    return this.http.post(this.favoriteDetailsMoveUrl,inputs).map((res) => res.json());
  }


}
