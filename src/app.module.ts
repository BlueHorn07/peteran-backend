import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { PateranModule } from './pateran/pateran.module';
import configuration from "./config/configurations";

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration]
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => configService.get("database"),
      inject: [ConfigService]
    }),
    PateranModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
