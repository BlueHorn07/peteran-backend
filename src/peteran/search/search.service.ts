import { Injectable } from '@nestjs/common';
import { QuestionService } from "../question/question.service";
import { AnswerService } from "../answer/answer.service";
import { VeteranService } from "../veteran/veteran.service";

@Injectable()
export class SearchService {
  constructor(
    private readonly questionService: QuestionService,
    private readonly answerService: AnswerService,
    private readonly veteranService: VeteranService,
  ) {
  }

  async searchByKeywordContain(keyword: string) {
    const searchResult = {};

    searchResult['question']
      = await this.questionService.findByKeywordContain(keyword);
    searchResult['answer']
      = await this.answerService.findByKeywordContain(keyword);
    searchResult['veteran']
      = await this.veteranService.findByKeywordContain('all', keyword);

    return searchResult;
  }

}
