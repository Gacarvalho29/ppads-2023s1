import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlunoListComponent } from './components/alunos/aluno-list/aluno-list.component';
import { AlunoFormComponent } from './components/alunos/aluno-form/aluno-form.component';

import { ProfessorListComponent } from './components/professores/professor-list/professor-list.component';
import { ProfessorFormComponent } from './components/professores/professor-form/professor-form.component';

const routes: Routes = [
  {
    //trocar para login futuramente
    path: '',
    component: AlunoListComponent
  },
  {
    path: 'aluno',
    component: AlunoListComponent
  },
  {
    path: 'aluno/create',
    component: AlunoFormComponent
  },
  {
    path: 'aluno/edit/:id',
    component: AlunoFormComponent
  },
  {
    path: 'professor',
    component: ProfessorListComponent
  },
  {
    path: 'professor/create',
    component: ProfessorFormComponent
  },
  {
    path: 'professor/edit/:id',
    component: ProfessorFormComponent
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
