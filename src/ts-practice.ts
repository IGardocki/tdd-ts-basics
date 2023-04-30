// INSTALLATION
// To install ts on VSCode:
// > npm install --save-dev typescript
// > npx tsc ts-practice.ts
// > node ts-practice.js

// function simpleStoryMaker(greeting:string, catNum: number, story:string, vibez:boolean):string {
//     return(`${greeting}! I have ${catNum} cats! ${story}. Was it a vibe? Literally ${vibez}`);
// }


// SIMPLE TYPES

// we use export to export our variables to the test file
// the syntax here is- 
// variableName: type = variableValue
export const myString: string = 'Hello World';
export const myNumber: number = 24;
export const myBoolean: boolean = true;

// SPECIAL TYPES

// the any type means this variable could be of any type (string, number, null, boolean, etc)
export const myAnyType:any = 'I went to yoga';

// the undefined type means the variable will be undefined
export const myUndefined:undefined = undefined;

// the null type means the variable will be of type null
export const myNull: null = null;

// ARRAYS
// to define an array containing items of a certain type, we use the syntax <myType>[]-
export const myStringArr: string[] = ['Romad', 'Smoke', 'Fire', 'Nacho', 'The Detective']
export const myNumArr: number[] = [24, 850, 350, 851];

// TUPLES
// in this case, myTuple is an array that will contain a number as the zeroth value, a string as the first value,
// and a boolean as the second value
export const myTuple: [number, string, boolean] = [24, 'cats', true];

// OBJECT TYPES

// myPet is an object that contain two properties: name, which will be a string, and weight, which will be a number
export const myPet: {name: string, weight:number} = {
    name: 'Romad',
    weight: 20
}

//ENUM TYPES

// an enum is just something that enumerates the values within it.
// So, myCatEnum.Romad would be 0, myCatEnum.Smoke would be 1, and myCatEnum.Fire would be 2.
export enum myCatEnum {
    Romad,
    Smoke,
    Fire,
}

// ALIASES AND INTERFACES

// Here, the type catAge is an alias for the number type
export type catAge = number;
export const theDetectiveAge: catAge = 5;


// An interface is similar to making a new type, but can only be used with objects
// Here, we create a new interface (or type) called ICat, that contains the properties name (which is a string)
// and weight (which is a number)
export interface ICat {
    name: string,
    weight: number,
}

// We create a const called cat that is of the type ICat, setting the name to a string ("Fire"), and the weight
// to a number (12)
export const cat: ICat= {
    name: 'Fire',
    weight: 12
};

// UNION TYPES
// The syntax <type> | <other type> denotes that the variable can be of <type> OR <other type> 
export const myUnionType: string | number = 'hello world';

// FUNCTIONS 

// getCatNumber takes in no parameters, but returns something of type number
export function getCatNumber(): number {
    //I own one cat
    return 1;
}

// myVoidCatFunction takes in no parameters, and returns nothing (as can be seen by ": void")
export function myVoidCatFunction():void {
    console.log('This cat function returns void.');
}

// addCats takes in two parameters (num1, which is a number, and num2, which is also a number) and 
// returns a string
export function addCats(num1: number, num2:number): string {
    return `I have ${num1 + num2} cats!`;
}

// CLASSES

// As discussed, interfaces are a way to define types for objects
interface ICatClass{
    getName: () => string;
    getBreed: () => string | undefined;
}

export class catClass implements ICatClass{
    public constructor(private name:string, private breed?: string){};

    public getName(): string {
        return this.name;
    };

    public getBreed(): string | undefined{
        return this.breed;
    };
};

// BASIC GENERICS 
export function createArr<S, T, U>(value1: S, value2: T, value3: U): [S, T, U] {
    return [value1, value2, value3];
};

export class SimpleGenericClass<T> {
    private _value: T | undefined;
    setValue (value: T):void {
        this._value = value;
    };
    public getValue(): T | undefined {
        return this._value;
    };
};



const story:string = 'I went to yoga'
const vibez: boolean = true;

// const simpleStory = simpleStoryMaker(greeting, catNum, story, vibez);
// console.log(simpleStory)

// export{myNumber, myBoolean, myAnyType, myUndefined, myNull, myStringArr,
// myNumArr, myTuple, myPet, myCatEnum, myUnionType, catAge, theDetectiveAge, addCats}
// export {simpleStoryMaker, myString }