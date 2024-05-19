import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, Validate } from 'class-validator';
import { UserAddressExistsRule } from 'src/validation-rules';

export class UpdateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsOptional()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsOptional()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsOptional()
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsOptional()
  role: string;

  @ApiProperty()
  @IsOptional()
  @Validate(UserAddressExistsRule)
  addressId: number;
}
