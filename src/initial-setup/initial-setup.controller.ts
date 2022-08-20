import { Controller, Get } from '@nestjs/common';
import { UserService } from '../peteran/user/user.service';
import {
  AnswerPool, ConsultItemPool,
  EmailPool,
  NamePool,
  PetPool,
  QuestionPool,
  TrainerPool,
  VetPool
} from "./initial.database";
import { ApiTags } from '@nestjs/swagger';
import * as moment from 'moment';
import { randomInteger, sample } from '../utils/randomize';
import { PetService } from '../peteran/pet/pet.service';
import { VeteranService } from '../peteran/veteran/veteran.service';
import { QuestionService } from '../peteran/question/question.service';
import { AnswerService } from '../peteran/answer/answer.service';
import { ConsultItemService } from "../peteran/consult-item/consult-item.service";
import { ReservationService } from "../peteran/reservation/reservation.service";

@ApiTags('initial-setup')
@Controller('initial-setup')
export class InitialSetupController {
  constructor(
    private readonly userService: UserService,
    private readonly petService: PetService,
    private readonly veteranService: VeteranService,
    private readonly questionService: QuestionService,
    private readonly answerService: AnswerService,
    private readonly consultItemService: ConsultItemService,
    private readonly reservationService: ReservationService,
  ) {}

  @Get('user')
  async setupUsers() {
    const initialUserCount = 100;
    [...Array(initialUserCount).keys()].map(async () => {
      await this.userService.save({
        name: sample(NamePool.familyNames) + sample(NamePool.lastNames),
        email:
          sample(EmailPool.emailFirst) + '@' + sample(EmailPool.emailDomains),
        phone: `010-${randomInteger(1000, 9999)}-${randomInteger(1000, 9999)}`,
      });
    });

    return this.userService.count();
  }

  @Get('pet')
  async setupPets() {
    const initialPetCount = 100;
    [...Array(initialPetCount).keys()].map(async () => {
      const randomUser = await this.userService.randomPick();
      await this.petService.save({
        owner_id: randomUser.id,
        name: sample(PetPool.names),
        breed: sample(PetPool.breeds),
        age: randomInteger(2, 16),
        height: randomInteger(15, 90),
        weight: randomInteger(10, 35),
        description: sample(PetPool.descriptions),
      });
    });
    return this.petService.count();
  }

  @Get('veteran')
  async setupVeteran() {
    [...Array(50).keys()].map(async () => {
      await this.veteranService.save({
        name: sample(NamePool.familyNames) + sample(NamePool.lastNames),
        type: 'vet',
        email:
          sample(EmailPool.emailFirst) + '@' + sample(EmailPool.emailDomains),
        phone: `010-${randomInteger(1000, 9999)}-${randomInteger(1000, 9999)}`,
        location:
          sample(VetPool.locationStarts) + ' ' + sample(VetPool.locationLasts),
        field: [sample(VetPool.fields), sample(VetPool.fields)],
        short_description: sample(VetPool.descriptions),
      });
    });

    [...Array(50).keys()].map(async () => {
      await this.veteranService.save({
        name: sample(NamePool.familyNames) + sample(NamePool.lastNames),
        type: 'trainer',
        email:
          sample(EmailPool.emailFirst) + '@' + sample(EmailPool.emailDomains),
        phone: `010-${randomInteger(1000, 9999)}-${randomInteger(1000, 9999)}`,
        location:
          sample(TrainerPool.locationStarts) +
          ' ' +
          sample(TrainerPool.locationLasts),
        field: [sample(TrainerPool.fields), sample(TrainerPool.fields)],
        short_description: sample(TrainerPool.descriptions),
      });
    });
    return this.veteranService.count();
  }

  @Get('question')
  async setupQuestion() {
    [...Array(100).keys()].map(async () => {
      const { title, content } = sample(QuestionPool.titleAndContents);
      const randomUser = await this.userService.randomPick();
      await this.questionService.save({
        author_id: randomUser.id,
        title: title,
        content: content,
      });
    });

    return this.questionService.count();
  }

  @Get('answer')
  async setupAnswer() {
    [...Array(100).keys()].map(async () => {
      const randomQuestion = await this.questionService.randomPick();
      const randomVeteran = await this.veteranService.randomPick();
      await this.answerService.save({
        question_id: randomQuestion.id,
        veteran_id: randomVeteran.id,
        content: sample(AnswerPool.contents),
      });
    });

    return this.answerService.count();
  }

  @Get('consult-item')
  async setupConsultItem() {
    const veterans = await this.veteranService.findAll();
    for (const veteran of veterans) {
      await this.consultItemService.save({
        veteran_id: veteran.id,
        type: 'zoom',
        minutes_period: sample(ConsultItemPool.minutes),
        price: sample(ConsultItemPool.price)
      });
    }
    return this.consultItemService.count();
  }

  @Get('reservation')
  async setupReservation() {
    [...Array(100).keys()].map(async () => {
      const randomUser = await this.userService.randomPick();
      const randomConsultItem = await this.consultItemService.randomPick();
      const timeSelections = ['00', '15', '30', '45'];
      const randomStartDatetime = moment()
        .add(randomInteger(0, 120), 'hour')
        .format(`YYYY-MM-DD hh:${sample(timeSelections)}:00`);
      const endDatetime = moment(randomStartDatetime)
        .add(randomConsultItem.minutes_period, 'minutes')
        .format('YYYY-MM-DD hh:mm:00');
      await this.reservationService.save({
        start_datetime: new Date(randomStartDatetime),
        end_datetime: new Date(endDatetime),
        veteran_id: randomConsultItem.veteran_id,
        consultee_id: randomUser.id,
        consult_item_id: randomConsultItem.id,
      });
    });
  }
}
