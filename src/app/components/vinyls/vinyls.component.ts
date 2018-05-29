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
          console.log(data);
          this.vinyls = data;
        });
  }

  ngOnInit() {
  }

}
