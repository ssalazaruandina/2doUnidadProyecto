import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrarAsistenciaComponent } from './components/docente/registrar-asistencia/registrar-asistencia.component';
import { RegistrarNotaComponent } from './components/docente/registrar-nota/registrar-nota.component';
import { RegistrarAlumnoComponent } from './components/administrador/registrar-alumno/registrar-alumno.component';
import { RegistrarCursoComponent } from './components/administrador/registrar-curso/registrar-curso.component';
import { RegistrarDocenteComponent } from './components/administrador/registrar-docente/registrar-docente.component';
import { PerfilComponent } from './components/alumnos/perfil/perfil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LoginComponent,
    RegistrarAsistenciaComponent,
    RegistrarNotaComponent,
    RegistrarAlumnoComponent,
    RegistrarCursoComponent,
    RegistrarDocenteComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
