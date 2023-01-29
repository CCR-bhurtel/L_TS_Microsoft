// function addNumbers(a: number, b: number): number {
//     return a + b;
// }

// let addTwo = function (a: number, b: number): number {
//     return a + b;
// };
type calculator = (x: number, y: number) => number;

function addNumArray(numbers: number[]) {
    let sum: number = 0;
    for (let i: number = 0; i < numbers.length; i++) {
        if (isNaN(numbers[i])) continue;
        sum += numbers[i];
    }
    return sum;
}

console.log(addNumArray([3, 4, 5, 12, 23, 53, 12, 55, 12, 3, 5423]));

const addTwo: calculator = (x: number, y: number): number => x + y;
const difference: calculator = (x: number, y: number): number => Math.abs(x - y);

const calculate = (operation: 'add' | 'subtract'): calculator => {
    if (operation == 'add') {
        return addTwo;
    } else {
        return difference;
    }
};
const sum: number = addTwo(4, 5);

function displayAlert(message: string): void {
    alert('The message is ' + message);
}

// function addTwo(x: number, y?: number): number {
//     if (y) {
//         return x + y;
//     } else {
//         return x;
//     }
// }

// function addTwo(x: number, y: number = 0): number {
//     return x + y;
// }

interface Message {
    text: string;
    sender: string;
    receiver: string;
}

function logMessage({ text, sender, receiver }: Message): void {
    console.log(`To ${receiver}, ${text} From:- ${sender}`);
}
