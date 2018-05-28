import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { APP_ROUTING } from './app.routes';


import { AppComponent } from './app.component';
import { VinylsComponent } from './components/vinyls/vinyls.component';
import { AddVinyilComponent } from './components/vinyls/add-vinyil.component';

@NgModule({
  declarations: [
    AppComponent,
    VinylsComponent,
    AddVinyilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
