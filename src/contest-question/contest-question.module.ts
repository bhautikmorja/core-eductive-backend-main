import { Module } from '@nestjs/common';
import { ContestQuestionService } from './contest-question.service';
import { ContestQuestionController } from './contest-question.controller';
import { contestQuestionProvider } from './contest-question.provider';

@Module({
  controllers: [ContestQuestionController],
  providers: [ContestQuestionService, ...contestQuestionProvider],
})
export class ContestQuestionModule {}
