import { Component, OnInit } from '@angular/core';
import { DisciplinaService } from 'src/app/services/disciplina.service';
import { DisciplinaDto } from 'src/app/dto/disciplina.dto';

@Component({
  selector: 'app-disciplina-list',
  templateUrl: './disciplina-list.component.html',
  styleUrls: ['./disciplina-list.component.css']
})
export class DisciplinaListComponent implements OnInit{

  disciplinas: DisciplinaDto[] = [];

  constructor(private disciplinaService: DisciplinaService){}

  getDisciplinas(){
    this.disciplinaService.getDisciplinas()
    .subscribe({
      next: (v) => {
        this.disciplinas = v
      },
      error: (e) => console.log(e),
      complete: () => console.log('complete')
    })
  }

  deleteDisciplina(id: string){
    this.disciplinaService.deleteDisciplina(id)
      .subscribe({
      next: (v) => {
        this.getDisciplinas()
      },
      error: (e) => console.log(e),
      complete: () => console.log('complete')
    })
  }

  ngOnInit(){
    this.getDisciplinas()
  }
}