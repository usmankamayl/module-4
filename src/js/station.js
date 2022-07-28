import {Column} from "./column";
import {RenderStation, renderStation} from "./renderStation"

export class Station {
    #queue = [];
    #filling = [];
    #ready = [];
    constructor(typeStation, renderApp = null) {
        this.typeStation = typeStation;
        this.renderApp = renderApp;
        this.renderStation = null;
    }

    get filling() {
        return this.#filling;
    }

    get queue() {
        return this.#queue;
    }

    init() {
        this.createStation(this.typeStation);
        setInterval(() => {
            this.checkQueueTOFilling();
        }, 2000);
    }

    createStation(typeStation) {
        for (const optionStation of typeStation) {
            optionStation.count = optionStation.count || 1;
            for (let i = 0; i < optionStation.count; i++) {
                optionStation.speed = optionStation.speed || 5;
                this.#filling.push(new Column(optionStation.type, optionStation.speed))
            }
        }

        if (this.renderApp) {
            this.renderStation = new RenderStation(this.renderApp, this);
        }
    }

    checkQueueTOFilling() {
        if (this.#queue.length) {
            for (let i =0; i < this.#queue.length; i++) {
                for (let j = 0; j < this.#filling.length; j++) {
                    if (!this.#filling[j].car && this.#queue[i].typeFuel === this.#filling[j].type) {
                        this.#filling[j].car = this.#queue.splice(i, 1)[0];
                        this.fillingGo(this.#filling[j]);
                        this.renderStation.renderStation();
                        break;
                    }
                }
            }
        }
    }

    fillingGo(column) {
        const car = column.car;
        const needPetrol = car.needPetrol;
        let nowTank = car.nowTank;
        const timerId = setInterval(() => {
            nowTank += column.speed;
            if (nowTank >= car.maxTank) {
                clearInterval(timerId);
                const total = car.nowTank - needPetrol;
                car.fillUp();
                column.car = null;
                this.leaveClient({car, total});
            }
        }, 1000)
    }

    leaveClient({car, total}) {
        this.#ready.push(car);
        this.renderStation.renderStation();
    }

    addCarQueue(car) {
        this.#queue.push(car);
        this.renderStation.renderStation();
    }
}
