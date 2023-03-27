import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ProfessorDTO } from './dto/professor.dto';
import { ProfessorService } from './professor.service';


@Controller('professor')
export class ProfessorController {
  constructor(private readonly professorService: ProfessorService) {}

  @Post('/create')
  async create(@Body() body: ProfessorDTO){
    return this.professorService.create(body)
  }

  @Get()
  async findAll(){
    return this.professorService.findAll()
  }

  @Get("/:id")
  async findOne(@Param("id") id: string){
    return await this.professorService.findOne(id)
  }

  @Put("edit/:id")
  async update(@Param("id") id: string, @Body() data: ProfessorDTO){
    return this.professorService.update(id, data)
  }

  @Delete("delete/:id")
  async delete(@Param("id") id: string){
    return this.professorService.delete(id)
  }

}
