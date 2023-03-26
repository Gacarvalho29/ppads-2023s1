import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TurmaDTO } from './dto/turma.dto';
import { TurmaService } from './turma.service';

@Controller('turma')
export class TurmaController {
  constructor(private readonly turmaService: TurmaService) {}

  @Post()
  async create(@Body() body: TurmaDTO){
    return this.turmaService.create(body)
  }

  @Get()
  async findAll(){
    return this.turmaService.findAll()
  }

  @Get("/:id")
  async findOne(@Param("id") id: string){
    return await this.turmaService.findOne(id)
  }

  @Put("/:id")
  async update(@Param("id") id: string, @Body() data: TurmaDTO){
    return this.turmaService.update(id, data)
  }

  @Delete("/:id")
  async delete(@Param("id") id: string){
    return this.turmaService.delete(id)
  }
}
