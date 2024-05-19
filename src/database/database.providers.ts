import { Sequelize } from 'sequelize-typescript';
import { config } from 'dotenv';
import { User } from 'src/user/user.entity';
import { UserAddress } from 'src/address/address.entity';
import { Contest } from 'src/contests/contest.entity';
import { ContestQuestion } from 'src/contest-question/contest-question.entity';

config();

export const databaseProvider = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequlize = new Sequelize({
        username: process.env.MYSQL_USERNAME,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        host: process.env.MYSQL_HOST,
        port: +process.env.MYSQL_PORT,
        dialect: 'mysql',
        dialectOptions: {
          dateStrings: true,
          typeCast: true,
        },
      });

      sequlize.addModels([User, UserAddress, Contest, ContestQuestion]);

      return sequlize;
    },
  },
];
