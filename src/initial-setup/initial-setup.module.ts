import { Module } from '@nestjs/common';
import { InitialSetupController } from './initial-setup.controller';
import { UserModule } from "../peteran/user/user.module";
import { PetModule } from "../peteran/pet/pet.module";
import { VeteranModule } from "../peteran/veteran/veteran.module";

@Module({
  imports: [UserModule, PetModule, VeteranModule],
  controllers: [InitialSetupController],
})
export class InitialSetupModule {}
