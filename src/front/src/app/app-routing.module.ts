import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AlunoListComponent } from './components/aluno-list/aluno-list.component';
import { AlunoFormComponent } from "./components/aluno-form/aluno-form.component";

const routes: Routes = [
  {
    //find All
    path: '',
    component: AlunoListComponent
  },
  {
    //Find All
    path: 'aluno',
    component: AlunoListComponent
  },
  {
    //Create
    path: 'aluno/create',
    component: AlunoFormComponent
  },
  {
    //Patch
    path: 'aluno/edit/:id',
    component: AlunoFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}