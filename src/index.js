import './style.css';
//import {Car} from "./js/proto";
import {Car, PassengerCar, Truck} from "./js/Car";

const open = document.querySelector('.open');
const car = document.querySelector('.car');
import {Station} from "./js/station";

const testArray = {
  passangerCar: [
    ['Opel', 'Crossland', 45],
    ['Opel', 'Grandland X', 53],
    ['Mazda', 'cx-5', 55],
    ['BMW', 'M5', 68],
    ['BMW', 'X5', 80],
    ['BMW', 'X5d', 80, 'diesel'],
    ['BMW', 'X3', 65],
    ['BMW', '5', 66],
  ],
  truck: [
    ['MAN', 'TGS', 400],
    ['MAN', 'TGX', 300],
    ['Mercedes-Benz', 'Actros', 450],
    ['Mercedes-Benz', 'Actros L', 650],
    ['Volvo', 'FH16', 700],
    ['Volvo', 'FM', 700],
    ['Volvo', 'FMX', 540],
  ],
};

const getTestCar = () => {
  const typeBool = Math.random() < 0.6;
  const listCar = typeBool ? testArray.passangerCar : testArray.truck;
  const randomCar = listCar[(Math.floor(Math.random() * listCar.length))];
  return typeBool ? new PassengerCar(...randomCar) : new Truck(...randomCar);
};

// const station = new Station([
//   {
//     type: "petrol",
//     count: 2,
//     speed: 5,
//   },
//
//   {
//     type: 'diesel',
//     count: 1,
//     speed: 20,
//   }
// ], '.app');

const station  = new Station([
    {
      type: 'petrol',
    },
    {
      type: 'diesel',
    },
  {
      type: 'gas',
  }
], '.app')

open.addEventListener('click', () => {
  station.init();
  console.log(station, ' station')
  open.remove();
  car.style.display = 'block';
  car.addEventListener('click', () => {
    station.addCarQueue(getTestCar());
  });
});



