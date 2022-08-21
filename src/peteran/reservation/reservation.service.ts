import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ReservationEntity } from "./reservation.entity";
import { ReservationCreateDto } from "./reservation.dto";

@Injectable()
export class ReservationService {
  constructor(
    @InjectRepository(ReservationEntity)
    private readonly reservationRepo: Repository<ReservationEntity>,
  ) {}

  save(reservationDto: ReservationCreateDto) {
    reservationDto['updated_at'] = new Date();
    return this.reservationRepo.save(reservationDto);
  }

  findAll() {
    return this.reservationRepo.find();
  }

  findMostReservedVeteran(take = 10) {
    const qb = this.reservationRepo.createQueryBuilder()

    return qb
      .select('veteran_id')
      .addSelect('COUNT(*) AS reservation_count')
      .groupBy('1')
      .orderBy('2', 'DESC')
      .limit(take)
      .getRawMany()
  }

  findAllByVeteran(veteranId: number) {
    return this.reservationRepo.find({
      where: {veteran_id: veteranId}
    });
  }

  findAllByConsultee(consulteeId: number) {
    return this.reservationRepo.find({
      where: {consultee_id: consulteeId}
    });
  }

  findAllByConsultItem(consultItemId: number) {
    return this.reservationRepo.find({
      where: {consult_item_id: consultItemId}
    });
  }

  findOne(reservationId: number) {
    return this.reservationRepo.findOne({ where: { id: reservationId } });
  }

  delete(reservationId: number) {
    return this.reservationRepo.delete(reservationId);
  }
}
