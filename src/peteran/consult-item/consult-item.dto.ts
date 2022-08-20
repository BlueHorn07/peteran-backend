import { ApiProperty } from "@nestjs/swagger";

export class ConsultItemCreateDto {
  @ApiProperty()
  readonly veteran_id: number;

  @ApiProperty()
  readonly type: string; // phone, zoom, visit

  @ApiProperty()
  readonly price: number;

  @ApiProperty()
  readonly minutes_period: number;
}

export class ConsultItemUpdateDto {
  @ApiProperty()
  readonly veteran_id: number;

  @ApiProperty()
  readonly type: string; // phone, zoom, visit

  @ApiProperty()
  readonly price: number;

  @ApiProperty()
  readonly minutes_period: number;
}