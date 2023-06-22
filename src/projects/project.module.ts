import { Module } from "@nestjs/common";
import { ProjectController } from "./project.controller";
import { ProjectService } from "./project.service";
import { PrismaModule } from "src/prisma/prisma.module";
import { PassportModule } from '@nestjs/passport/dist';

@Module({
  controllers: [ProjectController],
  providers: [ProjectService],
  imports: [PrismaModule, 
    PassportModule.register({defaultStrategy: 'jwt'}),
  ]
})
export class ProjectModule {}
