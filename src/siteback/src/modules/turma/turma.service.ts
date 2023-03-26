import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { TurmaDTO } from './dto/turma.dto';

@Injectable()
export class TurmaService {

  constructor(private prisma: PrismaService){}
  
  async create(data: TurmaDTO){
    const turma = await this.prisma.turma.create({
      data,
    })

    return turma;
  }

  async findAll(){
    return this.prisma.turma.findMany()
  }

  async findOne(id: string){
    return this.prisma.turma.findUnique({
      where: {id},
    })
  }

  async update(id: string, data: TurmaDTO){
    const turmaExists = await this.prisma.turma.findUnique({
      where: { 
        id, 
      },
    });

    if(!turmaExists){
      throw new NotFoundException('Turma não existe');
    }

    return await this.prisma.turma.update({
      data,
      where:{
        id,
      }
    });
  }

  async delete(id: string){
    const turmaExists = await this.prisma.turma.findUnique({
      where: { 
        id, 
      },
    });

    if(!turmaExists){
      throw new NotFoundException('Turma não existe');
    }

    return await this.prisma.turma.delete({
      where: {
        id,
      },
    });

  }
}
