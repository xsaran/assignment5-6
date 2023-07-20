// Name: Sarandeep Singh
// ID: C0888634
// Assignment 5-6

class Car {
  constructor(brand, model, year, color, price, gas) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
    this.price = price;
    this.gas = gas;
  }

  honk() {
    console.log("Tuut tuut");
    console.log(`Brand: ${this.brand}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Color: ${this.color}`);
    console.log(`Price: $${this.price}`);
    console.log(`Gas: ${this.gas} liters`);
  }

  loseGas() {
    const currentYear = new Date().getFullYear();
    const age = currentYear - this.year;
    const gasLoss = age === 0 ? 5 : 5 + age;

    this.gas -= gasLoss;
    this.gas = Math.max(this.gas, 0);
  }
}

// Data for cars
const cars = [
  new Car("Honda", "CR-V", 2023, "Red", 50000, 45),
  new Car("Ford", "F-150", 2020, "Black", 25000, 30),
  new Car("BMW", "X5", 2022, "Green", 60000, 65),
  new Car("Mazda", "CX-5", 2019, "White", 15000, 60),
  new Car("Audi", "Q7", 2018, "Silver", 52000, 47),
  new Car("Kia", "Forte", 2020, "Blue", 21000, 56),
];

// Honk method for cars
cars.forEach((car, index) => {
  console.log(`\n\nCar ${index + 1}:`);
  car.honk();
});

// Car race for 7 turns
for (let turn = 1; turn <= 7; turn++) {
  cars.forEach((car) => car.loseGas());
}

console.log("\nAfter 7 turns, remaining gas:");
cars.forEach((car, index) => {
  console.log(`\nCar ${index + 1}:`, car.gas, "liters");
});
