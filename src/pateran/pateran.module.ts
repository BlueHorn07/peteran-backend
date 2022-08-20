import { Module } from '@nestjs/common';
import { UserModule } from "./user/user.module";
import { VeteranModule } from "./veteran/veteran.module";
import { PetModule } from "./pet/pet.module";
import { BoardModule } from "./board/board.module";
import { AnswerModule } from "./answer/answer.module";
import { ReservationModule } from "./reservation/reservation.module";
import { ConsultItemModule } from "./consult-item/consult-item.module";

@Module({
  imports: [
    UserModule,
    VeteranModule,
    PetModule,
    BoardModule,
    AnswerModule,
    ReservationModule,
    ConsultItemModule,
  ]
})
export class PateranModule {}
