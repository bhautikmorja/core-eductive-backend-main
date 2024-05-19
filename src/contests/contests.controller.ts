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
import { ContestsService } from './contests.service';
import { CreateContestDto } from './dto/create-contest.dto';
import { UpdateContestDto } from './dto/update-contest.dto';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

@ApiTags('Contests')
@Controller('api/contest')
export class ContestsController {
  constructor(private readonly contestsService: ContestsService) {}

  @Post()
  async createContest(
    @Res() res: Response,
    @Body() createContestDto: CreateContestDto,
  ) {
    const response = await this.contestsService.createContest(createContestDto);

    return res.status(response.statusCode).json(response.data);
  }

  @Get()
  async getAllContest(@Res() res: Response) {
    const response = await this.contestsService.getAllContest();

    return res.status(response.statusCode).json(response.data);
  }

  @Get(':id')
  @ApiParam({ name: 'id', required: true, type: 'number' })
  async getContestById(@Res() res: Response, @Param('id') id: number) {
    const response = await this.contestsService.getContestById(id);

    return res.status(response.statusCode).json(response.data);
  }

  @Put(':id')
  @ApiParam({ name: 'id', required: true, type: 'number' })
  async updateContest(
    @Res() res: Response,
    @Param('id') id: number,
    @Body() updateContestDto: UpdateContestDto,
  ) {
    const response = await this.contestsService.updateContest(
      id,
      updateContestDto,
    );

    return res.status(response.statusCode).json(response.data);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', required: true, type: 'number' })
  async deleteContest(@Res() res: Response, @Param('id') id: number) {
    const response = await this.contestsService.deleteContest(id);

    return res.status(response.statusCode).json(response.data);
  }
}
