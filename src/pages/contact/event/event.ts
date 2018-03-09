import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { Event } from '../../../models/event.model';

declare var google;

@IonicPage()
@Component({
  selector: 'page-event',
  templateUrl: 'event.html'
})
export class EventPage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  item: Event;

  constructor(public navParams: NavParams) {
    this.item = navParams.get('item');
  }

  ionViewDidLoad() {
    this.LoadMap();
  }

  LoadMap(){
    let dataString = this.item.place;
    let data = dataString.split(',');
    let placeName = 'City hall';
    if ( data[0] !== '' ) {
      placeName = data[0];
    }
    let latData = 52.130889;
    let lngData = -106.660233;
    if ( data[1] !== '' && data[2] !== '') {
      latData = Number(data[1]);
      lngData = Number(data[2]);
    }
    let latLng = new google.maps.LatLng(latData, lngData);
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
      title: placeName,
      position: latLng
    });
    let infoWindow = new google.maps.InfoWindow({
      content: "<h4>Center Location</h4>"
    });
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

  }
}
