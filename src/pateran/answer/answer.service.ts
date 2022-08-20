import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AnswerEntity } from './answer.entity';
import { Repository } from 'typeorm';
import { AnswerCreateDto, AnswerUpdateDto } from "./answer.dto";

@Injectable()
export class AnswerService {
  constructor(
    @InjectRepository(AnswerEntity)
    private readonly answerRepo: Repository<AnswerEntity>,
  ) {}

  save(answerDto: AnswerCreateDto) {
    answerDto['updated_at'] = new Date();
    return this.answerRepo.save(answerDto);
  }

  findAll() {
    return this.answerRepo.find();
  }

  findOne(answerUuid: string) {
    return this.answerRepo.findOne({ where: { uuid: answerUuid } });
  }

  delete(answerUuid: string) {
    return this.answerRepo.delete(answerUuid);
  }

  findByVeteran(veteranUuid: string) {
    return this.answerRepo.find({
      where: { veteran_uuid: veteranUuid },
    });
  }

  findByQuestion(questionUuid: string) {
    return this.answerRepo.find({
      where: { question_uuid: questionUuid },
    });
  }

  update(answerUuid: string, answerDto: AnswerUpdateDto) {
    answerDto['updated_at'] = new Date();
    return this.answerRepo.update(answerUuid, answerDto);
  }
}
