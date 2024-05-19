import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateContestDto } from './dto/create-contest.dto';
import { UpdateContestDto } from './dto/update-contest.dto';
import { Contest } from './contest.entity';

@Injectable()
export class ContestsService {
  constructor(
    @Inject('CONTEST_REPOSITORY')
    private readonly contestRepository: typeof Contest,
  ) {}
  async createContest(createContestDto: CreateContestDto | any) {
    try {
      const contest = await this.contestRepository.create(createContestDto);

      return {
        status: true,
        statusCode: HttpStatus.OK,
        data: contest,
      };
    } catch (err) {
      return {
        status: true,
        statusCode: HttpStatus.BAD_REQUEST,
        data: err.message,
      };
    }
  }

  async getAllContest() {
    try {
      const allContest = await this.contestRepository.findAll({
        include: [
          {
            association: 'questions',
          },
        ],
      });

      return {
        status: true,
        statusCode: HttpStatus.OK,
        data: allContest,
      };
    } catch (err) {
      return {
        status: true,
        statusCode: HttpStatus.BAD_REQUEST,
        data: err.message,
      };
    }
  }

  async getContestById(id: number) {
    try {
      const contestById = await this.contestRepository.findOne({
        where: { id },
        include: [
          {
            association: 'questions',
          },
        ],
      });

      return {
        status: true,
        statusCode: HttpStatus.OK,
        data: contestById,
      };
    } catch (err) {
      return {
        status: true,
        statusCode: HttpStatus.BAD_REQUEST,
        data: err.message,
      };
    }
  }

  async updateContest(id: number, updateContestDto: UpdateContestDto) {
    try {
      await this.contestRepository.update(updateContestDto, {
        where: { id },
      });

      const contest = await this.contestRepository.findOne({
        where: { id },
      });

      return {
        status: true,
        statusCode: HttpStatus.OK,
        data: contest,
      };
    } catch (err) {
      return {
        status: true,
        statusCode: HttpStatus.BAD_REQUEST,
        data: err.message,
      };
    }
  }

  async deleteContest(id: number) {
    try {
      await this.contestRepository.destroy({
        where: { id },
      });

      return {
        status: true,
        statusCode: HttpStatus.OK,
        data: 'Contest Deleted',
      };
    } catch (err) {
      return {
        status: true,
        statusCode: HttpStatus.BAD_REQUEST,
        data: err.message,
      };
    }
  }
}
