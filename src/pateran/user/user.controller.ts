import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { UserService } from "./user.service";
import { UserCreateDto, UserUpdateDto } from "./user.dto";

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {
  }

  @Post()
  createUser(
    @Body() userDto: UserCreateDto
  ) {
    return this.userService.save(userDto);
  }

  @Get()
  getAllUser() {
    return this.userService.findAll();
  }

  @Get(':userUuid')
  getUserById(
    @Param('userUuid') userUuid: string
  ) {
    return this.userService.findOne(userUuid);
  }

  @Delete(':userUuid')
  deleteUser(@Param('userUuid') userUuid: string) {
    return this.userService.delete(userUuid);
  }

  @Put(':userUuid')
  updateUser(
    @Param('userUuid') userUuid: string,
    @Body() userDto: UserUpdateDto
  ) {
    return this.userService.update(userUuid, userDto)
  }
}
