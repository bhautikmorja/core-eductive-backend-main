import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, Validate } from 'class-validator';
import { ContestExistsRule } from 'src/validation-rules';

export class UpdateContestQuestionDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsOptional()
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsOptional()
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsOptional()
  difficulty: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsOptional()
  input: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsOptional()
  output: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsOptional()
  hint: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsOptional()
  @Validate(ContestExistsRule)
  contestId: number;
}
