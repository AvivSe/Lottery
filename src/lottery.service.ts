import { HttpException, HttpStatus, Injectable } from "@nestjs/common";

import { generatePrize } from "./utils/generator.util";
import Ticket, { TicketsMap } from "./tickets/Ticket";


@Injectable()
export class LotteryService {
  private readonly tickets: Map<string, Ticket>;

  constructor() {
    this.tickets = new Map<string, Ticket>();
  }

  getTickets(): TicketsMap {
    return Array.from(this.tickets.values()).reduce(function(prev, curr) {
      prev[curr.id] = curr.isValidate ? curr : null;
      return prev;
    }, {});
  }

  purchase(): string {
    const ticket = generatePrize();
    this.tickets.set(ticket.id, ticket);
    return ticket.id;
  }

  validateTicket(id: string): Ticket {
    if (!this.tickets.has(id)) {
      throw new HttpException("Invalid Ticket Id", HttpStatus.BAD_REQUEST);
    }
    const ticket = this.tickets.get(id);
    ticket.validate();
    ticket.ticketType = ticket.constructor.name;
    return ticket;
  }
}
