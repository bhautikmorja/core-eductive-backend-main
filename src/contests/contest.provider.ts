import { Contest } from './contest.entity';

export const contestProvider = [
  {
    provide: 'CONTEST_REPOSITORY',
    useValue: Contest,
  },
];
