import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { BoxPlacePage } from '../box-place/box-place';
import { BoxPage } from '../box/box';
import { MapPage } from '../map/map';

@IonicPage()
@Component({
  selector: 'page-three1',
  templateUrl: 'three1.html'
})
export class Three1Page {

  constructor(private navCtrl: NavController) {
  }

  goToBox() {
    this.navCtrl.push(BoxPage, null);
  }

  goToBoxPlace() {
    this.navCtrl.push(BoxPlacePage, null);
  }

  goToMap() {
    this.navCtrl.push(MapPage, null);
  }

}
