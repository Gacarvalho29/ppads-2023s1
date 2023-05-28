import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlunoListComponent } from './components/alunos/aluno-list/aluno-list.component';
import { AlunoFormComponent } from './components/alunos/aluno-form/aluno-form.component';

import { ProfessorListComponent } from './components/professores/professor-list/professor-list.component';
import { ProfessorFormComponent } from './components/professores/professor-form/professor-form.component';

import { DisciplinaListComponent } from './components/disciplinas/disciplina-list/disciplina-list.component';
import { DisciplinaFormComponent } from './components/disciplinas/disciplina-form/disciplina-form.component';

import { TurmaListComponent } from './components/turmas/turma-list/turma-list.component';
import { TurmaFormComponent } from './components/turmas/turma-form/turma-form.component';

import { PresencaListComponent } from './components/presencas/presenca-list/presenca-list.component';

import { HomeComponent } from './components/home/home.component';
import { CoordMenuComponent } from './components/coord-menu/coord-menu.component';
import { ProfMenuComponent } from './components/prof-menu/prof-menu.component';



const routes: Routes = [
  {
    //trocar para login futuramente
    path: '',
    component: HomeComponent
  },
  //Menu coordenador
  {
    path:'coordmenu',
    component: CoordMenuComponent
  },
  {
    path: 'profmenu',
    component: ProfMenuComponent
  },

  //ALUNO
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

  //PROFESSOR 
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

  //DISCIPLINA
  {
    path: 'disciplina',
    component: DisciplinaListComponent
  },
  {
    path: 'disciplina/create',
    component: DisciplinaFormComponent
  },
  {
    path: 'disciplina/edit/:id',
    component: DisciplinaFormComponent
  },

  //TURMAS
  {
    path: 'turma',
    component: TurmaListComponent
  },
  {
    path: 'turma/create',
    component: TurmaFormComponent
  },
  {
    path: 'turma/edit/:id',
    component: TurmaFormComponent
  },

  //PRESENCAS
  {
    path: 'presenca',
    component: PresencaListComponent
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
