"use strict";
// INSTALLATION
// To install ts on VSCode:
// > npm install --save-dev typescript
// > npx tsc ts-practice.ts
// > node ts-practice.js
exports.__esModule = true;
exports.theDetectiveAge = exports.myUnionType = exports.myCatEnum = exports.myPet = exports.myTuple = exports.myNumArr = exports.myStringArr = exports.myNull = exports.myUndefined = exports.myAnyType = exports.myBoolean = exports.myNumber = exports.myString = void 0;
// function simpleStoryMaker(greeting:string, catNum: number, story:string, vibez:boolean):string {
//     return(`${greeting}! I have ${catNum} cats! ${story}. Was it a vibe? Literally ${vibez}`);
// }
// SIMPLE TYPES
var myString = 'Hello World';
exports.myString = myString;
var myNumber = 24;
exports.myNumber = myNumber;
var myBoolean = true;
exports.myBoolean = myBoolean;
// SPECIAL TYPES
var myAnyType = 'I went to yoga';
exports.myAnyType = myAnyType;
var myUndefined = undefined;
exports.myUndefined = myUndefined;
var myNull = null;
exports.myNull = myNull;
// ARRAYS
var myStringArr = ['Romad', 'Smoke', 'Fire', 'Nacho', 'The Detective'];
exports.myStringArr = myStringArr;
var myNumArr = [24, 850, 350, 851];
exports.myNumArr = myNumArr;
// TUPLES
var myTuple = [24, 'cats', true];
exports.myTuple = myTuple;
// OBJECT TYPES
var myPet = {
    name: 'Romad',
    weight: 20
};
exports.myPet = myPet;
//ENUM TYPES
var myCatEnum;
(function (myCatEnum) {
    myCatEnum[myCatEnum["Romad"] = 0] = "Romad";
    myCatEnum[myCatEnum["Smoke"] = 1] = "Smoke";
    myCatEnum[myCatEnum["Fire"] = 2] = "Fire";
})(myCatEnum || (myCatEnum = {}));
exports.myCatEnum = myCatEnum;
// UNION TYPES
var myUnionType = 'hello world';
exports.myUnionType = myUnionType;
var theDetectiveAge = 5;
exports.theDetectiveAge = theDetectiveAge;
var carYear = 2001;
var carType = "Toyota";
var carModel = "Corolla";
var car = {
    year: carYear,
    type: carType,
    model: carModel
};
console.log(typeof (car.model));
var story = 'I went to yoga';
var vibez = true;
// export {simpleStoryMaker, myString }
