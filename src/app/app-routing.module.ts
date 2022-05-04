import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarDocenteComponent } from './components/administrador/registrar-docente/registrar-docente.component';
import { RegistrarAsistenciaComponent } from './components/docente/registrar-asistencia/registrar-asistencia.component';
import { RegistrarNotaComponent } from './components/docente/registrar-nota/registrar-nota.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent} from './components/alumnos/perfil/perfil.component';
import { RegistrarAlumnoComponent } from './components/administrador/registrar-alumno/registrar-alumno.component';
import { RegistrarCursoComponent } from './components/administrador/registrar-curso/registrar-curso.component';


const routes: Routes = [
  {
    path: '', redirectTo:'/login', pathMatch:'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'perfil', component: PerfilComponent
  },
  {
    path: 'registrar-asistencia', component: RegistrarAsistenciaComponent
  },
  {
    path: 'registrar-docente', component: RegistrarDocenteComponent
  },
  {
    path: 'registrar-nota', component: RegistrarNotaComponent
  },
  {
    path: 'registrar-alumno', component: RegistrarAlumnoComponent
  },
  {
    path: 'registrar-curso',component: RegistrarCursoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }