const cars = [
  {
    brand: "Opel",
    model: "Corsa",
    fuelType: "diesel",
  },
  {
    brand: "BMW",
    model: "Serie 1",
    fuelType: "benzina",
  },
  {
    brand: "Audi",
    model: "A7",
    fuelType: "benzina",
  },
  {
    brand: "Opel",
    model: "Insignia",
    fuelType: "diesel",
  },
  {
    brand: "Tesla",
    model: "Model S",
    fuelType: "elettrico",
  },
  {
    brand: "Fiat",
    model: "Panda",
    fuelType: "metano",
  },
  {
    brand: "Fiat",
    model: "Punto",
    fuelType: "gpl",
  },
  {
    brand: "Mercedes",
    model: "GLA",
    fuelType: "benzina",
  },
  {
    brand: "Ferrari",
    model: "LaFerrari",
    fuelType: "benzina",
  },
  {
    brand: "Volkswagen",
    model: "Touareg",
    fuelType: "diesel",
  },
];

const gasCars = cars.filter((car) => car.fuelType === "benzina");
const dieselCars = cars.filter((car) => car.fuelType === "diesel");
const otherCars = cars.filter((car) => car.fuelType !== "benzina" && car.fuelType !== "diesel");
console.log(gasCars, dieselCars, otherCars);
