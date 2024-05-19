import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Response } from 'express';
import { UpdateUserDto } from './dtos/update_user_dto';
import { ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller('api/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('')
  @ApiQuery({ name: 'name', required: false, type: String })
  async getUsers(@Res() res: Response, @Query('name') name: string) {
    const response = await this.userService.getUsers(name);

    return res.status(response.statusCode).json(response.data);
  }

  @Get(':id')
  @ApiParam({ name: 'id', required: true, type: Number })
  async getUserById(@Res() res: Response, @Param('id') id: number) {
    const response = await this.userService.getUserById(id);

    return res.status(response.statusCode).json(response.data);
  }

  @Put(':id')
  @ApiParam({ name: 'id', required: true, type: Number })
  async updateUser(
    @Res() res: Response,
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const response = await this.userService.updateUser(id, updateUserDto);

    return res.status(response.statusCode).json(response.data);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', required: true, type: Number })
  async deleteUser(@Res() res: Response, @Param('id') id: number) {
    const response = await this.userService.deleteUser(id);

    return res.status(response.statusCode).json(response.data);
  }
}
