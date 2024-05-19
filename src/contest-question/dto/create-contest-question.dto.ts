import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Validate } from 'class-validator';
import { ContestExistsRule } from 'src/validation-rules';

export class CreateContestQuestionDto {
  @ApiProperty()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  difficulty: string;

  @ApiProperty()
  @IsNotEmpty()
  input: string;

  @ApiProperty()
  @IsNotEmpty()
  output: string;

  @ApiProperty()
  @IsNotEmpty()
  hint: string;

  @ApiProperty()
  @IsNotEmpty()
  @Validate(ContestExistsRule)
  contestId: number;
}
