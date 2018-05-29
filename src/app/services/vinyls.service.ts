import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Vinyl } from '../interfaces/vinyl.interface';
import { map } from 'rxjs-compat/operator/map';
import 'rxjs-compat';




@Injectable({
  providedIn: 'root'
})
export class VinylsService {

  vinylsURL = 'https://vinylapp-d6c72.firebaseio.com/vinyls.json';
  vinylURL = 'https://vinylapp-d6c72.firebaseio.com/vinyls/';

  constructor( private http: Http) { }

  newVinyl ( vinyl: Vinyl) {

    const body = JSON.stringify( vinyl );
    const headers = new Headers({
      'Content-type': 'application/json'
    });

    return this.http.post( this.vinylsURL, body, { headers } )
              .map(res => {
                console.log(res.json());
                return res.json();
              });
  }

  updateVinyl ( vinyl: Vinyl, key$) {

    const body = JSON.stringify( vinyl );
    const headers = new Headers({
      'Content-type': 'application/json'
    });

    const url = `${ this.vinylURL }/${ key$ }.json`;

    return this.http.put( url, body, { headers } )
              .map(res => {
                console.log(res.json());
                return res.json();
              });
  }

  getVinyl ( key$: string ) {

    const url = `${ this.vinylURL }/${ key$ }.json`;
    return this.http.get( url )
      .map( res => res.json());
  }

  getVinyls () {
    return this.http.get( this.vinylsURL )
      .map( res => res.json());
  }
}
