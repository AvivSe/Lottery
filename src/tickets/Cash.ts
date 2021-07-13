import Ticket from './Ticket'

class Cash extends Ticket {
  amount: number;

  constructor(amount: number) {
    super();
    this.amount = amount;
  }

}

export default Cash;
