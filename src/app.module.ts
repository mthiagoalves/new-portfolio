import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectModule } from './projects/project.module';
import { PrismaModule } from './prisma/prisma.module';
import { TechnologyModule } from './technology/technology.module';

@Module({
  imports: [ProjectModule, PrismaModule, TechnologyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
