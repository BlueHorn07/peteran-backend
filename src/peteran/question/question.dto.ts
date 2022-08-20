import { ApiProperty } from "@nestjs/swagger";

export class QuestionCreateDto {
  @ApiProperty()
  readonly author_uuid: string;

  @ApiProperty()
  readonly title: string;

  @ApiProperty()
  readonly content: string;
}

export class QuestionUpdateDto {
  @ApiProperty()
  readonly title: string;

  @ApiProperty()
  readonly content: string;
}