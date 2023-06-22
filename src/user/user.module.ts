import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PassportModule } from '@nestjs/passport/dist';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [PrismaModule,
    PassportModule.register({defaultStrategy: 'jwt'}),
  ]
})
export class UserModule {}
