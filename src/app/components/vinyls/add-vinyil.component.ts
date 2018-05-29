import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Vinyl } from '../../interfaces/vinyl.interface';



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

  constructor() { }

  ngOnInit() {
  }

  guardar() {
    console.log(this.vinyl);
  }

}
