
// typeScript basic 
// Any, number, string, boolean, object, Array, Tuple, Enum, undefined, null, void, never, unknown

let myName = "Shahidul Islam";
let age: number;
age = 12;
let isHungry: boolean = false;

type StringOrNumber = number | string;
type direction = 'left' | 'right' | 'top' | 'bottom';

let gameDirection: direction = "right" 

let idNumber: StringOrNumber = 234234;
idNumber = 'gdsfgew444dsa'
idNumber = 122323;

interface Person {
    name: string;
    age: number;
    hobby?: string;
}

type PersonType =  { age: number, name: string,  hobby: string };


let person: Person  = {
    name: " Clever Programmer",
    age: 45,
    hobby: "Nature Photography"
}

let person2 : Person = {
    name: "Someone",
    age: 80,
}

//  Array 
const numbers: (number| string)[] = [33, 40, 50, 80, 'stefjhj'];
const persons: Person[] = [
    { 
        name: " Clever Programmer",
        age: 45,
        hobby: "Nature Photography"
    },
    { 
        name: " Clever Programmer",
        age: 45,
        hobby: "Nature Photography"
    },
    { 
        name: " Clever Programmer",
        age: 45,
        hobby: "Nature Photography"
    }
];


// functions

const greeting = (name: string) : void => {
    console.log(`Hello ${name}`)
}

greeting("Programmer Siam")

const add = (a: number, b: number): number => {
    return a + b 
}

const introduce = ({name, age} : Person) : void => {
    console.log(`Hello, my name is  ${name}, And I'm ${age}!`)
}

introduce({
    name: "Shahidul Islam Siam",
    age: 12,
    hobby: "LOL"
})

const getArray = <Type>(array: Type[]): Type[] => {

    return array
}

getArray<string | number>(['abul', 'babul', 'jabul', 1234,3452 ]);
getArray<number>([ 1,34,1243,21.23]);

// enum

enum programmingLanguage  {
    JavaScript = "JavaScript",
    Python = 'Python',
    TypeScript = "TypeScript",
    C = "C language",
    java = "java",
    kotlin = "kotlin",
    Php = "php",
}

console.log(programmingLanguage.TypeScript)