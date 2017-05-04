import {Component, ElementRef, ViewChild} from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
import {Geolocation} from "@ionic-native/geolocation";
import {CustomerService} from "../../providers/customer-service";
import {TranslateService} from "ng2-translate";
/**
 * Generated class for the Location page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
declare var google;

@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class Location {
  @ViewChild('map') mapElement: ElementRef;
  public map: any;
  public markers = [];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private geolocation: Geolocation,
              private customerService : CustomerService,
              private toastCtrl : ToastController,
              private translateService : TranslateService) {
  }

  ionViewDidLoad(){
    this.loadMap();
  }

  loadMap() {
    this.geolocation.getCurrentPosition().then((resp) => {
      let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);

      let mapOptions = {
        center: latLng,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      google.maps.event.addListener(this.map, 'click', (event) => {
        this.setMapOnAll(null);
        var location  = event.latLng;
        this.addMarker(location);
        this.sendCustomerLocation(location);
      });
      this.addMarker(this.map.getCenter());
    }).catch((error) => {
      console.log('Error getting location', error);
    });


  }
  sendCustomerLocation(location)
  {
    let inputs = {
      customer_id : this.customerService.customer.id ,
      lat : location.lat(),
      lng : location.lng()
    };
    this.customerService.customerLocationSend(inputs).subscribe(()=>{
      this.translateService.get('Done').subscribe(
        value => {
          // value is our translated string
          this.presentToast(value);
        }
      );
    });
  }
  addMarker(LatLng){
    let marker  = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: LatLng
    });
    let content = "<h4>Delivery Location!</h4>";
    //this.addInfoWindow(marker, content);
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
    infoWindow.open(this.map,marker);
    this.markers.push(marker);
  }
  // Sets the map on all markers in the array.
  setMapOnAll(map) {
    for (var i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(map);
    }
  }
  presentToast(txt:string) {
    let toast = this.toastCtrl.create({
      message: txt,
      duration: 3000
    });
    toast.present();
  }
}
