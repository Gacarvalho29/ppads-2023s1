import { Controller, Post, Body, Get, Put, Param, Delete } from '@nestjs/common';
import { AlunoDto } from './dto/aluno.dto';
import { AlunoService } from './aluno.service';

@Controller('aluno')
export class AlunoController {
  constructor(private readonly alunoService: AlunoService) {}

  @Post('/create')
  async create(@Body() body: AlunoDto){
    return this.alunoService.create(body)
  }

  @Get()
  async findAll(){
    return this.alunoService.findAll()
  }

  @Get("/:id")
  async findOne(@Param("id") id: string){
    return await this.alunoService.findOne(id)
  }

  @Put("edit/:id")
  async update(@Param("id") id: string, @Body() data: AlunoDto){
    return this.alunoService.update(id, data)
  }

  @Delete("delete/:id")
  async delete(@Param("id") id: string){
    return this.alunoService.delete(id)
  }
}
