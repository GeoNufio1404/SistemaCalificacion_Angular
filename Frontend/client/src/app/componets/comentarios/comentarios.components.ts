import { Component } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-comantarios',
  templateUrl: './comantarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {
  names: string[];

  constructor(private location:Location) { }

  ngOnInit(): void {
  }

  goBack():void{
    this.location.back();
  }
  
}