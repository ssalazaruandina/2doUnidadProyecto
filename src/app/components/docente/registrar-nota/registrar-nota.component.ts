import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/interfaces/alumno';
import { alumnos } from 'src/app/interfaces/baseDatos';

@Component({
  selector: 'app-registrar-nota',
  templateUrl: './registrar-nota.component.html',
  styleUrls: ['./registrar-nota.component.css']
})
export class RegistrarNotaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public lista:Alumno[] = alumnos;
  public parcial1:number = 0;
  public parcial2:number = 0;
  public parcial3:number = 0;
  public total: number = 0;

  onPromedio(): number{
    this.total = 0;
    this.total =(this.parcial1+this.parcial2+this.parcial3)/3
    console.log("El promedio es: "+ this.total);
    return this.total;
  }

  //Guardar posicion
  public posicion: number = -1;
  guardarPos(i: number){
    this.total = 0;
    this.posicion = i;
  }
  
  //Guardar notas
  guardarNota(){
    this.parcial1 = 0;
    this.parcial2 = 0;
    this.parcial3 = 0;
    this.lista[this.posicion].nota=this.total;
    console.log("Se guardó la nota");
  }

  onConfirmar(){
    alert("Se publicaron las notas");
  }

  //Buscar alumno
  public validar:boolean = false;
  public alumnoBuscado: string = "";
  public alumnoBuscadoTotal: Alumno = {
    codigo: "",
    usuario:"",
    dni: "",
    nombre: "",
    apellido: "",
    contrasenia: "",
    nota: 0
}
  public numro: number = -1;

  onBuscar(){
    for(let i=0;i<this.lista.length;i++){
      if(this.lista[i].codigo==this.alumnoBuscado){
        console.log("El alumno es " + this.lista[i].nombre)
        this.validar=true;
        this.alumnoBuscadoTotal=this.lista[i];
        this.numro = i;
        break;
      }else{
        this.validar=false;
      }
    }
  }

}



}