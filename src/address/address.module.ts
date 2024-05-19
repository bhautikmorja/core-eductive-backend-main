import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import { userAddressProvider } from './address.provider';
import { userProvider } from 'src/user/user.provider';

@Module({
  controllers: [AddressController],
  providers: [AddressService, ...userAddressProvider, ...userProvider],
})
export class AddressModule {}
