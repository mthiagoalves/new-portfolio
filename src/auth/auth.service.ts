import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { LoginRespondeDto } from './dto/login-response.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly prisma:PrismaService){}

  async login(loginDto: LoginDto): Promise<LoginRespondeDto> {
    const { nickname, password } = loginDto;

    const user = await this.prisma.user.findUnique({where: { nickname }});

    if (!user){
      throw new NotFoundException('User or password invalid');
    }

    const isHashValid = await bcrypt.compare(password, user.password);

    if(!isHashValid) {
      throw new UnauthorizedException('User or password invalid');
    }

    delete user.password;

    return  {
      token: 'teste',
      user
    }
  }
}
