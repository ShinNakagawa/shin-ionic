import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ChartPage } from '../pages/chart/chart';
import { EventPage } from '../pages/contact/event/event';
import { BoxPage } from '../pages/three1/box/box';
import { BoxPlacePage } from '../pages/three1/box-place/box-place';
import { Three1Page } from '../pages/three1/three1';
import { StoragePage } from '../pages/storage/storage';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
export const firebaseConfig = {  
  apiKey: "AIzaSyCEo24FMxTyU8IemGPVY8-XRXuO_ZkZVn4",
  authDomain: "base-gallery.firebaseapp.com",
  databaseURL: "https://base-gallery.firebaseio.com",
  projectId: "base-gallery",
  storageBucket: "base-gallery.appspot.com",
  messagingSenderId: "103599334911"
};
import { AuthProvider } from '../providers/auth/auth';
//youtube
import { HttpModule } from '@angular/http';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { YtProvider } from '../providers/yt/yt';
//pipes
import { MomentPipe } from '../pipes/moment/moment';
//components
import { FlashCardComponent } from '../components/flash-card/flash-card';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    StoragePage,
    Three1Page,
    BoxPage,
    BoxPlacePage,
    MomentPipe,
    FlashCardComponent,
    EventPage,
    ChartPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp)
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    StoragePage,
    Three1Page,
    BoxPage,
    BoxPlacePage,
    EventPage,
    TabsPage,
    ChartPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    YoutubeVideoPlayer,
    AuthProvider,
    YtProvider
  ],
  exports: [
    MomentPipe,
    FlashCardComponent
  ]
})
export class AppModule {}
