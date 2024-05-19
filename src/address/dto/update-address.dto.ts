import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, Validate } from 'class-validator';
import { UserExistsRule } from 'src/validation-rules';

export class UpdateAddressDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsOptional()
  street: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsOptional()
  landmark: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsOptional()
  area: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsOptional()
  city: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsOptional()
  state: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsOptional()
  pincode: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsOptional()
  country: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsOptional()
  @Validate(UserExistsRule)
  userId: number;
}
