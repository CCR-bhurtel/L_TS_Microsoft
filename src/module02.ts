//  union and intersetion types

// union type
let strOrNum: number | string; // union type this can be complex too

function addStringOrNum(a: number | string, b: number | string) {
    if (typeof a == 'number' && typeof b == 'number') {
        return a + b;
    } else if (typeof a == 'string' && typeof b == 'string') {
        return a.concat(b);
    } else {
        throw Error('Both a and b must be of same type');
    }
}

console.log(addStringOrNum(12, 12));

// intersection types
//  intersection type usually go with interfaces
interface Manager {
    stockPlan: boolean;
}

interface Employee {
    name: string;
    age: number;
    joinedDate: Date;
}

type ManagementEmployee = Manager & Employee;

let newManager: ManagementEmployee = {
    name: 'Rowan',
    age: 35,
    joinedDate: new Date('20233-1-25'),
    stockPlan: true,
};

// Literal narrowing :- process of going from infinite number of possible cases to few possible cases
type possibleOutcomes = 1 | 2 | 3 | 4 | 5 | 6;

let diceResult: possibleOutcomes;

// diceResult = 7; // error
diceResult = 3;
diceResult = 2;

//  list types
// arrays
let numbers: number[] = [2, 4, 5];
let employees: string[] = ['Rowan', 'Alan', 'Adam', 'Ellie', 'Hamish'];

// Tuples
type employee = [string, number, boolean]; // name, age, boardMember
let employee1: employee = ['Adam', 32, true];
