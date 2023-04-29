// INSTALLATION
// To install ts on VSCode:
// > npm install --save-dev typescript
// > npx tsc ts-practice.ts
// > node ts-practice.js

// function simpleStoryMaker(greeting:string, catNum: number, story:string, vibez:boolean):string {
//     return(`${greeting}! I have ${catNum} cats! ${story}. Was it a vibe? Literally ${vibez}`);
// }


// SIMPLE TYPES
export const myString: string = 'Hello World';
export const myNumber: number = 24;
export const myBoolean: boolean = true;

// SPECIAL TYPES
export const myAnyType:any = 'I went to yoga';
export const myUndefined:undefined = undefined;
export const myNull: null = null;

// ARRAYS
export const myStringArr: string[] = ['Romad', 'Smoke', 'Fire', 'Nacho', 'The Detective']
export const myNumArr: number[] = [24, 850, 350, 851];

// TUPLES
export const myTuple: [number, string, boolean] = [24, 'cats', true];

// OBJECT TYPES
export const myPet: {name: string, weight:number} = {
    name: 'Romad',
    weight: 20
}

//ENUM TYPES
export enum myCatEnum {
    Romad,
    Smoke,
    Fire,
}

// ALIASES AND INTERFACES
export type catAge = number;
export const theDetectiveAge: catAge = 5;

export interface ICat {
    name: string,
    weight: number,
}

export const cat: ICat= {
    name: 'Fire',
    weight: 12
};

// UNION TYPES
export const myUnionType: string | number = 'hello world';

// FUNCTIONS 
export function getCatNumber(): number {
    //I own one cat
    return 1;
}

export function myVoidCatFunction():void {
    console.log('This cat function returns void.');
}

export function addCats(num1: number, num2:number): string {
    return `I have ${num1 + num2} cats!`;
}

// CLASSES
export class catClass{
    public constructor(private name:string, private breed?: string){};

    public getName(): string {
        return this.name;
    }

    public getBreed(): string | undefined{
        return this.breed;
    }

}

const story:string = 'I went to yoga'
const vibez: boolean = true;

// const simpleStory = simpleStoryMaker(greeting, catNum, story, vibez);
// console.log(simpleStory)

// export{myNumber, myBoolean, myAnyType, myUndefined, myNull, myStringArr,
// myNumArr, myTuple, myPet, myCatEnum, myUnionType, catAge, theDetectiveAge, addCats}
// export {simpleStoryMaker, myString }