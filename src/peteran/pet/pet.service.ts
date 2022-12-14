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

  count() {
    return this.petRepo.count();
  }

  findAll() {
    return this.petRepo.find();
  }

  findAllByOwner(ownerId: number) {
    return this.petRepo.find({
      where: { owner_id: ownerId },
    });
  }

  findOne(petId: number) {
    return this.petRepo.findOne({ where: { id: petId } });
  }

  delete(petId: number) {
    return this.petRepo.delete(petId);
  }

  update(petId: number, petDto: PetUpdateDto) {
    return this.petRepo.update(petId, petDto);
  }
}
