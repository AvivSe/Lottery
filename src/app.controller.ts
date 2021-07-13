import { Controller, Get, Param } from "@nestjs/common";
import { LotteryService } from './lottery.service';
import Ticket, { TicketsMap } from "./tickets/Ticket";

@Controller('/api')
export class AppController {
  constructor(private readonly appService: LotteryService) {}

  @Get('/get-tickets')
  getTickets(): TicketsMap {
    return this.appService.getTickets()
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
