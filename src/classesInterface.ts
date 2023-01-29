interface Vehicle {
    _make: string;
    _color: string;
    _doors: number;
    start(): string;
    accelerate(speed: number): string;
    turn(dirction: 'left' | 'right'): string;
}
// Interfaces solely defines how data is structured in the program
// But classes defines the implementation details too
class Cars implements Vehicle {
    //properties
    _make: string;
    _color: string;
    _doors: number;
    static noOfCars: number = 0;

    //constructor
    constructor(make: string, color: string, doors: number = 4) {
        this._color = color;
        this._make = make;
        if (doors % 2 == 0) {
            this._doors = doors;
        } else {
            throw new Error('number of doors must be even');
        }
        Cars.noOfCars++;
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
    worker(): string {
        return this._make;
    }
    public static getNumberOfcars(): number {
        return Cars.noOfCars;
    }
}
