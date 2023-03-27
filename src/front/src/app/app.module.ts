import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AlunoFormComponent } from './components/aluno-form/aluno-form.component';
import { AlunoListComponent } from './components/aluno-list/aluno-list.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AlunoFormComponent,
    AlunoListComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
