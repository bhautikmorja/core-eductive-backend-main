import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateContestQuestionDto } from './dto/create-contest-question.dto';
import { UpdateContestQuestionDto } from './dto/update-contest-question.dto';
import { ContestQuestion } from './contest-question.entity';

@Injectable()
export class ContestQuestionService {
  constructor(
    @Inject('CONTEST_QUESTION_REPOSITORY')
    private readonly contestQuestionRepository: typeof ContestQuestion,
  ) {}
  async createContestQuestion(
    createContestQuestionDto: CreateContestQuestionDto | any,
  ) {
    try {
      const contestQuestion = await this.contestQuestionRepository.create(
        createContestQuestionDto,
      );

      return {
        status: true,
        statusCode: HttpStatus.OK,
        data: contestQuestion,
      };
    } catch (err) {
      return {
        status: true,
        statusCode: HttpStatus.BAD_REQUEST,
        data: err.message,
      };
    }
  }

  async getAllContestQuestion() {
    try {
      const contestQuestion = await this.contestQuestionRepository.findAll({
        include: [
          {
            association: 'contest',
          },
        ],
      });

      return {
        status: true,
        statusCode: HttpStatus.OK,
        data: contestQuestion,
      };
    } catch (err) {
      return {
        status: true,
        statusCode: HttpStatus.BAD_REQUEST,
        data: err.message,
      };
    }
  }

  async getContestQuestionById(id: number) {
    try {
      const getById = await this.contestQuestionRepository.findOne({
        where: { id },
        include: [
          {
            association: 'contest',
          },
        ],
      });

      return {
        status: true,
        statusCode: HttpStatus.OK,
        data: getById,
      };
    } catch (err) {
      return {
        status: true,
        statusCode: HttpStatus.BAD_REQUEST,
        data: err.message,
      };
    }
  }

  async updateContestQuestion(
    id: number,
    updateContestQuestionDto: UpdateContestQuestionDto | any,
  ) {
    try {
      await this.contestQuestionRepository.update(updateContestQuestionDto, {
        where: { id },
      });

      const contestQuestion = await this.contestQuestionRepository.findOne({
        where: { id },
        include: [
          {
            association: 'contest',
          },
        ],
      });

      return {
        status: true,
        statusCode: HttpStatus.OK,
        data: contestQuestion,
      };
    } catch (err) {
      return {
        status: true,
        statusCode: HttpStatus.BAD_REQUEST,
        data: err.message,
      };
    }
  }

  async deleteContestQuestion(id: number) {
    try {
      await this.contestQuestionRepository.destroy({
        where: { id },
      });

      return {
        status: true,
        statusCode: HttpStatus.OK,
        data: 'Contest Question Deleted',
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
