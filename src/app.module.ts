import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectModule } from './projects/project.module';
import { PrismaModule } from './prisma/prisma.module';
import { TechnologiesModule } from './technologies/technologies.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ProjectModule, PrismaModule, TechnologiesModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
