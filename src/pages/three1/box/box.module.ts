import { BoxPage } from './box';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    BoxPage,
  ],
  imports: [
    IonicPageModule.forChild(BoxPage),
  ],
  exports: [
    BoxPage
  ]
})

export class BoxPageModule { }
