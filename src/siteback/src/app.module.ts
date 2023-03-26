import { Module } from '@nestjs/common';
import { AlunoModule } from './modules/aluno/aluno.module';
import { ProfessorModule } from './modules/professor/professor.module';

@Module({
  imports: [AlunoModule, ProfessorModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
