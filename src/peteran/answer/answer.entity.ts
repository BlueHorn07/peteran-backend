import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity({
  name: 'answer',
})
export class AnswerEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  question_id: number; // Id of answering question

  @Column({ nullable: false })
  veteran_id: number; // Id of veteran

  @Column({ nullable: false })
  content: string;

  @CreateDateColumn()
  created_at: Date;

  @Column()
  updated_at: Date;
}
