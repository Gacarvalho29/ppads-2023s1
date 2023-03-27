import { Component, OnInit } from '@angular/core';
import { ProfessorDto } from 'src/app/dto/professor.dto';
import { professorService } from 'src/app/services/professor.service';

@Component({
  selector: 'app-professor-list',
  templateUrl: './professor-list.component.html',
  styleUrls: ['./professor-list.component.css']
})
export class ProfessorListComponent implements OnInit{

  professors: ProfessorDto[] = [];

  constructor(private professorService: professorService){}

  getProfessors(){
    this.professorService.getProfessors()
    .subscribe({
      next: (v) => {
        this.professors = v
      },
      error: (e) => console.log(e),
      complete: () => console.log('complete')
    })
  }

  deleteAluno(cod_aluno: string){
    this.professorService.deleteProfessor(cod_aluno)
      .subscribe({
      next: (v) => {
        this.getProfessors()
      },
      error: (e) => console.log(e),
      complete: () => console.log('complete')
    })
  }

  ngOnInit(){
    this.getProfessors()
  }
}
