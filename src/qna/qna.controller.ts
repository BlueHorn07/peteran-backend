import { Controller, Get, Param } from "@nestjs/common";
import { UserService } from "../peteran/user/user.service";
import { VeteranService } from "../peteran/veteran/veteran.service";
import { QuestionService } from "../peteran/question/question.service";
import { AnswerService } from "../peteran/answer/answer.service";
import { ConsultItemService } from "../peteran/consult-item/consult-item.service";


@Controller('qna')
export class QnaController {
  constructor(
    private readonly userService: UserService,
    private readonly veteranService: VeteranService,
    private readonly questionService: QuestionService,
    private readonly answerService: AnswerService,
    private readonly consultItemService: ConsultItemService,
  ) {
  }

  @Get(':questionId')
  async getQnA(
    @Param('questionId') questionId: number
  ) {
    const question = await this.questionService.findOne(questionId);

    question['user'] = await this.userService.findOne(question.author_id);

    const answers = await this.answerService.findByQuestion(question.id);
    for(const answer of answers) {
      const veteran = await this.veteranService.findOne(answer.veteran_id);
      veteran['consult_items'] = await this.consultItemService.findByVeteran(veteran.id);
      answer['veteran'] = veteran;
    }
    question['answers'] = answers;

    return question;
  }
}
