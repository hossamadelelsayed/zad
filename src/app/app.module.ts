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
    Favorite
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
