# TDD-TS-BASICS
Welcome to the wonderful world of test driven development and Typescript! If you're looking to learn TDD principles while learning TypeScript syntax, you've come to the right place!

First, let's clone this repo:
``` bash
git clone https://github.com/IGardocki/tdd-ts-basics.git
```

Change dirs into that directory:
``` bash
cd tdd-ts-basics
```

And then change into the exercises branch:
``` bash
git checkout exercises
```

And then open in VSCode:
``` bash
code .
```

Cool! Now we're cooking with gas! Before we get started, let's learn a bit about TDD and TS!

### What is TDD?
Test driven development enables developers to maintain a tight
sub-sixty-second feedback loop. The three laws of TDD are: 

1. Write _NO production code_ except to pass a failing test.
1. Write _only enough of a test_ to demonstrate a failure.
1. Write _only enough production code_ to pass the test.

More concisely:

Red (make it fail) -> Green (make it pass) -> Refactor (make it pretty).

### What is TypeScript?
TypeScript is a typed version of JavaScript, meaning that devs can specify what types variables should be. This can prevent errors from trying to use variables as they are not meant to be used.

### Category Theory
Category theory is an important foundation in understanding the typing systems of TS (and other programming languages!). You can learn more about it here: https://en.wikipedia.org/wiki/Category_theory.

# Let's Get Started!
In VSCode, let's press ctrl+shift+` to open a terminal. Then, let's rock a 
``` bash
npm install
```
to install all of our packages.

### File structure
In this repo, we'll see we have a src folder, which contains a __test__ folder, as well as a ts-practice.ts file! The __test__ folder contains a ts-practice.spec.ts file, which is where we'll write our tests!

##### Loop 1
Navigate to the ts-practice.spec.ts file, open it, and copy this code in:

``` typescript
describe('Test should', () => {
    test('pass', () => {
        expect(true).toBe(true);
    });
});
```
in the VSCode terminal, run
``` bash
npm run test:watch
```

And you should see this test passed!

But what exactly is happening here?
- The describe block (describe(...)) describes a class/function/variable that you are trying to test
- The test block (test(...)) describes the specific thing you are trying to test. Note that a describe block can have multiple tests within it.
- Finally, the expect block within the test block compares your expected value (in this case, true) to the received value (in this case, also true).

###### Your turn
Change this test so that it fails. And then, restore it so that it passes.


