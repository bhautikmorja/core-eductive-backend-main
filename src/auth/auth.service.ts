import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dtos/create-user_dto';
import { LoginDto } from 'src/user/dtos/login_dto';
import { User } from 'src/user/user.entity';
import {
  comparePassword,
  createToken,
  hashPassword,
} from 'src/utils/general_helper';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: typeof User,
  ) {}

  async login({ email, password }: LoginDto) {
    try {
      const user = await this.userRepository.findOne({
        where: { email },
      });

      const isMatch = await comparePassword(password, user.password);

      if (isMatch) {
        const token = createToken(user.id);

        return {
          status: true,
          statusCode: HttpStatus.OK,
          data: { user, token },
        };
      } else {
        return {
          status: false,
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Invalid credentials',
        };
      }
    } catch (err) {
      return {
        status: false,
        statusCode: HttpStatus.BAD_REQUEST,
        message: err.message,
      };
    }
  }

  async register(createUserDto: CreateUserDto) {
    try {
      const findUser = await this.userRepository.findOne({
        where: {
          email: createUserDto.email,
        },
      });

      if (findUser) {
        return {
          status: false,
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'User already exists.',
        };
      }

      const hash = await hashPassword(createUserDto.password);

      const newUser = await this.userRepository.create({
        ...createUserDto,
        password: hash,
      });

      const token = createToken(newUser.id);

      return {
        status: true,
        statusCode: HttpStatus.OK,
        data: { user: newUser, token },
      };
    } catch (err) {
      return {
        status: false,
        statusCode: HttpStatus.BAD_REQUEST,
        message: err.message,
      };
    }
  }
}
