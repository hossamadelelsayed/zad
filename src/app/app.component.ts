import {Component, ViewChild} from '@angular/core';
import {Platform, NavController, Nav ,ToastController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Lang } from '../pages/lang/lang';
import { HomePage } from '../pages/home/home';
import {Signup} from "../pages/signup/signup";
import {LoginPage} from "../pages/login/login";
import {CustomerService} from "../providers/customer-service";
import {Favorite} from "../pages/favorite/favorite";
import {Cart} from "../pages/cart/cart";
import {Contact} from "../pages/contact/contact";
import {Editaccount} from "../pages/editaccount/editaccount";
import {HistoryPage} from "../pages/history/history";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = Lang;
  public visitorPages : Array<{title: string, icon: string, component: any}>;
  public customerPages : Array<{title: string, icon: string, component: any}>;
  constructor(platform: Platform
    , statusBar: StatusBar
    , splashScreen: SplashScreen
    , private customerService :CustomerService
    , private toastCtrl : ToastController
    /*, public navCtrl : NavController*/
    ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      // chseck for any customer
      this.customerService.customerStorageGet();
    });

    this.visitorPages = [
      { title: 'Home', icon: 'home',component: HomePage},
      { title: 'SignUp', icon: 'log-in',component: Signup },
      { title: 'Login', icon: 'log-in',component: LoginPage},
      { title: 'Lang', icon: 'home',component: Lang },
    ];
    this.customerPages = [
      { title: 'Home', icon: 'home',component: HomePage},
      { title: 'My Account', icon: 'contact',component: Editaccount },
      { title: 'Contact US', icon: 'contacts',component: Contact },
      { title: 'Favorite', icon: 'heart',component: Favorite },
      { title: 'Order History', icon: 'calendar',component: HistoryPage },
      { title: 'Cart', icon: 'cart',component: Cart },
      { title: 'LogOut', icon: 'log-out',component: HomePage},
      { title: 'Lang', icon: 'home',component: Lang },
    ]
  }
  openPage(p:any){
    if (p.title == 'LogOut') {
      this.customerService.customer = null;//temproray you have to delete it soon
      this.customerService.customerStorageErase();
      this.presentToast("LogOut Successfully");
    }
    this.nav.push(p.component);

  }

  presentToast(txt:string) {
    let toast = this.toastCtrl.create({
      message: txt,
      duration: 3000
    });
    toast.present();
  }
}

