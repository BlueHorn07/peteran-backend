import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ConsultItemEntity } from "./consult-item.entity";
import { ConsultItemCreateDto, ConsultItemUpdateDto } from "./consult-item.dto";

@Injectable()
export class ConsultItemService {
  constructor(
    @InjectRepository(ConsultItemEntity)
    private readonly consultItemRepo: Repository<ConsultItemEntity>,
  ) {}

  save(consultItemDto: ConsultItemCreateDto) {
    consultItemDto['updated_at'] = new Date();
    return this.consultItemRepo.save(consultItemDto);
  }

  findAll() {
    return this.consultItemRepo.find();
  }

  findOne(consultItemUuid: string) {
    return this.consultItemRepo.findOne({ where: { uuid: consultItemUuid } });
  }

  delete(consultItemUuid: string) {
    return this.consultItemRepo.delete(consultItemUuid);
  }

  findByVeteran(veteranUuid: string) {
    return this.consultItemRepo.find({
      where: { veteran_uuid: veteranUuid },
    });
  }

  update(consultItemUuid: string, consultItemDto: ConsultItemUpdateDto) {
    consultItemDto['updated_at'] = new Date();
    return this.consultItemRepo.update(consultItemUuid, consultItemDto);
  }
}
