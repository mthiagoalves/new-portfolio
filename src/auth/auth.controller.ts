import { Controller, Body, Post, Get, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';
import { LoginRespondeDto } from './dto/login-response.dto';
import { AuthGuard } from '@nestjs/passport';
import { LoggedUser } from './legged-user.decorator';
import { User } from 'src/user/entities/user.entity';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Sign in with token authentication'
  })
  login(@Body() loginDto: LoginDto): Promise<LoginRespondeDto>{
    return this.authService.login(loginDto)
  }

  @Get()
  @UseGuards(AuthGuard())
  @ApiOperation({
    summary: 'Return user auth'
  })
  @ApiBearerAuth()
  profile(@LoggedUser() user: User) {
    return { user };
  }
}
