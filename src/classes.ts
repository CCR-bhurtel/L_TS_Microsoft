class Car {
    //properties
    private _make: string;
    private _color: string;
    private _doors: number;
    private static noOfCars: number = 0;

    //constructor
    constructor(make: string, color: string, doors: number = 4) {
        this._color = color;
        this._make = make;
        if (doors % 2 == 0) {
            this._doors = doors;
        } else {
            throw new Error('number of doors must be even');
        }
        Car.noOfCars++;
    }

    //Accessors
    get make(): string {
        return this._make;
    }

    set make(make: string) {
        this._make = make;
    }

    get doors(): number {
        return this._doors;
    }

    set doors(doors: number) {
        if (doors % 2 == 0) {
            this._doors = doors;
        } else {
            throw new Error('Door must be an even number');
        }
    }

    //methods
    start(): string {
        return `the car is starting. Vrooooom`;
    }

    accelerate(speed: number): string {
        return `adding ${speed} km/hr speed to the current speed. Vrooooo,/`;
    }

    turn(direction: 'left' | 'right'): string {
        return `Turning ${direction}`;
    }

    brake(): string {
        return `${this.worker()} is stopping.`;
    }
    private worker(): string {
        return this._make;
    }
    public static getNumberOfcars(): number {
        return Car.noOfCars;
    }
}

const myCar = new Car('Lambo', 'red', 2);
let myCar2 = new Car('Galaxy Motors', 'blue', 2);

console.log(myCar.make); // accessing through getter
// console.log(myCar._make); // accessing property directly
// myCar.accelerate();
console.log(Car.getNumberOfcars());

class ElectricCar extends Car {
    private _range: number;
    constructor(range: number, make: string, color: string, doors: number) {
        super(make, color, doors);
        this._range = range;
    }
    set range(range: number) {
        this._range = range;
    }
    get range(): number {
        return this._range;
    }
}
