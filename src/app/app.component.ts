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
import {RepService} from "../providers/rep-service";
import {ActiveOrdersPage} from "../pages/rep/acitveOrders/activeOrders";
import {Createorder} from "../pages/rep/createorder/createorder";
import {Location} from "../pages/location/location";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = Lang;
  public visitorPages : Array<{title: string, icon: string, component: any}>;
  public customerPages : Array<{title: string, icon: string, component: any}>;
  public repPages : Array<{title: string, icon: string, component: any}>;
  constructor(platform: Platform
    , statusBar: StatusBar
    , splashScreen: SplashScreen
    , private customerService :CustomerService
    , private repService : RepService
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
      this.repService.repStorageGet();
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
      { title: 'Location', icon: 'map',component: Location},
      { title: 'Favorite', icon: 'heart',component: Favorite },
      { title: 'Order History', icon: 'calendar',component: HistoryPage },
      { title: 'Cart', icon: 'cart',component: Cart },
      { title: 'LogOut', icon: 'log-out',component: HomePage},
      { title: 'Lang', icon: 'home',component: Lang },
    ]
    this.repPages = [
      { title: 'My Account', icon: 'contact',component: Editaccount },
      { title: 'Order History', icon: 'calendar',component: HistoryPage },
      { title: 'Active Orders', icon: 'calendar',component: ActiveOrdersPage },
      { title: 'Create Order', icon: 'calendar',component: Createorder },
      { title: 'LogOut', icon: 'log-out',component: HomePage},
      { title: 'Lang', icon: 'home',component: Lang },
    ]
  }
  openPage(p:any){
    if (p.title == 'LogOut') {
      if(this.customerService.customer != null)
      {
        this.customerService.customer = null;//temproray you have to delete it soon
        this.customerService.customerStorageErase();
      }
      else if(this.repService.rep != null)
      {
        this.repService.rep = null;//temproray you have to delete it soon
        this.repService.repStorageErase();
      }
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

