import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { VeteranCreateDto, VeteranUpdateDto } from "./veteran.dto";
import { VeteranEntity } from "./veteran.entity";

// TODO: field 서치

@Injectable()
export class VeteranService {
  constructor(
    @InjectRepository(VeteranEntity)
    private readonly veteranRepo: Repository<VeteranEntity>,
  ) {}

  save(veteranDto: VeteranCreateDto) {
    veteranDto['updated_at'] = new Date();
    return this.veteranRepo.save(veteranDto);
  }

  findAll() {
    return this.veteranRepo.find();
  }

  findOne(veteranUuid: string) {
    return this.veteranRepo.findOne({ where: { uuid: veteranUuid } });
  }

  delete(veteranUuid: string) {
    return this.veteranRepo.delete(veteranUuid);
  }

  update(veteranUuid: string, veteranDto: VeteranUpdateDto) {
    veteranDto['updated_at'] = new Date();
    return this.veteranRepo.update(veteranUuid, veteranDto);
  }
}
