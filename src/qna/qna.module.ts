import { Module } from '@nestjs/common';
import { QnaController } from './qna.controller';
import { QuestionModule } from "../peteran/question/question.module";
import { AnswerModule } from "../peteran/answer/answer.module";
import { VeteranModule } from "../peteran/veteran/veteran.module";
import { ConsultItemModule } from "../peteran/consult-item/consult-item.module";
import { UserModule } from "../peteran/user/user.module";

@Module({
  imports: [
    QuestionModule,
    AnswerModule,
    VeteranModule,
    ConsultItemModule,
    UserModule,
  ],
  controllers: [QnaController]
})
export class QnaModule {}
