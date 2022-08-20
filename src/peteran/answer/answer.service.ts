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

  count() {
    return this.answerRepo.count();
  }

  findAll() {
    return this.answerRepo.find();
  }

  findOne(answerId: number) {
    return this.answerRepo.findOne({ where: { id: answerId } });
  }

  findByKeywordContain(keyword: string) {
    const qb = this.answerRepo.createQueryBuilder();

    return qb
      .select('*')
      .where(`LOWER(content) LIKE '%${keyword.toLowerCase()}%'`)
      .getRawMany();
  }

  delete(answerId: number) {
    return this.answerRepo.delete(answerId);
  }

  findByVeteran(veteranId: number) {
    return this.answerRepo.find({
      where: { veteran_id: veteranId },
    });
  }

  findByQuestion(questionId: number) {
    return this.answerRepo.find({
      where: { question_id: questionId },
    });
  }

  update(answerId: number, answerDto: AnswerUpdateDto) {
    answerDto['updated_at'] = new Date();
    return this.answerRepo.update(answerId, answerDto);
  }
}
