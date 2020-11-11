import { Component } from '@angular/core';

@Component({
  selector: 'app-pantalla-inicial',
  templateUrl: './pantalla-inicial.component.html',
  styleUrls: ['./pantalla-inicial.component.css']
})
export class PantallaInicialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  cargarMensaje() {}

  function Borar(id){
  	document.getElementById(id).style.display = "none";
  }

  function verificaRadios(form){
        marcado=false;
        for ( var i = 0; i < form.filtropublicacion.length; i++ ) {
            if (form.filtropublicacion[i].checked)
                marcado = true;
        }

        if(!marcado){
            alert("Por favor, debe elegir una opción!");
            return false;
        }
        else{
            return true;
        }
        <?php
        if (isset($_POST['submit'])) {
		      if (isset($_POST['filtropublicacion']))
		        echo 'Has seleccionado el dia '.$_POST['filtropublicacion'];
		      else
		        echo 'Debes seleccionar una opción.';
		    }
		    ?>
  }
}