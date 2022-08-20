import { ApiProperty } from "@nestjs/swagger";

export class AnswerCreateDto {
  @ApiProperty()
  readonly question_uuid: string;

  @ApiProperty()
  readonly veteran_uuid: string;

  @ApiProperty()
  readonly content: string;
}

export class AnswerUpdateDto {
  @ApiProperty()
  readonly content: string;
}