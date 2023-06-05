import { Component, OnInit } from '@angular/core';
import { ProfessorDto } from 'src/app/dto/professor.dto';
import { professorService } from 'src/app/services/professor.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-professor-form',
  templateUrl: './professor-form.component.html',
  styleUrls: ['./professor-form.component.css']
})
export class ProfessorFormComponent implements OnInit{

  professor: ProfessorDto = {
    nome_prof: '',
    cod_disciplina: undefined,
    email_prof: '',
    tel_prof: ''
  };

  edit: boolean = false;

  constructor(
    private professorService: professorService,
    private router: Router,
    private activedRoute: ActivatedRoute
    ){}

  ngOnInit() {
    // const params = this.activedRoute.snapshot.params;
    // if(params){
    //   this.professorService.getProfessor(params['id'])
    //   .subscribe({
    //     next: (v) => {
    //      console.log(v);
    //      this.professor = v;
    //      this.edit = true
    //     },
    //     error: (e) => console.log(e),
    //     complete: () => console.log('complete')
    //   })
    // }
  }

  submitProfessor(){
    this.professorService.createProfessor(this.professor)
    .subscribe({
      next: (v) => {
        console.log(v);
        this.router.navigate(['/professor'])
      },
      error: (e) => console.log(e),
      complete: () => window.alert("Professor Adicionado com sucesso!")
    })
  }

  updateProfessor(){
    delete this.professor.id;
    this.professorService.updateProfessor(this.professor.id!, this.professor)
    .subscribe({
      next: (v) => {
        console.log(v);
        this.router.navigate(['/professor'])
      },
      error: (e) => console.log(e),
      complete: () => console.log('complete')
    })
  }
}