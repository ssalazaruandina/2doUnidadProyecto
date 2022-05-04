import { Component, OnInit } from '@angular/core';
import { Docente } from '../../../interfaces/docente'
import { docentes } from '../../../interfaces/baseDatos'


@Component({
  selector: 'app-registrar-docente',
  templateUrl: './registrar-docente.component.html',
  styleUrls: ['./registrar-docente.component.css']
})
export class RegistrarDocenteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  listaDocentes:Docente[] = docentes;
}