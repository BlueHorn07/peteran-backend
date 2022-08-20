import { Module } from '@nestjs/common';
import { SearchController } from './search.controller';
import { VeteranModule } from "../veteran/veteran.module";
import { QuestionModule } from "../question/question.module";
import { AnswerModule } from "../answer/answer.module";
import { UserModule } from "../user/user.module";
import { ReservationModule } from "../reservation/reservation.module";
import { ConsultItemModule } from "../consult-item/consult-item.module";

@Module({
  imports: [
    VeteranModule,
    QuestionModule,
    AnswerModule,
    UserModule,
    ConsultItemModule,
    ReservationModule,
  ],
  controllers: [SearchController]
})
export class SearchModule {}
