import { Component, OnInit } from '@angular/core';
import { VinylsService } from '../../services/vinyls.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';



@Component({
  selector: 'app-vinyls',
  templateUrl: './vinyls.component.html',
  styleUrls: ['./vinyls.component.css']
})
export class VinylsComponent implements OnInit {

  vinyls: any[] = [];

  constructor( private _vinylsService: VinylsService ) {
    this._vinylsService.getVinyls()
        .subscribe( data => {
          this.vinyls = data;
          console.log(data);
        });
  }

  ngOnInit() {
  }

  deleteVinyl( key$: string ) {
    this._vinylsService.deleteVinyl(key$)
        .subscribe( res => {
          if ( res ) {
            console.error(res);
          } else {
            delete this.vinyls[key$];
          }
        });
  }

}
