import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { Signup } from '../pages/signup/signup';
import { Editaccount } from '../pages/editaccount/editaccount';
import {Contact} from '../pages/contact/contact';
import { Productdetails } from '../pages/productdetails/productdetails';
import {Lang} from '../pages/lang/lang';
import { Favorite} from '../pages/favorite/favorite';
import { TranslateModule , TranslateStaticLoader ,TranslateLoader} from 'ng2-translate';
import {Http} from "@angular/http";
import {ProductService} from "../providers/product-service";
import {MainService} from "../providers/main-service";
import {CustomerService} from "../providers/customer-service";
import {Cart} from "../pages/cart/cart";
import {FavoriteService} from "../providers/favorite-service";
import {OrderService} from "../providers/order-service";
import {NativeStorage} from "@ionic-native/native-storage";
import {HistoryPage} from "../pages/history/history";
import {Historydetails} from "../pages/historydetails/historydetails";
import {Editproduct} from "../pages/editproduct/editproduct";
import {RepService} from "../providers/rep-service";
import {ActiveOrdersPage} from "../pages/rep/acitveOrders/activeOrders";
import {Createorder} from "../pages/rep/createorder/createorder";
import {Orderdetails} from "../pages/rep/orderdetails/orderdetails";
import {Geolocation} from "@ionic-native/geolocation";
import {RepCustomerAdd} from "../pages/rep/addCustomer/signup";
import {Location} from "../pages/location/location";
import {CustomerSearch} from "../pages/customer-search/customer-search";
export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, 'assets/i18n', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    Signup,
    Editaccount,
    Contact,
    Productdetails,
    Lang,
    Favorite,
    Cart,
    HistoryPage,
    Historydetails,
    Editproduct,
    ActiveOrdersPage,
    Createorder,
    Orderdetails,
    RepCustomerAdd,
    Location,
    CustomerSearch
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    Signup,
    Editaccount,
    Contact,
    Productdetails,
    Lang,
    Favorite,
    Cart,
    HistoryPage,
    Historydetails,
    Editproduct,
    ActiveOrdersPage,
    Createorder,
    Orderdetails,
    RepCustomerAdd,
    Location,
    CustomerSearch
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductService,
    MainService,
    CustomerService,
    FavoriteService,
    OrderService,
    NativeStorage,
    Geolocation,
    RepService
  ]
})
export class AppModule {}
