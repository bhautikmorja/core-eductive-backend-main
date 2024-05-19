import { Injectable } from '@nestjs/common';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Contest } from 'src/contests/contest.entity';

@ValidatorConstraint({ name: 'ContestExists', async: true })
@Injectable()
export class ContestExistsRule implements ValidatorConstraintInterface {
  async validate(id: number) {
    try {
      const contest = await Contest.findByPk(id);

      if (contest) return true;
      return false;
    } catch (e) {
      console.log('error', e.message);
      return false;
    }
  }

  defaultMessage() {
    return `Contest doesn't exist`;
  }
}
