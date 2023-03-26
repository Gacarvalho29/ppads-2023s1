import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { ProfessorDTO } from './dto/professor.dto';


@Injectable()
export class ProfessorService {
  constructor(private prisma: PrismaService){}

  async create(data: ProfessorDTO){
    const professor = await this.prisma.professor.create({
      data,
    })

    return professor;
  }

  async findAll(){
    return this.prisma.professor.findMany()
  }

  async findOne(id: string){
    return this.prisma.professor.findUnique({
      where: {id},
    })
  }

  async update(id: string, data: ProfessorDTO){
    const professorExists = await this.prisma.professor.findUnique({
      where: { 
        id, 
      },
    });

    if(!professorExists){
      throw new NotFoundException('Professor não existe');
    }

    return await this.prisma.professor.update({
      data,
      where:{
        id,
      }
    });
  }

  async delete(id: string){
    const professorExists = await this.prisma.professor.findUnique({
      where: { 
        id, 
      },
    });

    if(!professorExists){
      throw new NotFoundException('Professor não existe');
    }

    return await this.prisma.professor.delete({
      where: {
        id,
      },
    });

  }
}
