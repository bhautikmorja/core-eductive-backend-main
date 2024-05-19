import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { AddressModule } from './address/address.module';
import { ContestsModule } from './contests/contests.module';
import { ContestQuestionModule } from './contest-question/contest-question.module';

@Module({
  imports: [
    DatabaseModule,
    AuthModule,
    UserModule,
    AddressModule,
    ContestsModule,
    ContestQuestionModule,
  ],
})
export class AppModule {}
