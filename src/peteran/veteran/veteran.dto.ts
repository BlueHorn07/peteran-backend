import { ApiProperty } from "@nestjs/swagger";

export class VeteranCreateDto {
  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly type: string; // vet, trainer

  @ApiProperty()
  readonly location: string;

  @ApiProperty()
  readonly email?: string;

  @ApiProperty()
  readonly phone: string;

  @ApiProperty()
  readonly field: string[];

  @ApiProperty()
  readonly short_description: string;
}

export class VeteranUpdateDto {
  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly location: string;

  @ApiProperty()
  readonly email?: string;

  @ApiProperty()
  readonly phone: string;

  @ApiProperty()
  readonly field: string[];

  @ApiProperty()
  readonly short_description: string;
}