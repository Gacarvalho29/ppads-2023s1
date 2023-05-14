import { Component, OnInit } from '@angular/core';
import { PresencaService } from 'src/app/services/presenca.service';
import { PresencaDTO } from 'src/app/dto/presenca.dto';

@Component({
  selector: 'app-presenca-list',
  templateUrl: './presenca-list.component.html',
  styleUrls: ['./presenca-list.component.css']
})
export class PresencaListComponent implements OnInit{

  presencas: PresencaDTO[] = [];

  constructor(private presencaService: PresencaService){}

  getPresencas(){
    this.presencaService.getPresencas()
    .subscribe({
      next: (v) => {
        this.presencas = v
      },
      error: (e) => console.log(e),
      complete: () => console.log('complete')
    })
  }  

  deletePresenca(id: string){
    this.presencaService.deletePresenca(id)
    .subscribe({
      next: (v) => {
        this.getPresencas()
      },
      error: (e) => console.log(e),
      complete: () => window.alert("Falta Deletada")
    })
  } 

  ngOnInit(){
    this.getPresencas()
  }
}
