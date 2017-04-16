import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Lang } from '../lang/lang';
import { Productdetails } from '../productdetails/productdetails';
import { Favorite } from '../favorite/favorite';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

  }

  gotolog(){
  this.navCtrl.push(LoginPage);
}
  gotolang()
  {
    this.navCtrl.push(Lang);
  }
  favorite(){
    this.navCtrl.push(Favorite);
  }
  

  showCheckbox() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Which planets have you visited?');

    alert.addInput({
      type: 'checkbox',
      label: 'Alderaan',
      value: 'value1',
      checked: true
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Bespin',
      value: 'value2'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okay',
      handler: data => {
        console.log('Checkbox data:', data);
      }
    });
    alert.present();
  }
}








