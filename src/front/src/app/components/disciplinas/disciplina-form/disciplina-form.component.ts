import { Component, OnInit } from '@angular/core';
import { DisciplinaDto } from 'src/app/dto/disciplina.dto';
import { DisciplinaService } from 'src/app/services/disciplina.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-disciplina-form',
  templateUrl: './disciplina-form.component.html',
  styleUrls: ['./disciplina-form.component.css']
})
export class DisciplinaFormComponent implements OnInit{

  disciplina: DisciplinaDto = {
    nome_disciplina: '',
  };

  edit: boolean = false;

  constructor(
    private disciplinaService: DisciplinaService,
    private router: Router,
    private activedRoute: ActivatedRoute
    ){}

  ngOnInit() {
    // const params = this.activedRoute.snapshot.params;
    // if(params){
    //   this.disciplinaService.getDisciplina(params['id'])
    //   .subscribe({
    //     next: (v) => {
    //      console.log(v);
    //      this.disciplina = v;
    //      this.edit = true
    //     },
    //     error: (e) => console.log(e),
    //     complete: () => console.log('complete')
    //   })
    // }
  }

  submitDisciplina(){
    this.disciplinaService.createDisciplina(this.disciplina)
    .subscribe({
      next: (v) => {
        console.log(v);
        this.router.navigate(['/disciplina'])
      },
      error: (e) => console.log(e),
      complete: () => window.alert("Disciplina Adicionada com sucesso!")
    })
  }

  updateDisciplina(){
    delete this.disciplina.id;
    this.disciplinaService.updateDisciplina(this.disciplina.id!, this.disciplina)
    .subscribe({
      next: (v) => {
        console.log(v);
        this.router.navigate(['/disciplina'])
      },
      error: (e) => console.log(e),
      complete: () => console.log('complete')
    })
  }
}
