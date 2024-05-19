import {
  AllowNull,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Contest } from 'src/contests/contest.entity';

@Table({
  tableName: 'contest-questions',
  timestamps: true,
})
export class ContestQuestion extends Model {
  @AllowNull(false)
  @Column({ type: DataType.STRING })
  title: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  description: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  difficulty: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  input: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  output: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  hint: string;

  @ForeignKey(() => Contest)
  @AllowNull(false)
  @Column({ type: DataType.NUMBER })
  contestId: number;

  @BelongsTo(() => Contest)
  contest: Contest;
}
