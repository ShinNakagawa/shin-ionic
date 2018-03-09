import { BoxPage } from './box';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlashCardComponent } from '../../../components/flash-card/flash-card';

@NgModule({
  declarations: [
    BoxPage,
  ],
  imports: [
    IonicPageModule.forChild(BoxPage),
    FlashCardComponent
  ],
  exports: [
    BoxPage
  ]
})

export class BoxPageModule { }
