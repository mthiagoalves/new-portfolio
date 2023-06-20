import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectModule } from './projects/project.module';
import { PrismaModule } from './prisma/prisma.module';
import { TechnologyModule } from './technology/technology.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ProjectModule, PrismaModule, TechnologyModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
