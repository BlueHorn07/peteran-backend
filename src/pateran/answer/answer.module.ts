import { Module } from '@nestjs/common';
import { AnswerController } from './answer.controller';
import { AnswerService } from './answer.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { AnswerEntity } from "./answer.entity";

@Module({
  imports: [TypeOrmModule.forFeature([AnswerEntity])],
  controllers: [AnswerController],
  providers: [AnswerService]
})
export class AnswerModule {}
