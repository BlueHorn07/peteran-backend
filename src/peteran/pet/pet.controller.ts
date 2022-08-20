import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { PetService } from "./pet.service";
import { PetCreateDto, PetUpdateDto } from "./pet.dto";

@ApiTags('Pet')
@Controller('pet')
export class PetController {
  constructor(
    private readonly petService: PetService,
  ) {
  }

  @Post()
  createPet(
    @Body() petDto: PetCreateDto
  ) {
    return this.petService.save(petDto);
  }

  @Get()
  getAllPet() {
    return this.petService.findAll();
  }

  @Get('owner/:ownerUuid')
  getAllPetByOwner(
    @Param('ownerUuid') ownerUuid: string
  ) {
    return this.petService.findAllByOwner(ownerUuid);
  }

  @Get(':petUuid')
  getPetById(
    @Param('petUuid') petUuid: string
  ) {
    return this.petService.findOne(petUuid);
  }

  @Delete(':petUuid')
  deletePet(@Param('petUuid') petUuid: string) {
    return this.petService.delete(petUuid);
  }

  @Put(':petUuid')
  updatePet(
    @Param('petUuid') petUuid: string,
    @Body() petDto: PetUpdateDto
  ) {
    return this.petService.update(petUuid, petDto)
  }
}
