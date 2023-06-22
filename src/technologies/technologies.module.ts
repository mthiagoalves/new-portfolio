import { Module } from '@nestjs/common';
import { TechnologiesService } from './technologies.service';
import { TechnologiesController } from './technologies.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PassportModule } from '@nestjs/passport/dist';

@Module({
  controllers: [TechnologiesController],
  providers: [TechnologiesService],
  imports: [PrismaModule,
    PassportModule.register({defaultStrategy: 'jwt'}),
  ]
})
export class TechnologiesModule {}
