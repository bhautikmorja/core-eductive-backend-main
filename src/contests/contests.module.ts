import { Module } from '@nestjs/common';
import { ContestsService } from './contests.service';
import { ContestsController } from './contests.controller';
import { contestProvider } from './contest.provider';

@Module({
  controllers: [ContestsController],
  providers: [ContestsService, ...contestProvider],
})
export class ContestsModule {}
