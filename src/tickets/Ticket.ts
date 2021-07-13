import { v4 as uuidv4 } from 'uuid';

export type TicketsMap = { [key: string]: Ticket | null };

class Ticket {
  id: string;
  isValidate: boolean;
  date: Date;
  ticketType?: string;

  constructor() {
    this.id = uuidv4();
    this.date = new Date();
  }

  validate() {
    this.isValidate = true;
  }
}

export default Ticket;
