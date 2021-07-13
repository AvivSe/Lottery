import Vehicle from "./Vehicle";

export enum CarType {
  Mazda,
  Toyota,
}

class Car extends Vehicle {
  type: CarType;

  constructor(plateNumber: number, color: string, year: number, type) {
    super(plateNumber, color, year);
    this.type = type;
  }
}

export default Car;
