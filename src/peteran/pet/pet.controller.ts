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

  @Get('owner/:ownerId')
  getAllPetByOwner(
    @Param('ownerId') ownerId: number
  ) {
    return this.petService.findAllByOwner(ownerId);
  }

  @Get(':petId')
  getPetById(
    @Param('petId') petId: number
  ) {
    return this.petService.findOne(petId);
  }

  @Delete(':petId')
  deletePet(@Param('petId') petId: number) {
    return this.petService.delete(petId);
  }

  @Put(':petId')
  updatePet(
    @Param('petId') petId: number,
    @Body() petDto: PetUpdateDto
  ) {
    return this.petService.update(petId, petDto)
  }
}
