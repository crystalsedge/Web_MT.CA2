import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
///
import {AndroidPermissions} from '@ionic-native/android-permissions/ngx/index';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { RouteReuseStrategy } from '@angular/router';
import { Tab3PageRoutingModule } from './tab3-routing.module';

@NgModule({
  entryComponents: [],
 
  imports: [
    IonicModule.forRoot(),
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab3PageRoutingModule
  ],
providers:[
AndroidPermissions, LocationAccuracy, Geolocation,
{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
],
declarations: [Tab3Page],
})
export class Tab3PageModule {}
