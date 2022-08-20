import { ApiProperty } from "@nestjs/swagger";

export class PetCreateDto {
  @ApiProperty()
  readonly owner_uuid: string;

  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly breed: string;

  @ApiProperty()
  readonly age: number;

  @ApiProperty()
  readonly height: number;

  @ApiProperty()
  readonly weight: number;

  @ApiProperty()
  readonly description: string;
}

export class PetUpdateDto {
  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly breed: string;

  @ApiProperty()
  readonly age: number;

  @ApiProperty()
  readonly height: number;

  @ApiProperty()
  readonly weight: number;

  @ApiProperty()
  readonly description: string;
}