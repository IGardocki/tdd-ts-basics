// INSTALLATION
// To install ts on VSCode:
// > npm install --save-dev typescript
// > npx tsc ts-practice.ts
// > node ts-practice.js

// function simpleStoryMaker(greeting:string, catNum: number, story:string, vibez:boolean):string {
//     return(`${greeting}! I have ${catNum} cats! ${story}. Was it a vibe? Literally ${vibez}`);
// }

// SIMPLE TYPES
const myString: string = 'Hello World';
const myNumber: number = 24;
const myBoolean: boolean = true;

// SPECIAL TYPES
const myAnyType: any = 'I went to yoga';
const myUndefined:undefined = undefined;
const myNull: null = null;

// ARRAYS
const myStringArr: string[] = ['Romad', 'Smoke', 'Fire', 'Nacho', 'The Detective']
const myNumArr: number[] = [24, 850, 350, 851];

// TUPLES
const myTuple: [number, string, boolean] = [24, 'cats', true];

// OBJECT TYPES
const myPet: {name: string, weight:number} = {
    name: 'Romad',
    weight: 20
}

//ENUM TYPES
enum myCatEnum {
    Romad,
    Smoke,
    Fire,
}

// ALIASES AND INTERFACES
type catAge = number;
const theDetectiveAge: catAge = 5;

interface ICat {
    name: string,
    weight: number,
}

const cat: ICat= {
    name: 'Fire',
    weight: 12
};

// UNION TYPES
const myUnionType: string | number = 'hello world';

// FUNCTIONS 
function addCats(num1: number, num2:number): string {
    return `I have ${num1 + num2} cats!`;
}


const story:string = 'I went to yoga'
const vibez: boolean = true;

// const simpleStory = simpleStoryMaker(greeting, catNum, story, vibez);
// console.log(simpleStory)

export{myString, myNumber, myBoolean, myAnyType, myUndefined, myNull, myStringArr,
myNumArr, myTuple, myPet, myCatEnum, myUnionType, catAge, theDetectiveAge}
// export {simpleStoryMaker, myString }