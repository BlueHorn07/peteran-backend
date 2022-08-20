import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserCreateDto, UserUpdateDto } from "./user.dto";
import { UserEntity } from "./user.entity";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}

  save(userDto: UserCreateDto) {
    userDto['updated_at'] = new Date();
    return this.userRepo.save(userDto);
  }

  findAll() {
    return this.userRepo.find();
  }

  findOne(userUuid: string) {
    return this.userRepo.findOne({ where: { uuid: userUuid } });
  }

  delete(userUuid: string) {
    return this.userRepo.delete(userUuid);
  }

  update(userUuid: string, userDto: UserUpdateDto) {
    userDto['updated_at'] = new Date();
    return this.userRepo.update(userUuid, userDto);
  }
}
