import { Controller, Post, Body, Get, Put, Param, Delete } from '@nestjs/common';
import { PresencaService } from './presenca.service';

@Controller('presenca')
export class PresencaController {
  constructor(private readonly presencaService: PresencaService) {}

  @Get()
  async findAll(){
    return this.presencaService.findAll()
  }

  @Delete("delete/:id")
  async delete(@Param("id") id: string){
    return this.presencaService.delete(id)
  }

}
