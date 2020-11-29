function car(make,model,price){
    this.make = make;
    this.model = model;
    this.price = price;
}

const BMW = new car("BMW", "SX100", "£20000");
const Tesla = new car("Tesla X", "AutoPilot", "£70000");
car.prototype.year=2017;
console.dir(BMW);
console.dir(Tesla);