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

  findAllByVeteran(veteranUuid: string) {
    return this.reservationRepo.find({
      where: {veteran_uuid: veteranUuid}
    });
  }

  findAllByConsultee(consulteeUuid: string) {
    return this.reservationRepo.find({
      where: {consultee_uuid: consulteeUuid}
    });
  }

  findAllByConsultItem(consultItemUuid: string) {
    return this.reservationRepo.find({
      where: {consult_item_uuid: consultItemUuid}
    });
  }

  findOne(reservationUuid: string) {
    return this.reservationRepo.findOne({ where: { uuid: reservationUuid } });
  }

  delete(reservationUuid: string) {
    return this.reservationRepo.delete(reservationUuid);
  }
}
