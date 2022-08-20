import { ApiProperty } from "@nestjs/swagger";

export class ConsultItemCreateDto {
  @ApiProperty()
  readonly veteran_uuid: string;

  @ApiProperty()
  readonly type: string;

  @ApiProperty()
  readonly price: number;

  @ApiProperty()
  readonly minutes_period: number;
}

export class ConsultItemUpdateDto {
  @ApiProperty()
  readonly veteran_uuid: string;

  @ApiProperty()
  readonly type: string;

  @ApiProperty()
  readonly price: number;

  @ApiProperty()
  readonly minutes_period: number;
}