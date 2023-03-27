import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AlunoListComponent } from './components/alunos/aluno-list/aluno-list.component';
import { AlunoFormComponent } from './components/alunos/aluno-form/aluno-form.component';
import { ProfessorFormComponent } from './components/professores/professor-form/professor-form.component';
import { ProfessorListComponent } from './components/professores/professor-list/professor-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AlunoListComponent,
    AlunoFormComponent,
    ProfessorFormComponent,
    ProfessorListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
