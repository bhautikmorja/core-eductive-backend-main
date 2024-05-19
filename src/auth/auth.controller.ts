import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { LoginDto } from 'src/user/dtos/login_dto';
import { CreateUserDto } from 'src/user/dtos/create-user_dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Res() res: Response, @Body() loginDto: LoginDto) {
    const response = await this.authService.login(loginDto);

    if (response.status) {
      return res.status(response.statusCode).json(response.data);
    } else {
      return res.status(response.statusCode).json(response.message);
    }
  }

  @Post('register')
  async register(@Res() res: Response, @Body() createUserdto: CreateUserDto) {
    const response = await this.authService.register(createUserdto);

    if (response.status) {
      return res.status(response.statusCode).json(response.data);
    } else {
      return res.status(response.statusCode).json(response.message);
    }
  }
}
