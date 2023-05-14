import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class PresencaService {

  constructor(private prisma: PrismaService){}

  async findAll(){
    return this.prisma.presenca.findMany();
  }

  async delete(id: string){
    const presencaExists = await this.prisma.presenca.findUnique({
      where: { 
        id,
      },
    });

    if(!presencaExists){
      throw new NotFoundException('Presenca não existe');
    }

    return await this.prisma.presenca.delete({
      where: {
        id,
      },
    });

  }
  
}
