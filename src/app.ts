const addBtn = document.querySelector('#add')! as HTMLButtonElement;
const removeBtn = document.querySelector('#remove')! as HTMLButtonElement;
const list = document.querySelector('#list')! as HTMLUListElement;
const input1 = document.getElementById('num1')! as HTMLInputElement;
// const input2 = document.getElementById('num2')! as HTMLInputElement;
//
// ******** Exercise 1 ********
//
// function add(num1: number, num2: number) {
//   return num1 + num2;
// }

// button.addEventListener('click', function () {
//   console.log(add(+input1.value, +input2.value));
// });

//
// ******** EXERCISE 2 ********
//

// let fruit: string[] = [];

// function workWithArray(arr: string[], value: string, action: 'add' | 'remove') {
//   if (action === 'add') {
//     arr.push(value);
//   } else {
//     const index = arr.indexOf(value);
//     arr.splice(index, 1);
//   }

//   return arr;
// }

// addBtn.addEventListener('click', () => {
//   fruit.push(input1.value);
//   console.log(fruit);
// });

// removeBtn.addEventListener('click', () => {
//   const index = fruit.indexOf(input1.value);
//   fruit.splice(index, 1);
//   console.log(fruit);
// });

let age: number = 50;
let moduleSecondName: string = 'Max';
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined = undefined;
let callback: Function = (a: number): number => {
  return 100 + a;
};

//UNKNOWN

let some: unknown;
some = 'Text';

let str: string;

if (typeof some === 'string') {
  // typeguard method
  str = some;
}

let person = ['Max', 21];
let typescriptedPerson: [name: string, age: number] = ['Max', 21];

//ENUM

enum Toggle {
  LOADING,
  READY,
}

const isLoading = {
  status: Toggle.LOADING,
};

if (isLoading.status === Toggle.READY) {
  console.log('The page is loading now');
} else {
  console.log('The loading is already ready');
}

//UNION

let doubleTypedEl: string | number; //union Type
doubleTypedEl = 'Hey';
doubleTypedEl = 10;

//LITERAL

let literalTyped: 'enable' | 'disable';

// enum Toggle2 {
//   enable,
//   disable,
// }

//FUNCTIONS

function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}

//CUSTOM TYPES

type Page = {
  title: string;
  likes: number;
  accounts: string[];
  status: 'open' | 'close';
  details?: {
    createAt: string;
    updateAt: string;
  };
};

const page1: Page = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: '2021-01-01',
    updateAt: '2021-05-01',
  },
};

const page2 = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
};

//
// ******** EXERCISE 3 ********
// npx tsc --init
// npx tsc -w

//
// ******** EXERCISE 4 ********
// building the house

// let x: any = 231231;

// function reversingStr(a: string) {
//   let b: any = a.toString().split('').reverse().join('');
//   console.log(b)
// }

// reversingStr(x);

class Key {
  signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature() {
    return this.signature;
  }
}

abstract class House {
  door = false;

  constructor() {}
}
