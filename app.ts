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
// ******** Exercise 2 ********
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
let empty: unknown = null;
let notInitialize: undefined = undefined;
let callback: Function = (a: number) => {
  return 100 + a;
};

let some: unknown;
some = 'Text';

let str: string;

if (typeof some === 'string') {
  // typeguard method
  str = some;
}

let person = ['Max', 21];
let typescriptedPerson: [name: string, age: number] = ['Max', 21];

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
  console.log('The loading is ready');
}
