import { planet, BootcampStudent, birthday } from "./script";

console.log("Hell World!");

// VARIABLES
let firstName: string = "Mark";
let likesPizza: boolean = true;
let age: number = 36;

let students: string[] = ["Kat", "Steve", "Logan", "Momo"];
let hikes: boolean[] = [true, false, false, true, false];
let evenNumbers: number[] = [2, 4, 6, 8, 10];

students.push("DJ");
// evenNumbers.push("12"); INVALID VALUE FOR ARRAY OF NUMBERS
console.log(students);
console.log(evenNumbers);

likesPizza = false;

// FORCED RETURN TYPE
function sayHello(name: string): string {
  return `Hello ${name}`;
}

// NON-FORCED RETURN -- CAN RETURN WHATEVER
function sayJello(name: string) {
  return 1;
}

// VOID = NO RETURN
function sayHi(name: string): void {
  console.log(`Hi ${name}`);
}

const highFive = (name: string): void => {
  console.log(`High-fived ${name}`);
};

function calculateChange(total: number, payment: number): number {
  return payment - total;
}

function calculateTotal(listOfNumbers: number[]): number {
  let total: number = 0;
  for (let i = 0; i < listOfNumbers.length; i++) {
    total += listOfNumbers[i];
  }
  return total;
}

///////////////

function add(numOne: number, numTwo: number = 0): number {
  return numOne + numTwo;
}

console.log(add(1, 7));
console.log(add(5));

// let nameOutput: number = sayHello("CARL"); INVALID VALUE FOR NUMBER VARIABLE

sayHi("Paco");
console.log(sayHello("Bill"));
highFive("Alex");

function getAreaOfCircle(radius: number): number {
  return radius * radius * Math.PI;
}
console.log(getAreaOfCircle(5));

function getCircumferenceOfCircle(radius: number): number {
  return radius * 2 * Math.PI;
}
console.log(getCircumferenceOfCircle(5));

function getAreaOfSquare(side: number): number {
  return side * side;
}
console.log(getAreaOfSquare(5));

function getAreaOfTriangle(base: number, height: number): number {
  return (base * height) / 2;
}
console.log(getAreaOfTriangle(10, 15));

// DEFINING AN INTERFACE
interface Person {
  firstName: string;
  lastName: string;
}

// USING AN INTERFACE AS A TYPE
function greeter(person: Person): void {
  console.log(`Hi ${person.firstName}`);
}

// USING AN INTERFACE TO CREATE A VARIABLE
let myPerson: Person = {
  firstName: "Awesome Bill",
  lastName: "From Dawsonville",
};

greeter(myPerson);

interface Pet {
  breed: string;
  name: string;
  age: number;
}

let tank: Pet = {
  breed: "Wiener-Pit",
  name: "Tank",
  age: 2.5,
};

let snoopy: Pet = {
  breed: "Beagle",
  name: "Snoopy",
  age: 10,
};

// greeter(snoopy); //INVALID

interface Car {
  make: string;
  model: string;
  color: string;
}

function carVar(car: Car): void {
  console.log(`My ${car.make} ${car.model} is ${car.color}`);
}

let myCar: Car = {
  make: "Ford",
  model: "Tempo",
  color: "Teal",
};

carVar(myCar);

console.log(planet);
