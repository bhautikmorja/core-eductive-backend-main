import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { UserAddress } from './address.entity';
import { User } from 'src/user/user.entity';

@Injectable()
export class AddressService {
  constructor(
    @Inject('ADDRESS_REPOSITORY')
    private userAddressRepository: typeof UserAddress,
    @Inject('USER_REPOSITORY')
    private userRepository: typeof User,
  ) {}
  async createAddress(createAddressDto: CreateAddressDto | any) {
    try {
      const address = await this.userAddressRepository.create(createAddressDto);

      this.userRepository.update(
        { addressId: address.id },
        {
          where: { id: createAddressDto.userId },
        },
      );

      return {
        status: true,
        statusCode: HttpStatus.OK,
        data: address,
      };
    } catch (err) {
      return {
        status: true,
        statusCode: HttpStatus.BAD_REQUEST,
        data: err.message,
      };
    }
  }

  async updateAddress(id: number, updateAddressDto: UpdateAddressDto) {
    try {
      if ('userId' in updateAddressDto) {
        await this.userRepository.update(
          { addressId: id },
          {
            where: { id: updateAddressDto.userId },
          },
        );
      }

      await this.userAddressRepository.update(updateAddressDto, {
        where: { id },
      });

      const address = await this.userAddressRepository.findOne({
        where: { id },
      });

      return {
        status: true,
        statusCode: HttpStatus.OK,
        data: address,
      };
    } catch (err) {
      return {
        status: true,
        statusCode: HttpStatus.BAD_REQUEST,
        data: err.message,
      };
    }
  }

  async deleteAddress(id: number) {
    try {
      await this.userAddressRepository.destroy({
        where: { id },
      });

      return {
        status: true,
        statusCode: HttpStatus.OK,
        data: 'Address Deleted',
      };
    } catch (err) {
      return {
        status: true,
        statusCode: HttpStatus.BAD_REQUEST,
        data: err.message,
      };
    }
  }
}
