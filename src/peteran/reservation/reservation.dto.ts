import { ApiProperty } from "@nestjs/swagger";

export class ReservationCreateDto {
  @ApiProperty()
  readonly start_datetime: Date;

  @ApiProperty()
  readonly end_datetime: Date;

  @ApiProperty()
  readonly veteran_uuid: string;

  @ApiProperty()
  readonly consultee_uuid: string;

  @ApiProperty()
  readonly consult_item_uuid: string;
}
