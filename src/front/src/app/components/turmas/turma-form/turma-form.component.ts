import { Component, OnInit } from '@angular/core';
import { TurmaService } from 'src/app/services/turma.service';
import { TurmaDTO } from 'src/app/dto/turma.dto';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-turma-form',
  templateUrl: './turma-form.component.html',
  styleUrls: ['./turma-form.component.css']
})
export class TurmaFormComponent implements OnInit{

  turma: TurmaDTO = {
    nome_turma: '',
    cod_turma: undefined,
    sala_aula: undefined,
  };

  edit: boolean = false;

  constructor(
    private turmaService: TurmaService,
    private router: Router,
    private activedRoute: ActivatedRoute
    ){}

  ngOnInit() {
    // const params = this.activedRoute.snapshot.params;
    // if(params){
    //   this.turmaService.getTurma(params['id'])
    //   .subscribe({
    //     next: (v) => {
    //      console.log(v);
    //      this.turma = v;
    //      this.edit = true
    //     },
    //     error: (e) => console.log(e),
    //     complete: () => console.log('complete')
    //   })
    // }
  }

  submitTurma(){
    this.turmaService.createTurma(this.turma)
    .subscribe({
      next: (v) => {
        console.log(v);
        this.router.navigate(['/turma'])
      },
      error: (e) => console.log(e),
      complete: () => window.alert("Turma Adicionada com sucesso!")
    })
  }

  updateTurma(){
    delete this.turma.id;
    this.turmaService.updateTurma(this.turma.id!, this.turma)
    .subscribe({
      next: (v) => {
        console.log(v);
        this.router.navigate(['/turma'])
      },
      error: (e) => console.log(e),
      complete: () => console.log('complete')
    })
  }
}
