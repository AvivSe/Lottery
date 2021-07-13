import { Module } from "@nestjs/common";
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from "./app.controller";
import { LotteryService } from "./Lottery.service";

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "client", "build"),
      exclude: ["/api*"]
    })],
  controllers: [AppController],
  providers: [LotteryService]
})
export class AppModule {
}
