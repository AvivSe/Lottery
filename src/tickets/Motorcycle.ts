import Vehicle from "./Vehicle"

export enum MotorcycleType {
  OffRoad,
  Road,
}

class Motorcycle extends Vehicle {
  type: MotorcycleType;

  constructor(plateNumber: number, color: string, year: number, type: MotorcycleType) {
    super(plateNumber, color, year);
    this.type = type;
  }
}

export default Motorcycle;
