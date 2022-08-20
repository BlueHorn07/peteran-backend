import { ApiProperty } from "@nestjs/swagger";

export class ReservationCreateDto {
  @ApiProperty()
  readonly start_datetime: Date;

  @ApiProperty()
  readonly end_datetime: Date;

  @ApiProperty()
  readonly veteran_id: number; // 중복 저장

  @ApiProperty()
  readonly consultee_id: number;

  @ApiProperty()
  readonly consult_item_id: number;
}
