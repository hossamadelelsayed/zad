import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {TranslateService} from 'ng2-translate';
import {MainService} from "../../providers/main-service";
import {HomePage} from "../home/home";

@Component({
  selector: 'page-lang',
  templateUrl: 'lang.html',
})
export class Lang {

  constructor(public navCtrl: NavController
            , public navParams: NavParams
            , private translate: TranslateService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Lang');
  }
  changeLang(type){
    this.translate.setDefaultLang(type);
    MainService.lang = type;
    this.navCtrl.push(HomePage);
  }

}
