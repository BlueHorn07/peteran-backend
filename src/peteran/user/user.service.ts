import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserCreateDto, UserUpdateDto } from "./user.dto";
import { UserEntity } from "./user.entity";
import { randomInteger } from "../../utils/randomize";

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

  count() {
    return this.userRepo.count();
  }

  async randomPick() {
    const count = await this.count();
    const randomIdx = randomInteger(0, count);
    const ret = await this.userRepo.find({
      take: 1,
      skip: randomIdx,
    });
    return ret[0]; 
  }

  findAll() {
    return this.userRepo.find();
  }

  findOne(userId: number) {
    return this.userRepo.findOne({ where: { id: userId } });
  }

  delete(userId: number) {
    return this.userRepo.delete(userId);
  }

  update(userId: number, userDto: UserUpdateDto) {
    userDto['updated_at'] = new Date();
    return this.userRepo.update(userId, userDto);
  }
}
