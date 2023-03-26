import { Injectable, NotFoundException } from '@nestjs/common';
import { DisciplinaDTO } from './dto/disciplina.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class DisciplinaService {

  constructor(private prisma: PrismaService){}

  async create(data: DisciplinaDTO){
    const disciplina = await this.prisma.disciplina.create({
      data,
    })

    return disciplina;
  }

  async findAll(){
    return this.prisma.disciplina.findMany()
  }

  async findOne(id: string){
    return this.prisma.disciplina.findUnique({
      where: {id},
    })
  }

  async update(id: string, data: DisciplinaDTO){
    const turmaExists = await this.prisma.disciplina.findUnique({
      where: { 
        id, 
      },
    });

    if(!turmaExists){
      throw new NotFoundException('Turma não existe');
    }

    return await this.prisma.disciplina.update({
      data,
      where:{
        id,
      }
    });
  }

  async delete(id: string){
    const disciplinaExists = await this.prisma.disciplina.findUnique({
      where: { 
        id, 
      },
    });

    if(!disciplinaExists){
      throw new NotFoundException('Turma não existe');
    }

    return await this.prisma.disciplina.delete({
      where: {
        id,
      },
    });

  }
}
