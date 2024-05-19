import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Res,
} from '@nestjs/common';
import { ContestQuestionService } from './contest-question.service';
import { CreateContestQuestionDto } from './dto/create-contest-question.dto';
import { UpdateContestQuestionDto } from './dto/update-contest-question.dto';
import { Response } from 'express';
import { ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('Contest Question')
@Controller('contest-question')
export class ContestQuestionController {
  constructor(
    private readonly contestQuestionService: ContestQuestionService,
  ) {}

  @Post()
  async createContestQuestion(
    @Res() res: Response,
    @Body() createContestQuestionDto: CreateContestQuestionDto,
  ) {
    const response = await this.contestQuestionService.createContestQuestion(
      createContestQuestionDto,
    );

    return res.status(response.statusCode).json(response.data);
  }

  @Get()
  async getAllContestQuestion(@Res() res: Response) {
    const response = await this.contestQuestionService.getAllContestQuestion();

    return res.status(response.statusCode).json(response.data);
  }

  @Get(':id')
  @ApiParam({ name: 'id', required: true, type: 'number' })
  async getContestQuestionById(@Res() res: Response, @Param('id') id: number) {
    const response =
      await this.contestQuestionService.getContestQuestionById(id);

    return res.status(response.statusCode).json(response.data);
  }

  @Put(':id')
  @ApiParam({ name: 'id', required: true, type: 'number' })
  async updateContestQuestion(
    @Res() res: Response,
    @Param('id') id: number,
    @Body() updateContestQuestionDto: UpdateContestQuestionDto,
  ) {
    const response = await this.contestQuestionService.updateContestQuestion(
      id,
      updateContestQuestionDto,
    );

    return res.status(response.statusCode).json(response.data);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', required: true, type: 'number' })
  async deleteContestQuestion(@Res() res: Response, @Param('id') id: number) {
    const response =
      await this.contestQuestionService.deleteContestQuestion(id);

    return res.status(response.statusCode).json(response.data);
  }
}
