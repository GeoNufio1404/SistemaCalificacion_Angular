import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-olv-contr',
  templateUrl: './olv-contr.component.html',
  styleUrls: ['./olv-contr.component.css']
})
export class OlvContrComponent implements OnInit {
  user={ID:"",email:""}
  constructor(private authServices: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }
  ContrOlvidada(){
    console.log(this.user)
    this.authServices.ContrOlvidada(this.user)
    .subscribe(
      res => {console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(["/Inicio"]);//Se debe crear el componente de inicio
      }
      ,
      err => {console.log(err)}
    )
  }

}
