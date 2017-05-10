import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {MainService} from "./main-service";

/*
  Generated class for the ContactService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ContactService {

  public mailSendUrl : string = MainService.baseUrl+"/api/mail/send";
  public contactsUrl : string = MainService.baseUrl+"/api/contacts";
  constructor(public http: Http) {
    console.log('Hello ContactService Provider');
  }
  mailSend(inputs)
  {
    inputs.lang = MainService.lang;
    return this.http.post(this.mailSendUrl,inputs).map((res) => res.json());
  }
  getContacts()
  {
    return this.http.get(this.contactsUrl).map((res) => res.json());
  }
}
