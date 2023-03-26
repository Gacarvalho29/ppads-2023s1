import { Module } from '@nestjs/common';
import { DisciplinaService } from './disciplina.service';
import { DisciplinaController } from './disciplina.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [DisciplinaController],
  providers: [DisciplinaService, PrismaService]
})
export class DisciplinaModule {}
