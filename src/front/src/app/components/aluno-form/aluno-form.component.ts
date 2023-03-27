import { Component, OnInit } from '@angular/core';
import { AlunoDTO } from 'src/app/interfaces/Aluno.dto';
import { AlunoService } from 'src/app/services/aluno.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit{

  aluno: AlunoDTO = {
    nome_aluno: '',
    cod_turma: 0,
    cod_resp: 0,
    data_nasc: '2002-08-29'
  };

  constructor(private alunoService: AlunoService){}

  ngOnInit(){}

  submitAluno(){
    this.alunoService.createAluno(this.aluno).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }
}
