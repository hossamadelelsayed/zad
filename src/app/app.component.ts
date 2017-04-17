import {Component, ViewChild} from '@angular/core';
import {Platform, NavController, Nav} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Lang } from '../pages/lang/lang';
import { HomePage } from '../pages/home/home';
import {Signup} from "../pages/signup/signup";
import {LoginPage} from "../pages/login/login";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = Lang;
  public pages : Array<{title: string, icon: string, component: any}>;
  constructor(platform: Platform
    , statusBar: StatusBar
    , splashScreen: SplashScreen
    /*, public navCtrl : NavController*/
    ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });


    this.pages = [
      { title: 'Home', icon: 'home',component: HomePage},
      { title: 'SignUp', icon: 'home',component: Signup },
      { title: 'Login', icon: 'home',component: LoginPage},
      { title: 'Lang', icon: 'home',component: Lang },

    ]
  }
  openPage(p:any){
    this.nav.push(p.component);
  }


}

