import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { PeteranModule } from './peteran/peteran.module';
import configuration from "./config/configurations";
import { InitialSetupModule } from "./initial-setup/initial-setup.module";

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
    PeteranModule,
    InitialSetupModule,
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
