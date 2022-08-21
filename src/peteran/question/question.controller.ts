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

  @Get(':QuestionId')
  getOneQuestion(
    @Param('QuestionId') questionId: number
  ) {
    return this.questionService.findOne(questionId);
  }

  @Delete(':questionId')
  deleteQuestion(@Param('questionId') questionId: number) {
    return this.questionService.delete(questionId);
  }

  @Put(':questionId')
  updateQuestion(
    @Param('questionId') questionId: number,
    @Body() questionDto: QuestionUpdateDto,
  ) {
    return this.questionService.update(questionId, questionDto)
  }
}
