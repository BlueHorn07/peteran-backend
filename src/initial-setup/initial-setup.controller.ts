import { Controller, Get } from "@nestjs/common";
import { UserService } from "../peteran/user/user.service";
import { EmailPool, NamePool, PetPool, TrainerPool, VetPool } from "../../asset/initial.database";
import { ApiTags } from "@nestjs/swagger";
import { randomInteger, sample } from "../utils/randomize";
import { PetService } from "../peteran/pet/pet.service";
import { VeteranService } from "../peteran/veteran/veteran.service";

@ApiTags('initial-setup')
@Controller('initial-setup')
export class InitialSetupController {
  constructor(
    private readonly userService: UserService,
    private readonly petService: PetService,
    private readonly veteranService: VeteranService,
  ) {
  }

  @Get('user')
  async setupUsers () {
    const initialUserCount = 100;
    [...Array(initialUserCount).keys()].map(async () => {
      await this.userService.save({
        name: sample(NamePool.familyNames) + sample(NamePool.lastNames),
        email: sample(EmailPool.emailFirst) + '@' + sample(EmailPool.emailDomains),
        phone: `010-${randomInteger(1000, 9999)}-${randomInteger(1000, 9999)}`,
      });
    })

    return this.userService.count();
  }


  @Get('pet')
  async setupPets () {
    const initialPetCount = 100;
    [...Array(initialPetCount).keys()].map(async () => {
      const randomUser = await this.userService.randomPick();
      await this.petService.save({
        owner_uuid: randomUser.uuid,
        name: sample(PetPool.names),
        breed: sample(PetPool.breeds),
        age: randomInteger(2, 16),
        height: randomInteger(15, 90),
        weight: randomInteger(10, 35),
        description: sample(PetPool.descriptions)
      });
    })
    return this.petService.count();
  }

  @Get('veteran')
  async setupVeteran () {
    [...Array(50).keys()].map(async () => {
      await this.veteranService.save({
        name: sample(NamePool.familyNames) + sample(NamePool.lastNames),
        type: 'vet',
        email: sample(EmailPool.emailFirst) + '@' + sample(EmailPool.emailDomains),
        phone: `010-${randomInteger(1000, 9999)}-${randomInteger(1000, 9999)}`,
        location: sample(VetPool.locationStarts) + ' ' + sample(VetPool.locationLasts),
        field: [sample(VetPool.fields), sample(VetPool.fields)],
        short_description: sample(VetPool.descriptions)
      })
    });

    [...Array(50).keys()].map(async () => {
      await this.veteranService.save({
        name: sample(NamePool.familyNames) + sample(NamePool.lastNames),
        type: 'trainer',
        email: sample(EmailPool.emailFirst) + '@' + sample(EmailPool.emailDomains),
        phone: `010-${randomInteger(1000, 9999)}-${randomInteger(1000, 9999)}`,
        location: sample(TrainerPool.locationStarts) + ' ' + sample(TrainerPool.locationLasts),
        field: [sample(TrainerPool.fields), sample(TrainerPool.fields)],
        short_description: sample(TrainerPool.descriptions)
      })
    })
    return this.veteranService.count();
  }
}
