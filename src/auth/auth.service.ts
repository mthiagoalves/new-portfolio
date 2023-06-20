import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { LoginRespondeDto } from './dto/login-response.dto';

@Injectable()
export class AuthService {

  async login(loginDto: LoginDto): Promise<LoginRespondeDto> {
    return  {
      token: 'teste',
      user: undefined
    }
  }
}
