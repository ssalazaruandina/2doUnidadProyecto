import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Alumno } from 'src/app/interfaces/alumno';
import { alumnos } from 'src/app/interfaces/baseDatos';

@Component({
  selector: 'app-registrar-alumno',
  templateUrl: './registrar-alumno.component.html',
  styleUrls: ['./registrar-alumno.component.css']
})
export class RegistrarAlumnoComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
  alumnos: Alumno[] = alumnos;
  //public alumnos: Alumno[] = [];

  AlumnoVacio(): Alumno {
    return {
      codigoA:"",
      usuario:"",
      contrasenia:"",
      nombre: "",
      apellidoP: "",
      apellidoM:"",
      dni:"",
      sexo:"",
      fechaNacimiento:"",
      direccion:""
      }
  };
  alumnoAux = this.AlumnoVacio();
  registrar():void{
    this.alumnos.push(this.alumnoAux);
    this.alumnoAux=this.AlumnoVacio();
  }
  // onDatos(): void {
  //   if (this.posicion = -1){
  //   this.alumnos.push(this.alumno);
  //   this.alumno = this.AlumnoVacio();
    
  //   }else{ 
  //     let seleccion: Alumno = this.alumnos[this.posicion];

  //     seleccion.codigoA = this.alumno.codigoA;
  //     seleccion.nombre = this.alumno.nombre;
  //     seleccion.apellidoM = this.alumno.apellidoM;
  //     seleccion.apellidoP = this.alumno.apellidoP;
  //     seleccion.direccion = this.alumno.direccion;

  //     this.posicion =-1;
  //     this.alumno = this.AlumnoVacio();
  //   }
  // }
  // onChange(event: Event):void{
  //   const elemento = event.target as HTMLInputElement;
  //   this.alumno.nombre = elemento.value;
  // }
  // public posicion:number = -1;

  // onEliminar(i: number): void {
  //   this.alumnos.splice(i, 1);
  // }
  // onModificar(i: number): void{
  //   let selecion: Alumno = this.alumnos[i];
    
  //   this.alumno.nombre = selecion.nombre;
  //   this.alumno.apellidoM = selecion.apellidoM;
  //   this.alumno.apellidoP = selecion.apellidoP;
  //   this.alumno.codigoA = selecion.codigoA;


  //   this.posicion = i;
  // }
}
