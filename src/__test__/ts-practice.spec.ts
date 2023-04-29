// import {myString, myNumber, myBoolean, myAnyType, myUndefined, myNull,
// myStringArr, myNumArr, myTuple, myPet, myCatEnum, myUnionType, catAge, theDetectiveAge} from '../ts-practice';

import * as tsPractice from '../ts-practice'
// LOOP 1: a basic test that will pass ////////////////////////////
describe('Test should', ()=> {
    test('pass', () => {
        expect(true).toBe(true);
    });
});

// LOOP 2: user writes a basic test that will fail ////////////////////
// THEY SHOULD COMMENT THIS OUT AFTER

// TODO: Write a test that will fail!
// describe('Test should', ()=> {
//     test('pass', () => {
//         expect(true).toBe(false);
//     });
// });

// SIMPLE TYPE TESTS
describe('myString should', () => {
    test('be a string', () => {
        expect(typeof(tsPractice.myString)).toBe('string');
    });
});

describe('myNumber should', () => {
    test('be a number', () => {
        expect(typeof(tsPractice.myNumber)).toBe('number');
    });
});

describe('myBoolean should', () => {
    test('be a boolean', () => {
        expect(typeof(tsPractice.myBoolean)).toBe('boolean');
    });
});

// SPECIAL TYPE TESTS
describe('myAnyType should', () => {
    test('be of the correct type', () => {
        // pick a type of the variable you will define, and update
        // the code to reflect this!
        expect(typeof(tsPractice.myAnyType)).toBe('string')
    })
})

describe('myUndefined should', () => {
    test('be of undefined type', () => {
        expect(typeof(tsPractice.myUndefined)).toBe('undefined');
    });
});

describe('myNull should', () => {
    test('be of null type', () => {
        expect(typeof(tsPractice.myNull)).toBe('object');
    });
});

describe('myStringArr', () => {
    test('should not not contain non-string elements', () => {
        const nonStringArray = tsPractice.myStringArr.filter((arrayItem) => typeof(arrayItem) !== 'string');
        expect(nonStringArray.length).toBe(0);
    });
});

// ARRAY TESTS
describe('myNumArr', () => {
    test('should not contain any non-number elements', () => {
        const nonNumberArray = tsPractice.myNumArr.filter((arrayItem) => typeof(arrayItem) !== 'number');
        expect(nonNumberArray.length).toBe(0);
    });
});

// TUPLE TESTS
describe('myTuple should', () => {
    test('have a number as the zeroth element', () => {
        expect(typeof(tsPractice.myTuple[0])).toBe('number');
    });
    test('have a string as the first element', () => {
        expect(typeof(tsPractice.myTuple[1])).toBe('string');
    });
    test('have a boolean as the second element', () => {
        expect(typeof(tsPractice.myTuple[2])).toBe('boolean');
    });
})

// OBJECT TESTS
describe('myPet should', () => {
    test('have a name' ,() => {
        expect(typeof(tsPractice.myPet.name)).toBe('string')
    });
    test('have a weight', () => {
        expect(typeof(tsPractice.myPet.weight)).toBe('number');
    });
});

// ENUM TESTS
describe('myCatEnum should', () => {
    test('return appropriate numbers for values', () => {
        expect(tsPractice.myCatEnum.Romad).toBe(0);
        expect(tsPractice.myCatEnum.Smoke).toBe(1);
        expect(tsPractice.myCatEnum.Fire).toBe(2);
    })
})

// ALIASES AND INTERFACES TYPES
describe('theDetectiveAge should', () => {
    test('be of type number', () => {
        expect(typeof(tsPractice.theDetectiveAge)).toBe('number');
    })
})

// UNION TYPE TESTS
describe('myUnionType', () => {
    test('be of type string or number', () => {
        const typeCheck = typeof(tsPractice.myUnionType) === 'string' || typeof(tsPractice.myUnionType) === 'number';
        expect(typeCheck).toBe(true);
    })
})

// FUNCTION TESTS
describe('getCatNumber function should', () => {
    test('return number of cats I own', () => {
        expect(tsPractice.getCatNumber()).toBe(1);
    });
});

describe('myVoidCatFunction should', () => {
    test('return nothing', () => {
        expect(tsPractice.myVoidCatFunction()).toBeUndefined();
    })
})

describe('addCats function should', () => {
    test('Add numbers to give total cat number', () => {
        const res = tsPractice.addCats(1,1);
        expect(res).toBe('I have 2 cats!');
    });
});


// CLASS TESTS
describe('catClass should', () => {
    test('return the proper name', () => {
        const cat = new tsPractice.catClass('Pickles');
        expect(cat.getName()).toBe('Pickles');
    });
    test('return name and breed', () =>{
        const cat = new tsPractice.catClass('Pickles', 'Sphinx');
        expect(cat.getName()).toBe('Pickles');
        expect(cat.getBreed()).toBe('Sphinx');
    })
})




// describe('simpleStory should', () => {
//     test('tell a simple story!', () => {
//         const greeting:string = 'Hello World';
//         const catNum: number = 5;
//         const story:string = 'We have singing bowls.';
//         const vibez:boolean= true;
//         const testStory :string = simpleStoryMaker(greeting, catNum, story, vibez);
//         expect(testStory).toBe(`${greeting}! I have ${catNum} cats! ${story}. Was it a vibe? Literally ${vibez}`);

//     });
// });