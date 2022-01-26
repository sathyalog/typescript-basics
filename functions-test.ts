import addNumbers, {addStrings, format, introduce, getName} from "./functions";

console.log(addNumbers(1,2));
// console.log(addNumbers(1,'jack')) // throws error

console.log(addStrings('vihaan','vakacharla'));

// console.log(addStrings('vihaan')); //throws error
// console.log(addStrings('vihaan', 2)); //throws error

console.log(format('vihaan', 2)); // valid

console.log(introduce('Mr', 'Sathya', 'Lavanya', 'Vihaan'));

// console.log(getName());
console.log(getName({first: 'a', last: 'b'}));