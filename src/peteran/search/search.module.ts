import { Module } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchController } from './search.controller';
import { VeteranModule } from "../veteran/veteran.module";
import { QuestionModule } from "../question/question.module";
import { AnswerModule } from "../answer/answer.module";
import { UserModule } from "../user/user.module";

@Module({
  imports: [
    VeteranModule,
    QuestionModule,
    AnswerModule,
    UserModule,
  ],
  providers: [SearchService],
  controllers: [SearchController]
})
export class SearchModule {}
