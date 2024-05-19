import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { UpdateUserDto } from './dtos/update_user_dto';
import { hashPassword } from 'src/utils/general_helper';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: typeof User,
  ) {}

  async getUsers(name?: string) {
    try {
      let allUsers: any;

      if (name) {
        allUsers = await this.userRepository.findAll({
          where: { name },
          include: [
            {
              association: 'address',
            },
          ],
        });
      } else {
        allUsers = await this.userRepository.findAll({
          include: [
            {
              association: 'address',
            },
          ],
        });
      }

      return {
        status: true,
        statusCode: HttpStatus.OK,
        data: allUsers,
      };
    } catch (err) {
      return {
        status: false,
        statusCode: HttpStatus.BAD_REQUEST,
        data: err.message,
      };
    }
  }

  async getUserById(id: number) {
    try {
      const user = await this.userRepository.findOne({
        where: { id },
        include: [
          {
            association: 'address',
          },
        ],
      });

      return {
        status: true,
        statusCode: HttpStatus.OK,
        data: user,
      };
    } catch (err) {
      return {
        status: false,
        statusCode: HttpStatus.BAD_REQUEST,
        data: err.message,
      };
    }
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto) {
    try {
      if ('password' in updateUserDto) {
        const hash = await hashPassword(updateUserDto.password);

        updateUserDto.password = hash;
      }

      await this.userRepository.update(updateUserDto, {
        where: { id },
      });

      const user = await this.userRepository.findOne({ where: { id } });

      return {
        status: true,
        statusCode: HttpStatus.OK,
        data: user,
      };
    } catch (err) {
      return {
        status: false,
        statusCode: HttpStatus.BAD_REQUEST,
        data: err.message,
      };
    }
  }

  async deleteUser(id: number) {
    try {
      await this.userRepository.destroy({ where: { id } });

      return {
        status: true,
        statusCode: HttpStatus.OK,
        data: 'deleted',
      };
    } catch (err) {
      return {
        status: false,
        statusCode: HttpStatus.BAD_REQUEST,
        data: err.message,
      };
    }
  }
}
