import { ApiProperty } from "@nestjs/swagger";

export class UserCreateDto {
  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly email?: string;

  @ApiProperty()
  readonly phone: string;
}

export class UserUpdateDto {
  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly email?: string;

  @ApiProperty()
  readonly phone: string;
}