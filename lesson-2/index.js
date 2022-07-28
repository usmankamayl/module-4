const obj = {};

console.log(obj, ' obj')
console.log(obj.__proto__)


const Car = function (brand, model, maxTank) {
    this.brand = brand;
    this.model = model;
    this.maxTank = maxTank;
}

Car.prototype.foo = function () {
    return  this.brand + ' ' + this.model;
}

console.log(Car, ' Car.prototype')

const mazda = new Car('Mazda', 'cx-5', 55);
console.log(mazda.foo())
console.log(mazda, ' mazda')
