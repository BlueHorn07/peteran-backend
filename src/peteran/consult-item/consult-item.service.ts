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

  findOne(consultItemId: number) {
    return this.consultItemRepo.findOne({ where: { id: consultItemId } });
  }

  delete(consultItemId: number) {
    return this.consultItemRepo.delete(consultItemId);
  }

  findByVeteran(veteranId: number) {
    return this.consultItemRepo.find({
      where: { veteran_id: veteranId },
    });
  }

  update(consultItemId: number, consultItemDto: ConsultItemUpdateDto) {
    consultItemDto['updated_at'] = new Date();
    return this.consultItemRepo.update(consultItemId, consultItemDto);
  }
}
