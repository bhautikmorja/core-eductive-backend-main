import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateContestDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  startTime: Date;

  @ApiProperty()
  @IsNotEmpty()
  endTime: Date;

  @ApiProperty()
  @IsNotEmpty()
  questionsCount: number;

  @ApiProperty()
  @IsNotEmpty()
  creator: string;

  @ApiProperty()
  @IsOptional()
  @IsNotEmpty()
  type: boolean;
}
