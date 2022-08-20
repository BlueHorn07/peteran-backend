import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity({
  name: 'veteran',
})
export class VeteranEntity {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  field: string; // 전문 분야

  @Column({ type: 'text', nullable: true })
  short_description: string;

  @Column({ nullable: true, type: 'simple-array' })
  tag: string[];

  @CreateDateColumn()
  created_at: Date;

  @Column()
  last_login_at: Date;
}
