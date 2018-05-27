import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { VinylsComponent } from './components/vinyls/vinyls.component';
import { AddVinyilComponent } from './components/add-vinyil/add-vinyil.component';

@NgModule({
  declarations: [
    AppComponent,
    VinylsComponent,
    AddVinyilComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
