import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';
import { ReservationStatus } from "./reservation.type";

@Entity({
  name: 'reservation',
})
export class ReservationEntity {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ nullable: false })
  start_datetime: Date;

  @Column({ nullable: false })
  end_datetime: Date;

  @Column({ nullable: false })
  date: string; // YYYY-MM-DD format of `start_datetime`

  @Column({ nullable: false })
  veteran_uuid: string;

  @Column({ nullable: false })
  consultee_uuid: string;

  @Column({ nullable: false })
  consult_item_uuid: string;

  @Column({ nullable: false })
  consult_type: string; // type of consult item

  @Column({ nullable: true, default: ReservationStatus.notyet })
  status: ReservationStatus;

  @Column({ nullable: true })
  veteran_rate: number;

  @Column({ nullable: true })
  consultee_rate: number;

  @CreateDateColumn()
  created_at: Date;

  @Column()
  updated_at: Date;
}
