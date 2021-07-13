import Car, { CarType } from "../tickets/Car";
import Ticket from "../tickets/Ticket";
import Motorcycle, { MotorcycleType } from "../tickets/Motorcycle";
import Lost from "../tickets/Lost";
import Cash from "../tickets/Cash";
import { randomEnumValue } from "./random-enum.util";

const plateNumbers = new Set();
const colors = ['Red', 'Blue', 'Black', 'White'];

const generators = [
  generateCar,
  generateMotorcycle,
  generateCash,
  generateLost,
  // add new prizes here
];

// Generate uniq 7 digits integer
function generatePlateNumber(): number {
  let result = null;

  while(!plateNumbers.has(result)) {
    result = Math.floor(1000 + Math.random() * 9000000);
    plateNumbers.add(result);
  }

  return result;
}

function generateColor(): string {
  return colors[Math.floor(Math.random()*colors.length)];
}

// Generate an year of the current decade
function generateYear(): number {
  const currentYear = new Date().getFullYear();
  return Math.ceil(10*Math.random() + currentYear-10);
}

export function generatePrize(): Ticket {
  return generators[Math.floor(Math.random()*generators.length)]();
}

function generateCar(): Car {
  const plateNumber = generatePlateNumber();
  const color = generateColor();
  const year = generateYear();

  return new Car(plateNumber, color, year, randomEnumValue(CarType));
}

function generateMotorcycle(): Motorcycle {
  const plateNumber = generatePlateNumber();
  const color = generateColor();
  const year = generateYear();

  return new Motorcycle(plateNumber, color, year, randomEnumValue(MotorcycleType));
}

function generateLost(): Lost {
  return new Lost();
}

function generateCash(): Cash {
  return new Cash(1000);
}
