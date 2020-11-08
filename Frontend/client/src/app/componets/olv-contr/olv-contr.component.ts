import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-olv-contr',
  templateUrl: './olv-contr.component.html',
  styleUrls: ['./olv-contr.component.css']
})
export class OlvContrComponent implements OnInit {
  user={ID:"",email:""}
  constructor() { }

  ngOnInit(): void {
  }
  ContrOlvidada(){
    console.log(this.user)
  }

}
