function addNumbers(x: number, y: number) {
    return x + y;
}

console.log(addNumbers(3, 6));

let num1: bigint;

enum ContractStatus {
    Permanent = 'Permanent',
    Temp = 'Temp',
    Apprentice = 'Apprentice',
}

let employeeSatus: ContractStatus = ContractStatus.Temp;

let var1: unknown;

// var1.length()  //error
// var1.toUpperCase() // error

// we can use type assertion in this case
//  using var as type
var1 = 'me';
console.log((var1 as string).toUpperCase());
// using angular brackets
(<string>var1).toUpperCase();


if (typeof var1 === 'string') { // this is the example of type guarding,
    var1.toLocaleLowerCase(); // typescripts implements type inference if typeof is applied in if statement
}
