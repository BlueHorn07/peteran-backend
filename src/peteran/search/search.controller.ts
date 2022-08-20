import { Controller, Get, Param, Query } from "@nestjs/common";
import { ApiParam, ApiTags } from "@nestjs/swagger";
import { QuestionService } from "../question/question.service";
import { AnswerService } from "../answer/answer.service";
import { VeteranService } from "../veteran/veteran.service";
import { UserService } from "../user/user.service";
import { ConsultItemService } from "../consult-item/consult-item.service";
import { ReservationService } from "../reservation/reservation.service";

@ApiTags('Search')
@Controller('search')
export class SearchController {
  constructor(
    private readonly questionService: QuestionService,
    private readonly answerService: AnswerService,
    private readonly veteranService: VeteranService,
    private readonly userService: UserService,
    private readonly consultItemService: ConsultItemService,
    private readonly reservationService: ReservationService,
  ) {
  }

  @Get('qna/:keyword')
  async qnaSearch(
    @Param('keyword') keyword: string,
    @Query('take') take: number,
  ) {
    const questions = await this.questionService.findByKeywordContain(keyword, take)
    for(const question of questions) {
      question['author'] = await this.userService.findOne(question.id);

      const answers = await this.answerService.findByQuestion(question.id);
      for(const answer of answers) {
        answer['veteran'] = await this.veteranService.findOne(answer.veteran_id);
      }
      question['answers'] = answers;
    }
    return questions;
  }


  @Get('veteran/:type/:keyword')
  @ApiParam({
    name: 'type',
    description: 'all/vet/trainer',
  })
  async veteranSearch(
    @Param('type') type: string,
    @Param('keyword') keyword: string,
    @Query('take') take: number,
  ) {
    const veterans = await this.veteranService.findByKeywordContain(type, keyword, take);
    for(const veteran of veterans) {
      veteran['consult_items'] = await this.consultItemService.findByVeteran(veteran.id);
      veteran['reservations'] = await this.reservationService.findAllByVeteran(veteran.id);
    }

    return veterans;
  }
}
