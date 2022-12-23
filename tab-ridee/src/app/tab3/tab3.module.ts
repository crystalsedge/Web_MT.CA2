import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';

///
import {AndroidPermissions} from '@ionic-native/android-permissions/ngx/index';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { IonicModule } from '@ionic/angular';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { Tab3PageRoutingModule } from './tab3-routing.module';

@NgModule({
   imports: [
    IonicModule,
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    Tab3PageRoutingModule
  ],
providers:[ AndroidPermissions, LocationAccuracy, Geolocation,

],
declarations: [Tab3Page],
})
export class Tab3PageModule {}
