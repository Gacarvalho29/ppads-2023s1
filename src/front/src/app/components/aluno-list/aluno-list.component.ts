import { Component, OnInit } from '@angular/core';

import { AlunoService } from 'src/app/services/aluno.service';

@Component({
  selector: 'app-aluno-list',
  templateUrl: './aluno-list.component.html',
  styleUrls: ['./aluno-list.component.css']
})
export class AlunoListComponent implements OnInit{

  constructor(private alunoService: AlunoService){}

  ngOnInit() {
    this.getAlunos();
  }

  getAlunos(){
    this.alunoService.getAlunos()
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }
}
