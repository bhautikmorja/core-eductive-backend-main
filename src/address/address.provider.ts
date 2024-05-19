import { UserAddress } from './address.entity';

export const userAddressProvider = [
  {
    provide: 'ADDRESS_REPOSITORY',
    useValue: UserAddress,
  },
];
