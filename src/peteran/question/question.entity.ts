import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity({
  name: 'question',
})
export class QuestionEntity {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ nullable: false })
  author_uuid: string; // Uuid of user

  @Column({ nullable: true })
  pet_uuid: string; // Uuid of pet (it's optional)

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  content: string;

  @CreateDateColumn()
  created_at: Date;

  @Column()
  updated_at: Date;
}
