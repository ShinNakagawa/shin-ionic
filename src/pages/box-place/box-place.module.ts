import { BoxPlacePage } from './box-place';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    BoxPlacePage,
  ],
  imports: [
    IonicPageModule.forChild(BoxPlacePage),
  ],
  exports: [
    BoxPlacePage
  ]
})

export class BoxPlacePageModule { }
