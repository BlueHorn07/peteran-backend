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

  @Get(':userId')
  getUserById(
    @Param('userId') userId: number
  ) {
    return this.userService.findOne(userId);
  }

  @Delete(':userId')
  deleteUser(@Param('userId') userId: number) {
    return this.userService.delete(userId);
  }

  @Put(':userId')
  updateUser(
    @Param('userId') userId: number,
    @Body() userDto: UserUpdateDto
  ) {
    return this.userService.update(userId, userDto)
  }
}
