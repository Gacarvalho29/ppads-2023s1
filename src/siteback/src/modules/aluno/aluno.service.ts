import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { PrismaService } from 'src/database/prisma.service';
import { AlunoDto } from './dto/aluno.dto';

@Injectable()
export class AlunoService {

  constructor(private prisma: PrismaService){}
      

  async create(data: AlunoDto){
    const aluno = await this.prisma.aluno.create({
      data,
    });
    return aluno;
  }

  async findAll(){
    return this.prisma.aluno.findMany();
  }

  async findOne(cod_aluno: string){
    return this.prisma.aluno.findUnique({
      where: {cod_aluno},
    })
  }

  async update(cod_aluno: string, data: AlunoDto){
    const alunoExists = await this.prisma.aluno.findUnique({
      where: { 
        cod_aluno, 
      },
    });

    if(!alunoExists){
      throw new NotFoundException('Aluno não existe');
    }

    return await this.prisma.aluno.update({
      data,
      where:{
        cod_aluno,
      }
    });
  }

  async delete(cod_aluno: string){
    const alunoExists = await this.prisma.aluno.findUnique({
      where: { 
        cod_aluno, 
      },
    });

    if(!alunoExists){
      throw new NotFoundException('Aluno não existe');
    }

    return await this.prisma.aluno.delete({
      where: {
        cod_aluno,
      },
    });

  }

  async addPresenca(cod_aluno: string) {
    const aluno = await this.prisma.aluno.findUnique({
      where: { cod_aluno },
    });
    if (!aluno) {
      throw new NotFoundException('Aluno não encontrado');
    }
    const presenca = await this.prisma.presenca.create({
      data: {
        cod_aluno,
        cod_disciplina:1,
        data_presenca: new Date(),
        status: 'presente',
      },
    });
    return presenca;
  }
  
  async addFalta(cod_aluno: string) {
    const aluno = await this.prisma.aluno.findUnique({
      where: { cod_aluno },
    });
    if (!aluno) {
      throw new NotFoundException('Aluno não encontrado');
    }
    const falta = await this.prisma.presenca.create({
      data: {
        cod_aluno,
        cod_disciplina: 1,
        data_presenca: new Date(),
        status: 'falta',
      },
    });
    return falta;
  }
  
  
}
