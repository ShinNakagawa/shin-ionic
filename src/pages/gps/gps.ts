import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Observable, Subscription } from 'rxjs/Rx';
import {LocationTrackerProvider} from "../../providers/location-tracker/location-tracker";
import { AngularFireDatabase } from 'angularfire2/database';
import moment from 'moment';
import { TrackingPage } from '../tracking/tracking';

declare var google;

@IonicPage()
@Component({
  selector: 'page-gps',
  templateUrl: 'gps.html',
})
export class GpsPage {
  ticks = 0;
  timer;
  sub: Subscription;
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  linePath: any;
  gps: Array<{lat: number, lng: number}>;

  autoSave = false;
  interval = 5;
  lineColor = "#FF0000";
  trackingPath = 'shin/tracking';
  trackings: Observable<any[]>;

  constructor(private modalCtrl: ModalController,
    private navCtrl: NavController,
    public locationTracker: LocationTrackerProvider,
    private db: AngularFireDatabase) {
    this.trackings = this.db.list(`${this.trackingPath}/`).valueChanges();
  }

  public start() {
    this.locationTracker.startTracking();
  }

  public stop() {
    alert('stop tracking');
    this.stopTimer();
    this.locationTracker.stopTracking();
    const data = {
      name: 'Name:' + moment(new Date()).format('MMM DD YYYY'),
      date: moment(new Date()).format('MMM DD YYYY'),
      gps: this.gps,
    };
    let key = this.db.list(`${this.trackingPath}/`).push(data).key;
    const dataKey = {
      id: key
    };
    this.db.object(`${this.trackingPath}/${key}`).update(dataKey)
      .catch(error => console.log(error));
  }

  tickerFunc(tick){
    console.log("tickerFunc tick=", tick);
    this.ticks = tick;
    this.gps.push({lat: this.locationTracker.lat, lng: this.locationTracker.lng});
    this.updatePolyline(this.locationTracker.lat, this.locationTracker.lng);
  }

  startTimer() {
    console.log("start timer");
    this.gps = [];
    //5 every second (5000ms), starting after 0.5(500ms) seconds
    this.timer = Observable.timer(500, this.interval * 1000);
    // subscribing to a observable returns a subscription object
    this.sub = this.timer.subscribe(t => this.tickerFunc(t));

    this.gps.push({lat: this.locationTracker.lat, lng: this.locationTracker.lng});
    this.LoadMap(this.locationTracker.lat, this.locationTracker.lng);
    this.setPolyline();
  };

  stopTimer() {
    console.log("stop timer");
    this.sub.unsubscribe();
  }

  ionViewDidLoad(){
    this.LoadMap(52.130889, -106.660233);
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
      title: "Current Position",
      position: latLng
    });
    let infoWindow = new google.maps.InfoWindow({
      content: "<h4>Center Location</h4>"
    });
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  } 

  setPolyline(){
    //console.log(this.gps);
    if ( this.gps.length > 0 ) {
      let lineSymbol = {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 8,
        strokeColor: '#393'
      };
      this.linePath = new google.maps.Polyline({
        path: this.gps,
        geodesic: true,
        strokeColor: this.lineColor,
        strokeOpacity: 1.0,
        strokeWeight: 2,
        icons: [{
          icon: lineSymbol,
          offset: '100%'
        }],
      });
      this.linePath.setMap(this.map);
    }
  }

  updatePolyline(lat: number, lng: number) {
    let path = this.linePath.getPath();
    let newCord = new google.maps.LatLng(lat, lng);
    path.push(newCord);
    this.linePath.setPath(path);
  }

  trackTapped(event, tracking) {
    this.navCtrl.push(TrackingPage, {tracking: tracking, lineColor: this.lineColor});
  }

  editTrack(tracking) {
    let editTrackModel = this.modalCtrl.create('EditTrackPage', {tracking: tracking}, { cssClass: 'inset-modal' });
    editTrackModel.onDidDismiss(data => {
      if (data) {
        console.log("test1111");
      }
    });
    editTrackModel.present();
  }

  deleteTrack(tracking) {
    this.db.object(`${this.trackingPath}/${tracking.id}`).remove()
      .catch(error => console.log(error));
  }

}
