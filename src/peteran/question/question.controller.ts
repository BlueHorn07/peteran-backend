import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { QuestionService } from "./question.service";
import { QuestionCreateDto, QuestionUpdateDto } from "./question.dto";
import { ApiTags } from "@nestjs/swagger";


@ApiTags('Question')
@Controller('question')
export class QuestionController {
  constructor(
    private readonly questionService: QuestionService,
  ) {
  }

  @Post()
  createQuestion(
    @Body() questionDto: QuestionCreateDto
  ) {
    return this.questionService.save(questionDto);
  }

  @Get()
  getAllQuestion() {
    return this.questionService.findAll();
  }

  @Delete(':questionUuid')
  deleteQuestion(@Param('questionUuid') questionUuid: string) {
    return this.questionService.delete(questionUuid);
  }

  @Put(':questionUuid')
  updateQuestion(
    @Param('questionUuid') questionUuid: string,
    @Body() questionDto: QuestionUpdateDto,
  ) {
    return this.questionService.update(questionUuid, questionDto)
  }
}
