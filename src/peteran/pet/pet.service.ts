import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { PetEntity } from "./pet.entity";
import { Repository } from "typeorm";
import { PetCreateDto, PetUpdateDto } from "./pet.dto";

@Injectable()
export class PetService {
  constructor(
    @InjectRepository(PetEntity)
    private readonly petRepo: Repository<PetEntity>,
  ) {}

  save(petDto: PetCreateDto) {
    petDto['updated_at'] = new Date();
    return this.petRepo.save(petDto);
  }

  findAll() {
    return this.petRepo.find();
  }

  findAllByOwner(ownerUuid: string) {
    return this.petRepo.find({
      where: { owner_uuid: ownerUuid },
    });
  }

  findOne(petUuid: string) {
    return this.petRepo.findOne({ where: { uuid: petUuid } });
  }

  delete(petUuid: string) {
    return this.petRepo.delete(petUuid);
  }

  update(petUuid: string, petDto: PetUpdateDto) {
    return this.petRepo.update(petUuid, petDto);
  }
}
