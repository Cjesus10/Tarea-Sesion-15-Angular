import { Component } from '@angular/core';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component {
  nom="";
  ape="";
  car="";
  datos= new Array()
  insertarDatos(){
    this.datos.push({nombre: this.nom, apellido: this.ape, carrera: this.car});
    this.nom="";
    this.ape="";
    this.car="";
  }
  confi = true;
  confirmar(){
    this.confi = confirm("Dale click en Aceptar para eliminar");
  }
  eliminarDatos(indice:number){
    if(this.confi == true){
      this.datos.splice(indice, 1);
    }
  }
  disab= true;
  habilitar(){
    if(this.nom=="" || this.ape=="" || this.car==""){
      this.disab = true;
    }
    else{
      this.disab=false;
    }
  }
}
