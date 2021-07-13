import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { LotteryService } from './Lottery.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [LotteryService],
})
export class AppModule {}
