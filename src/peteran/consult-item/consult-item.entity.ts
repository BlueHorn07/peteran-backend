import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity({
  name: 'consult_item',
})
export class ConsultItemEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  veteran_id: number;

  @Column({ nullable: false })
  type: string;

  @Column({ nullable: true })
  price: number;

  @Column({ nullable: true })
  minutes_period: number;

  @CreateDateColumn()
  created_at: Date;

  @Column()
  updated_at: Date;
}
