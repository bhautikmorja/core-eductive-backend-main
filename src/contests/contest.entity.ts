import {
  AllowNull,
  Column,
  DataType,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { ContestQuestion } from 'src/contest-question/contest-question.entity';

@Table({
  tableName: 'contests',
  timestamps: true,
})
export class Contest extends Model {
  @AllowNull(false)
  @Column({ type: DataType.STRING })
  name: string;

  @AllowNull(false)
  @Column({ type: DataType.DATE })
  startTime: Date;

  @AllowNull(false)
  @Column({ type: DataType.DATE })
  endTime: Date;

  @AllowNull(false)
  @Column({ type: DataType.NUMBER })
  questionsCount: number;

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  creator: string;

  @AllowNull(true)
  @Column({ type: DataType.BOOLEAN })
  type: boolean;

  @HasMany(() => ContestQuestion)
  questions: ContestQuestion[];
}
