import { Module } from '@nestjs/common';
import { ConsultItemService } from './consult-item.service';
import { ConsultItemController } from './consult-item.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConsultItemEntity } from "./consult-item.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([ConsultItemEntity])
  ],
  providers: [ConsultItemService],
  controllers: [ConsultItemController],
  exports: [ConsultItemService],
})
export class ConsultItemModule {

}
