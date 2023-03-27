import { Component, OnInit } from '@angular/core';
import { AlunoDto } from 'src/app/dto/aluno.dto';
import { AlunoService } from 'src/app/services/aluno.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit{

  aluno: AlunoDto = {
    nome_aluno: '',
    cod_turma: 0,
    cod_resp:0,
    data_nasc: ''
  };

  edit: boolean = false;

  constructor(
    private alunoService: AlunoService,
    private router: Router,
    private activedRoute: ActivatedRoute
    ){}

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    // if(params){
    //   this.alunoService.getAluno(params['id'])
    //   .subscribe({
    //     next: (v) => {
    //      console.log(v);
    //      this.aluno = v;
    //      this.edit = true
    //     },
    //     error: (e) => console.log(e),
    //     complete: () => console.log('complete')
    //   })
    // }
  }

  submitAluno(){
    this.alunoService.createAluno(this.aluno)
    .subscribe({
      next: (v) => {
        console.log(v);
        this.router.navigate(['/aluno'])
      },
      error: (e) => console.log(e),
      complete: () => console.log('complete')
    })
  }

  updateAluno(){
    delete this.aluno.matricula;
    this.alunoService.updateAluno(this.aluno.cod_aluno!, this.aluno)
    .subscribe({
      next: (v) => {
        console.log(v);
        this.router.navigate(['/aluno'])
      },
      error: (e) => console.log(e),
      complete: () => console.log('complete')
    })
  }
}
