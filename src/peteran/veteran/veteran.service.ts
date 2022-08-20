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

  findByKeywordContain(keyword: string) {
    const qb = this.veteranRepo.createQueryBuilder();

    return qb
      .select('*')
      .where(`LOWER(name) LIKE '%${keyword.toLowerCase()}%'`)
      .orWhere(`LOWER(field) LIKE '%${keyword.toLowerCase()}%'`)
      .orWhere(`LOWER(tag) LIKE '%${keyword.toLowerCase()}%'`)
      .orWhere(`LOWER(short_description) LIKE '%${keyword.toLowerCase()}%'`)
      .getRawMany();
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
