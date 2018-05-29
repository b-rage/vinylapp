import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { APP_ROUTING } from './app.routes';

// services

import { VinylsService } from './services/vinyls.service';


import { AppComponent } from './app.component';
import { VinylsComponent } from './components/vinyls/vinyls.component';
import { AddVinyilComponent } from './components/vinyls/add-vinyil.component';
import { KeysPipe } from './pipes/keys.pipe';

@NgModule({
  declarations: [
    AppComponent,
    VinylsComponent,
    AddVinyilComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    VinylsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
