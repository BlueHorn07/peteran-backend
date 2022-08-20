import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { AnswerService } from "./answer.service";
import { AnswerCreateDto, AnswerUpdateDto } from "./answer.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Answer')
@Controller('answer')
export class AnswerController {
  constructor(
    private readonly answerService: AnswerService,
  ) {
  }

  @Post()
  createAnswer(
    @Body() answerDto: AnswerCreateDto
  ) {
    return this.answerService.save(answerDto);
  }

  @Get()
  getAllAnswer() {
    return this.answerService.findAll();
  }

  @Delete(':answerId')
  deleteAnswer(@Param('answerId') answerId: number) {
    return this.answerService.delete(answerId);
  }

  @Put(':answerId')
  updateAnswer(
    @Param('answerId') answerId: number,
    @Body() answerDto: AnswerUpdateDto,
  ) {
    return this.answerService.update(answerId, answerDto)
  }
}
