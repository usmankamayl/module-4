 export class Car  {
    #maxTank;
    constructor(brand, model, maxTank) {
        this.brand = brand;
        this.model = model;
        this.#maxTank = maxTank;
        this.nowTank = Math.floor(Math.random() * maxTank);
    }

    getTitle() {
        return `${this.brand} ${this.model}`;
    }

    setModel(model) {
        this.model = model;
        return this;
    }

     get needPetrol() {
         return this.#maxTank - this.nowTank;
     }

     fillUp() {
        this.nowTank = this.#maxTank;
        return this;
     }

     get maxTank() {
        return this.#maxTank;
     }

     static string = 'Новый автомиль '

     static logger(str) {
         console.log(str);
     }

     static from({brand, model, maxTank}) {
        const car = new Car(brand, model, maxTank);
        Car.logger(Car.string + car.getTitle());
        return car;
     }
}


export class PassengerCar extends Car {
    typeCar = 'passanger';
     constructor(brand, model, maxTank, typeFuel = 'petrol') {
         super(brand, model, maxTank);
         this.typeFuel = typeFuel;
     }
}


 export class Truck extends Car {
     typeCar = 'truck';
     constructor(brand, model, maxTank, typeFuel = 'diesel') {
         super(brand, model, maxTank);
         this.typeFuel = typeFuel;
     }
 }


// const PassangerCar = function(brand, model, maxTank, typeFuel = 'petrol') {
//     Car.call(this, brand, model, maxTank);
//     this.typeFuel = typeFuel;
//     this.typeCar = 'passanger';
// };
//
// Object.setPrototypeOf(PassangerCar.prototype, Car.prototype);
//
// const Truck = function(brand, model, maxTank, typeFuel = 'diesel') {
//     Car.call(this, brand, model, maxTank);
//     this.typeFuel = typeFuel;
//     this.typeCar = 'truck';
// };
//
// Object.setPrototypeOf(Truck.prototype, Car.prototype);
//
// const bmw = new PassangerCar('BMW', 'X7', 80, 'diesel');
// const mazda = new PassangerCar('Mazda', 'cx-5', 55);
//
// const man = new Truck('MAN', 'TGS', 400);
// console.log('man: ', man.needPetrol());
//
//
// console.log(bmw instanceof Car);
// console.log(man instanceof Car);
// console.log(mazda instanceof Car);
