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
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ nullable: false })
  question_uuid: string; // Uuid of answering question

  @Column({ nullable: false })
  veteran_uuid: string; // Uuid of veteran

  @Column({ nullable: false })
  content: string;

  @CreateDateColumn()
  created_at: Date;

  @Column()
  updated_at: Date;
}
