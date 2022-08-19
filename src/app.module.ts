import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './pateran/user/user.module';
import { VeteranModule } from './pateran/veteran/veteran.module';
import { PetModule } from './pateran/pet/pet.module';
import { BoardModule } from './pateran/board/board.module';
import { QuestionModule } from './pateran/question/question.module';
import { AnswerModule } from './pateran/answer/answer.module';
import { ReservationModule } from './pateran/reservation/reservation.module';
import { ConsultItemModule } from './pateran/consult-item/consult-item.module';
import configuration from './config/configurations';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration]
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => configService.get('database'),
      inject: [ConfigService],
    }),
    UserModule,
    VeteranModule,
    PetModule,
    BoardModule,
    QuestionModule,
    AnswerModule,
    ReservationModule,
    ConsultItemModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
