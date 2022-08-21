import { Module } from '@nestjs/common';
import { SearchController } from './search.controller';
import { VeteranModule } from "../peteran/veteran/veteran.module";
import { QuestionModule } from "../peteran/question/question.module";
import { AnswerModule } from "../peteran/answer/answer.module";
import { UserModule } from "../peteran/user/user.module";
import { ReservationModule } from "../peteran/reservation/reservation.module";
import { ConsultItemModule } from "../peteran/consult-item/consult-item.module";

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
