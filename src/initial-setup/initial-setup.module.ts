import { Module } from '@nestjs/common';
import { InitialSetupController } from './initial-setup.controller';
import { UserModule } from "../peteran/user/user.module";
import { PetModule } from "../peteran/pet/pet.module";
import { VeteranModule } from "../peteran/veteran/veteran.module";
import { QuestionModule } from "../peteran/question/question.module";
import { AnswerModule } from "../peteran/answer/answer.module";
import { ConsultItemModule } from "../peteran/consult-item/consult-item.module";
import { ReservationModule } from "../peteran/reservation/reservation.module";

@Module({
  imports: [
    UserModule, PetModule,
    VeteranModule,
    ConsultItemModule,
    QuestionModule, AnswerModule,
    ReservationModule
  ],
  controllers: [InitialSetupController],
})
export class InitialSetupModule {}
