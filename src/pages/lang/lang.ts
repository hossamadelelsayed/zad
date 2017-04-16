import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import {TranslateService} from 'ng2-translate';

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
    this.navCtrl.push(LoginPage);
  }

}
