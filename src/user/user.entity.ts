import {
  AllowNull,
  Column,
  Model,
  Table,
  DataType,
  Unique,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { UserAddress } from 'src/address/address.entity';

@Table({
  tableName: 'users',
  timestamps: true,
})
export class User extends Model {
  @AllowNull(false)
  @Column({ type: DataType.STRING })
  name: string;

  @AllowNull(false)
  @Unique
  @Column({ type: DataType.STRING })
  email: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  password: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  role: string;

  @ForeignKey(() => UserAddress)
  @AllowNull(true)
  @Column({ type: DataType.INTEGER })
  addressId: number;

  @BelongsTo(() => UserAddress)
  address: UserAddress;
}
