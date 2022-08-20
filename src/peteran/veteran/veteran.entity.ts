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
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: false })
  phone: string;

  @Column({ nullable: false })
  location: string;

  @Column({ nullable: false })
  type: string; // vet, trainer

  @Column({ nullable: false, type: 'simple-array' })
  field: string[]; // 전문 분야

  @Column({ type: 'text', nullable: true })
  short_description: string;

  @CreateDateColumn()
  created_at: Date;

  @Column()
  updated_at: Date;

  @Column()
  last_login_at: Date;
}
