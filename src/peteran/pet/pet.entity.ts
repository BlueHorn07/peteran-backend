import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity({
  name: 'pet',
})
export class PetEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  owner_id: number; // uuid of owner

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: true })
  breed: string; // 품좀

  @Column({ nullable: true })
  age: number; // year

  @Column({ nullable: true })
  height: number;

  @Column({ nullable: true })
  weight: number;

  @Column({ type: 'text', nullable: true })
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @Column()
  updated_at: Date;
}
