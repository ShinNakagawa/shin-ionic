import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { Tracking } from '../../models/tracking.model';

declare var google;

@IonicPage()
@Component({
  selector: 'page-tracking',
  templateUrl: 'tracking.html',
})
export class TrackingPage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  tracking: Tracking;
  lineColor: string;

  constructor(public navParams: NavParams) {
    this.tracking = navParams.get('tracking');
    this.lineColor = navParams.get('lineColor');
  }

  ionViewDidLoad(){
    this.LoadMap(this.tracking.gps[0].lat, this.tracking.gps[0].lng);
    this.setPolyline();
  }

  LoadMap(lat: number, lng: number){
    let latLng = new google.maps.LatLng(lat, lng);
    let mapOptions = {
      center: latLng,
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);  
    //add marker
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      title: "Start Position",
      position: latLng
    });
    let infoWindow = new google.maps.InfoWindow({
      content: "<h4>Start Location</h4>"
    });
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  } 

  setPolyline(){
    //console.log(this.tracking.gps);
    if ( this.tracking.gps.length > 0 ) {
      let lineSymbol = {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 8,
        strokeColor: '#393'
      };
      let linePath = new google.maps.Polyline({
        path: this.tracking.gps,
        geodesic: true,
        strokeColor: this.lineColor,
        strokeOpacity: 1.0,
        strokeWeight: 2,
        icons: [{
          icon: lineSymbol,
          offset: '100%'
        }],
      });
      linePath.setMap(this.map);
    }
  }

}
