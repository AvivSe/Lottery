import Ticket from "./Ticket";

class Vehicle extends Ticket {

  constructor(plateNumber: number, color: string, year: number) {
    super();
    this.plateNumber = plateNumber;
    this.color = color;
    this.year = year;
  }

  plateNumber: number;
  color: string;
  year: number;
}

export default Vehicle;
