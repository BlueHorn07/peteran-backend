import { Controller, Get, Param, Query } from "@nestjs/common";
import { SearchService } from "./search.service";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { QuestionService } from "../question/question.service";
import { AnswerService } from "../answer/answer.service";
import { VeteranService } from "../veteran/veteran.service";
import { UserService } from "../user/user.service";

@ApiTags('Search')
@Controller('search')
export class SearchController {
  constructor(
    private readonly searchService: SearchService,
    private readonly questionService: QuestionService,
    private readonly answerService: AnswerService,
    private readonly veteranService: VeteranService,
    private readonly userService: UserService,
  ) {
  }

  @Get('v1/:keyword')
  @ApiOperation({
    summary: 'Simple Search Endpoint',
    description: 'Search using keyword containing',
  })
  basicSearch(
    @Param('keyword') keyword: string
  ) {
    return this.searchService.searchByKeywordContain(keyword);
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
  async veteranSearch(
    @Param('type') type: string,
    @Param('keyword') keyword: string,
    @Query('take') take: number,
  ) {
    const veterans = await this.veteranService.findByKeywordContain(type, keyword, take);

  }
}
