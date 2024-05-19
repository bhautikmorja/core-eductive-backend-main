import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateContestDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsOptional()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsOptional()
  startTime: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsOptional()
  endTime: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsOptional()
  questionsCount: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsOptional()
  creator: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsOptional()
  type: boolean;
}
