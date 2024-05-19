import { Injectable } from '@nestjs/common';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UserAddress } from 'src/address/address.entity';

@ValidatorConstraint({ name: 'UserAddressExists', async: true })
@Injectable()
export class UserAddressExistsRule implements ValidatorConstraintInterface {
  async validate(id: number) {
    try {
      const user = await UserAddress.findByPk(id);

      if (user) return true;
      return false;
    } catch (e) {
      console.log('error', e.message);
      return false;
    }
  }

  defaultMessage() {
    return `User Address doesn't exist`;
  }
}
