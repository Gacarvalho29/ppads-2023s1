import { Module } from '@nestjs/common';
import { AlunoModule } from './modules/aluno/aluno.module';
import { ProfessorModule } from './modules/professor/professor.module';
import { TurmaModule } from './modules/turma/turma.module';
import { DisciplinaModule } from './modules/disciplina/disciplina.module';

@Module({
  imports: [AlunoModule, ProfessorModule, TurmaModule, DisciplinaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
