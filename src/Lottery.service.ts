import { v4 as uuidv4 } from 'uuid';
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";

import { generatePrize } from "./utils/generator.util";
import Ticket from "./tickets/Ticket";

@Injectable()
export class LotteryService {
  private tickets: Map<string, Ticket>;

  constructor() {
    this.tickets = new Map<string, Ticket>();
  }
  purchase(): string {
    const uuid = uuidv4();
    this.tickets.set(uuid, generatePrize());
    return uuid;
  }

  getTicketIds(): string[] {
    return Array.from(this.tickets.keys());
  }

  validateTicket(id: string): Ticket {
    if(!this.tickets.has(id)) {
      throw new HttpException('Invalid Ticket Id', HttpStatus.BAD_REQUEST);
    }
    const ticket = this.tickets.get(id);
    return { ticketType: ticket.constructor.name, ...this.tickets.get(id) };
  }
}
