import { Component, OnInit } from '@angular/core';
import { TurmaService } from 'src/app/services/turma.service';
import { AlunoService } from 'src/app/services/aluno.service';
import { TurmaDTO } from 'src/app/dto/turma.dto';
import { AlunoDto } from 'src/app/dto/aluno.dto';

@Component({
  selector: 'app-turma-list',
  templateUrl: './turma-list.component.html',
  styleUrls: ['./turma-list.component.css']
})
export class TurmaListComponent implements OnInit{

  turmas: TurmaDTO[] = [];

  constructor(private turmaService: TurmaService, private alunoService: AlunoService){}

  getTurmas(){
    this.turmaService.getTurmas()
    .subscribe({
      next: (v) => {
        this.turmas = v
      },
      error: (e) => console.log(e),
      complete: () => console.log('complete')
    })
  }

  deleteTurma(id: string){
    this.turmaService.deleteTurma(id)
      .subscribe({
      next: (v) => {
        this.getTurmas()
      },
      error: (e) => console.log(e),
      complete: () => console.log('complete')
    })
  }

  ngOnInit(){
    this.getTurmas()
  }
}


