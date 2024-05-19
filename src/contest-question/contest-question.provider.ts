import { ContestQuestion } from './contest-question.entity';

export const contestQuestionProvider = [
  {
    provide: 'CONTEST_QUESTION_REPOSITORY',
    useValue: ContestQuestion,
  },
];
