let userName: string = 'Vihaan';
let hasLoggedIn: boolean = true;

// hasLoggedIn += 'Vakacharla';

console.log(hasLoggedIn);

let myNumber:number = 10;
let myRegex: RegExp = /foo/;

const names: string [] = userName.split("");

const myPerson: {
    first: string,
    last: string
} = {
    first: 'vihaan',
    last: 'vakacharla',
    // cool: true - throws error
}

interface Person {
    firstName: string,
    lastName: string,
    age: number,
    hobbies: string []
}

const employee1: Person = {
    firstName: 'Sathya',
    lastName: 'Vakacharla',
    age: 30,
    hobbies: ['xyz', 'abc']
}

//error scenario - employee 2 with person interface
/* const employee2: Person = {
    firstName: null,
    lastName: true,
    age: '30',
    hobbies: ['xyz', 3]
}*/

/* to add dynamic values use Record utility*/
const ids: Record<number, string> = {
    10: 'a',
    20: 'b'
}
ids[30] = 'c';