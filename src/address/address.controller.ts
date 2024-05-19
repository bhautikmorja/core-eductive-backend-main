import {
  Controller,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Res,
} from '@nestjs/common';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

@ApiTags('User Address')
@Controller('api/user-address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post()
  async createAddress(
    @Res() res: Response,
    @Body() createAddressDto: CreateAddressDto,
  ) {
    const response = await this.addressService.createAddress(createAddressDto);

    return res.status(response.statusCode).json(response.data);
  }

  @Put(':id')
  @ApiParam({ name: 'id', required: true, type: 'number' })
  async updateAddress(
    @Res() res: Response,
    @Param('id') id: number,
    @Body() updateAddressDto: UpdateAddressDto,
  ) {
    const response = await this.addressService.updateAddress(
      id,
      updateAddressDto,
    );

    return res.status(response.statusCode).json(response.data);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', required: true, type: 'number' })
  async deleteAddress(@Res() res: Response, @Param('id') id: number) {
    const response = await this.addressService.deleteAddress(id);

    return res.status(response.statusCode).json(response.data);
  }
}
