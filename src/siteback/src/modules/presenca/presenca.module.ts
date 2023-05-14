import { Module } from '@nestjs/common';
import { PresencaService } from './presenca.service';
import { PresencaController } from './presenca.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [PresencaController],
  providers: [PresencaService, PrismaService]
})
export class PresencaModule {}
