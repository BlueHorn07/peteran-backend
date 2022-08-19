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
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ nullable: false })
  veteran_uuid: string;

  @Column({ nullable: false })
  type: string;

  @Column({ nullable: true })
  price: number;

  @Column({ nullable: true })
  minutes_period: number;

  @CreateDateColumn()
  created_at: Date;

  @Column()
  last_login_at: Date;
}
