import { ApiProperty } from "@nestjs/swagger";

export class AnswerCreateDto {
  @ApiProperty()
  readonly question_id: number;

  @ApiProperty()
  readonly veteran_id: number;

  @ApiProperty()
  readonly content: string;
}

export class AnswerUpdateDto {
  @ApiProperty()
  readonly content: string;
}