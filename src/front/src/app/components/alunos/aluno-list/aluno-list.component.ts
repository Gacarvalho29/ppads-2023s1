import { Component, OnInit } from '@angular/core';
import { AlunoService } from 'src/app/services/aluno.service';
import { AlunoDto } from 'src/app/dto/aluno.dto';
// import { MatSnackBar } from '@angular/material/snack-bar'

@Component({
  selector: 'app-aluno-list',
  templateUrl: './aluno-list.component.html',
  styleUrls: ['./aluno-list.component.css']
})
export class AlunoListComponent implements OnInit{

  alunos: AlunoDto[] = [];

  constructor(private alunoService: AlunoService/** , private snackBar: MatSnackBar*/){}

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

  addPresenca(cod_aluno: string, nome_aluno: string) {
    this.alunoService.addPresenca(cod_aluno, nome_aluno)
    .subscribe({
      next: (v) => {
        this.getAlunos()
      },
      // error: (e) => console.log(e),
      error: (e) => window.alert('Este aluno já ganhou falta na data de hoje'),
      complete: () => window.alert('Presença Adicionada com sucesso!')
    })
  }
  
  addFalta(cod_aluno: string, nome_aluno: string) {
    this.alunoService.addFalta(cod_aluno, nome_aluno)
    .subscribe({
      next: (v) => {
        this.getAlunos()
      },
      error: (e) => window.alert('Este aluno já ganhou falta na data de hoje'),
      complete: () => window.alert('Falta Adicionada com sucesso!')
    })
  }
  

  ngOnInit(){
    this.getAlunos()
  }
}