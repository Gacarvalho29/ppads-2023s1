import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { DisciplinaDTO } from './dto/disciplina.dto';
import { DisciplinaService } from './disciplina.service';

@Controller('disciplina')
export class DisciplinaController {
  constructor(private readonly disciplinaService: DisciplinaService) {}

  @Post('/create')
  async create(@Body() body: DisciplinaDTO){
    return this.disciplinaService.create(body)
  }

  @Get()
  async findAll(){
    return this.disciplinaService.findAll()
  }

  @Get("/:id")
  async findOne(@Param("id") id: string){
    return await this.disciplinaService.findOne(id)
  }

  @Put("edit/:id")
  async update(@Param("id") id: string, @Body() data: DisciplinaDTO){
    return this.disciplinaService.update(id, data)
  }

  @Delete("delete/:id")
  async delete(@Param("id") id: string){
    return this.disciplinaService.delete(id)
  }
}

   

