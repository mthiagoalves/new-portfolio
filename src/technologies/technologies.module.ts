import { Module } from '@nestjs/common';
import { TechnologiesService } from './technologies.service';
import { TechnologiesController } from './technologies.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [TechnologiesController],
  providers: [TechnologiesService],
  imports: [PrismaModule]
})
export class TechnologiesModule {}
