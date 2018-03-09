import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { BoxPlacePage } from './box-place/box-place';
import { BoxPage } from './box/box';

declare var google;

@IonicPage()
@Component({
  selector: 'page-three1',
  templateUrl: 'three1.html'
})
export class Three1Page {
  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('drop') dropContainer: ElementRef;
  
  map: any;
  drop: any;

  constructor(private navCtrl: NavController) {
  }

  ionViewDidLoad() {
    this.LoadMap();
  }

  LoadMap(){
    let latLng = new google.maps.LatLng(52.130889, -106.660233);
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
      title: "City hall",
      position: latLng
    });
    let infoWindow = new google.maps.InfoWindow({
      content: "<h4>Center Location</h4>"
    });
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

    // map-specific events
    google.maps.event.addListener(this.map, 'keyup', (event) => {
      this.showPanel(event);
    });

    // overlay specific events (since it only appears once drag starts)
    this.drop = new google.maps.Map(this.dropContainer.nativeElement, mapOptions);
    google.maps.event.addListener(this.drop, 'dragover', (event) => {
      this.showPanel(event);
    });
    google.maps.event.addListener(this.drop, 'drop', (event) => {
      this.handleDrop(event);
    });
    google.maps.event.addListener(this.drop, 'dragleave', (event) => {
      this.hidePanel(event);
    });
  }

  showPanel(e) {
    e.stopPropagation();
    e.preventDefault();
    document.getElementById('drop-container').style.display = 'block';
    return false;
  }

  hidePanel(e) {
    document.getElementById('drop-container').style.display = 'none';
  }

  handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    this.hidePanel(e);

    var files = e.dataTransfer.files;
    if (files.length) {
      // process file(s) being dropped
      // grab the file data from each file
      for (var i = 0, file; file = files[i]; i++) {
        var reader = new FileReader();
        reader.onload = ((theFile)=> {
          this.loadGeoJsonString(e.target.result);
        });
        reader.onerror = function(e) {
          console.error('reading failed');
        };
        reader.readAsText(file);
      }
    } else {
      // process non-file (e.g. text or html) content being dropped
      // grab the plain text version of the data
      var plainText = e.dataTransfer.getData('text/plain');
      if (plainText) {
        this.loadGeoJsonString(plainText);
      }
    }
    // prevent drag event from bubbling further
    return false;
  }


  ReadGeoJSON() {
    this.map = null;
    let latLng = new google.maps.LatLng(-28, 137);
    let mapOptions = {
      center: latLng,
      zoom: 4,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);    
    // NOTE: This uses cross-domain XHR, and may not work on older browsers.
    this.map.data.loadGeoJson('https://storage.googleapis.com/mapsdevsite/json/google.json');
    // Set the fill color to red when the feature is clicked.
    // Stroke weight remains 3.
    this.map.data.addListener('click', function(event) {
      this.map.data.overrideStyle(event.feature, {fillColor: 'red'});
    });
  }


  loadGeoJsonString(geoString) {
    let geojson = JSON.parse(geoString);
    this.map.data.addGeoJson(geojson);
    this.zoom(this.map);
  }
  zoom(map) {
    let bounds = new google.maps.LatLngBounds();
    map.data.forEach(function(feature) {
      this.processPoints(feature.getGeometry(), bounds.extend, bounds);
    });
    map.fitBounds(bounds);
  }
  processPoints(geometry, callback, thisArg) {
    if (geometry instanceof google.maps.LatLng) {
      callback.call(thisArg, geometry);
    } else if (geometry instanceof google.maps.Data.Point) {
      callback.call(thisArg, geometry.get());
    } else {
      geometry.getArray().forEach(function(g) {
        this.processPoints(g, callback, thisArg);
      });
    }
  }

  getPolyline(){
    let flightPlanCoordinates = [
                {lat: 52.144, lng: -106.691},
                {lat: 52.144, lng: -106.681},
                {lat: 52.134, lng: -106.681},
                {lat: 52.144, lng: -106.691}
    ];
    let flightPath = new google.maps.Polyline({
          path: flightPlanCoordinates,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
    });
    flightPath.setMap(this.map);
  }

  getDirection(){
    let latLng = new google.maps.LatLng(52.130889, -106.660233);
    let latLng2 = new google.maps.LatLng(52.130889, -106.650233);
    
    let directionsDisplay = new google.maps.DirectionsRenderer();
    let directionsService = new google.maps.DirectionsService();
    directionsDisplay.setMap(this.map);
    directionsDisplay.setPanel(document.getElementById('map'));

    let request = {
      origin: latLng, 
      destination: latLng2,
      travelMode: google.maps.DirectionsTravelMode.DRIVING
    };

    directionsService.route(request, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK) {     
        directionsDisplay.setDirections(response);
      }
    });
  }

  Rectangle(){
    let bounds = {
      north: 52.130889,
      south: 52.030889,
      east: -106.660233,
      west: -106.860233
    };
    // Define the rectangle and set its editable property to true.
    let rectangle = new google.maps.Rectangle({
      bounds: bounds,
      editable: true,
      draggable: true
    });
    rectangle.setMap(this.map);
    // Define an info window on the map.
    let infoWindow = new google.maps.InfoWindow();
    // Add an event listener on the rectangle.
    rectangle.addListener('bounds_changed', () => {
      let ne = rectangle.getBounds().getNorthEast();
      let sw = rectangle.getBounds().getSouthWest();
      let contentString = '<b>Rectangle moved.</b><br>' +
          'New north-east corner: ' + ne.lat() + ', ' + ne.lng() + '<br>' +
          'New south-west corner: ' + sw.lat() + ', ' + sw.lng();
  
      // Set the info window's content and position.
      infoWindow.setContent(contentString);
      infoWindow.setPosition(ne); 
      infoWindow.open(this.map);
    });
  }


  box() {
    this.navCtrl.push(BoxPage, null);
  }

  boxPlace() {
    this.navCtrl.push(BoxPlacePage, null);
  }

}
