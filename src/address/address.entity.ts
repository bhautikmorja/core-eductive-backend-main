import {
  AllowNull,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';

@Table({ tableName: 'addresses', timestamps: true })
export class UserAddress extends Model {
  @AllowNull(false)
  @Column({ type: DataType.STRING })
  street: string;

  @AllowNull(true)
  @Column({ type: DataType.STRING })
  landmark: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  area: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  city: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  state: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  pincode: string;

  @AllowNull(true)
  @Column({ type: DataType.STRING })
  country: string;
}
