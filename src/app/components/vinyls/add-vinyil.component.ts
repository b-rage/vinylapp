import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Vinyl } from '../../interfaces/vinyl.interface';
import { VinylsService } from '../../services/vinyls.service';




@Component({
  selector: 'app-add-vinyil',
  templateUrl: './add-vinyil.component.html',
  styleUrls: ['./add-vinyil.component.css']
})

export class AddVinyilComponent implements OnInit {

  vinyl: Vinyl = {
    artist: '',
    title: '',
    year: 0
  };

  nuevo = false;
  id: string;

  constructor( private _vinylsService: VinylsService,
               private router: Router,
               private route: ActivatedRoute ) {
    this.route.params
        .subscribe( parametros => {
          console.log(parametros);
          this.id = parametros['id'];
          if ( this.id !== 'nuevo') {

            this._vinylsService.getVinyl( this.id )
                .subscribe( vinyl => this.vinyl = vinyl );
          }
        });

  }

  ngOnInit() {
  }

  guardar() {
    console.log(this.vinyl);

    if ( this.id === 'nuevo' ) {
      // insertando
      this._vinylsService.newVinyl( this.vinyl )
          .subscribe( data => {
              this.router.navigate(['/add-vinyil', data.name]);
          },
          error => console.error(error));
    } else {
      // actualizando
      this._vinylsService.updateVinyl( this.vinyl, this.id )
          .subscribe( data => {
              console.log(data);
          },
          error => console.error(error));
       }

  }

}
