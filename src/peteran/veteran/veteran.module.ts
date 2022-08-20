import { Module } from '@nestjs/common';
import { VeteranController } from './veteran.controller';
import { VeteranService } from './veteran.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { VeteranEntity } from "./veteran.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([VeteranEntity])
  ],
  controllers: [VeteranController],
  providers: [VeteranService],
  exports: [VeteranService],
})
export class VeteranModule {}
