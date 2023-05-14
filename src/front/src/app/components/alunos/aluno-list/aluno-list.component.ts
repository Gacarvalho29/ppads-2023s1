import { Component, OnInit } from '@angular/core';
import { AlunoService } from 'src/app/services/aluno.service';
import { AlunoDto } from 'src/app/dto/aluno.dto';

@Component({
  selector: 'app-aluno-list',
  templateUrl: './aluno-list.component.html',
  styleUrls: ['./aluno-list.component.css']
})
export class AlunoListComponent implements OnInit{

  alunos: AlunoDto[] = [];

  constructor(private alunoService: AlunoService){}

  getAlunos(){
    this.alunoService.getAlunos()
    .subscribe({
      next: (v) => {
        this.alunos = v
      },
      error: (e) => console.log(e),
      complete: () => console.log('complete')
    })
  }

  deleteAluno(cod_aluno: string){
    this.alunoService.deleteAluno(cod_aluno)
      .subscribe({
      next: (v) => {
        this.getAlunos()
      },
      error: (e) => console.log(e),
      complete: () => window.alert("Aluno Deletado")
    })
  }

  addPresenca(cod_aluno: string) {
    this.alunoService.addPresenca(cod_aluno)
    .subscribe({
      next: (v) => {
        this.getAlunos()
      },
      error: (e) => console.log(e),
      complete: () => console.log('complete')
    })
  }
  
  addFalta(cod_aluno: string) {
    this.alunoService.addFalta(cod_aluno)
    .subscribe({
      next: (v) => {
        this.getAlunos()
      },
      error: (e) => console.log(e),
      complete: () => console.log('complete')
    })
  }
  

  ngOnInit(){
    this.getAlunos()
  }
}