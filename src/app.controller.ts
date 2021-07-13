import { Controller, Get, Param } from "@nestjs/common";
import { LotteryService } from './Lottery.service';
import Ticket from "./tickets/Ticket";

@Controller('/api')
export class AppController {
  constructor(private readonly appService: LotteryService) {}

  @Get()
  getHello(): any {
    return this.appService.getTicketIds();
  }

  @Get('/purchase')
  purchase(): any {
    return this.appService.purchase();
  }

  @Get('/validate-ticket/:id')
  validateTicket(@Param('id') id: string): Ticket {
    return this.appService.validateTicket(id);
  }
}
