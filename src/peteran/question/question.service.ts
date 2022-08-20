import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from "typeorm";
import { QuestionEntity } from './question.entity';
import { QuestionCreateDto, QuestionUpdateDto } from "./question.dto";
import { randomInteger } from "../../utils/randomize";

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(QuestionEntity)
    private readonly questionRepo: Repository<QuestionEntity>,
  ) {}

  save(questionDto: QuestionCreateDto) {
    questionDto['updated_at'] = new Date();
    return this.questionRepo.save(questionDto);
  }

  count() {
    return this.questionRepo.count();
  }

  async randomPick() {
    const count = await this.count();
    const randomIdx = randomInteger(0, count);
    const ret = await this.questionRepo.find({
      take: 1,
      skip: randomIdx,
    });
    return ret[0];
  }


  update(questionUuid: string, questionDto: QuestionUpdateDto) {
    questionDto['updated_at'] = new Date();
    return this.questionRepo.update(questionUuid, questionDto);
  }

  delete(questionUuid: string) {
    return this.questionRepo.delete(questionUuid);
  }

  findAll() {
    return this.questionRepo.find();
  }

  findByKeywordContain(keyword: string, take = 10) {
    const qb = this.questionRepo.createQueryBuilder();

    return qb
      .select('*')
      .where(`LOWER(title) LIKE '%${keyword.toLowerCase()}%'`)
      .orWhere(`LOWER(content) LIKE '%${keyword.toLowerCase()}%'`)
      .limit(take)
      .getRawMany();
  }

  findOne(questionUuid: string) {
    return this.questionRepo.findOne({
      where: { uuid: questionUuid },
    });
  }

  findByAuthor(authorUuid: string) {
    return this.questionRepo.find({
      where: { author_uuid: authorUuid },
    });
  }
}
