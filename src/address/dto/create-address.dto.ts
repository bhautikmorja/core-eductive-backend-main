import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, Validate } from 'class-validator';
import { UserExistsRule } from 'src/validation-rules';

export class CreateAddressDto {
  @ApiProperty()
  @IsNotEmpty()
  street: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsOptional()
  landmark: string;

  @ApiProperty()
  @IsNotEmpty()
  area: string;

  @ApiProperty()
  @IsNotEmpty()
  city: string;

  @ApiProperty()
  @IsNotEmpty()
  state: string;

  @ApiProperty()
  @IsNotEmpty()
  pincode: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsOptional()
  country: string;

  @ApiProperty()
  @IsNotEmpty()
  @Validate(UserExistsRule)
  userId: number;
}
