function getArray<T>(items: T[]): T[] {
    return new Array<T>().concat(items);
}

const numberArray = getArray<number>([1, 2, 3, 4, 12]);
const stringArray = getArray<string>(['Hello', 'World', 'I', 'Feel', 'Like', 'This', 'Is', 'The', 'New', 'Beginning']);

numberArray.push(12);
stringArray.push('For sure');

console.log(numberArray);
console.log(stringArray);
type validTypes = string | number;
function randomFunction<T extends validTypes, U>(value: T, message: U): T {
    let result: string;
    if (typeof message == 'string') {
        result = message + message;
    }
    return value;
}

interface Identity<T, U> {
    value: T;
    message: U;
}

let returnNumber: Identity<number, string> = {
    value: 123,
    message: 'Hello!',
};

let returnString: Identity<string, boolean> = {
    value: 'world',
    message: false,
};
interface ProcessIdentity<T, U> {
    (value: T, message: U): T;
}

function processIdentity<T, U>(value: T, message: U): T {
    console.log(message);
    return value;
}
