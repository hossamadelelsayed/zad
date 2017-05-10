import { Component } from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
import { Productdetails } from '../productdetails/productdetails';
import {ContactService} from "../../providers/contact-service";



@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class Contact {
  public mail = {};
  public contacts : any ;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public contactService: ContactService,
              public toastCtrl : ToastController) {
  }

  ionViewWillEnter() {
    this.contactService.getContacts().subscribe(
      (contacts)=>{
          this.contacts = contacts;
      });
  }
  sendMail()
  {
    this.contactService.mailSend(this.mail).subscribe(
      (res)=>{
        if(res.success)
          this.presentToast(res.success);
      });
  }
  presentToast(txt:string) {
    let toast = this.toastCtrl.create({
      message: txt,
      duration: 3000
    });
    toast.present();
  }
}
