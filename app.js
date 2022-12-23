var addBtn = document.querySelector('#add');
var removeBtn = document.querySelector('#remove');
var list = document.querySelector('#list');
var input1 = document.getElementById('num1');
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
var age = 50;
var moduleSecondName = 'Max';
var toggle = true;
var empty = null;
var notInitialize = undefined;
var callback = function (a) {
    return 100 + a;
};
//UNKNOWN
var some;
some = 'Text';
var str;
if (typeof some === 'string') {
    // typeguard method
    str = some;
}
var person = ['Max', 21];
var typescriptedPerson = ['Max', 21];
//ENUM
var Toggle;
(function (Toggle) {
    Toggle[Toggle["LOADING"] = 0] = "LOADING";
    Toggle[Toggle["READY"] = 1] = "READY";
})(Toggle || (Toggle = {}));
var isLoading = {
    status: Toggle.LOADING
};
if (isLoading.status === Toggle.READY) {
    console.log('The page is loading now');
}
else {
    console.log('The loading is ready');
}
//UNION
var doubleTypedEl; //union Type
doubleTypedEl = 'Hey';
doubleTypedEl = 10;
//LITERAL
var literalTyped;
// enum Toggle2 {
//   enable,
//   disable,
// }
//FUNCTIONS
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
var page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: '2021-01-01',
        updateAt: '2021-05-01'
    }
};
var page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close'
};
//
// ******** EXERCISE 3 ********
//
