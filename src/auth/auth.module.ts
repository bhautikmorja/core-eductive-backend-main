import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { userProvider } from 'src/user/user.provider';

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [AuthService, ...userProvider],
})
export class AuthModule {}
