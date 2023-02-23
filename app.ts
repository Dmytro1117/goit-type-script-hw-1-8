
let age: number;
age = 50;
age = -10;
age = 50.5;

let names: string;
names = 'Max';

let toggle: boolean;
toggle = true;
toggle = false;


let empty: null;
empty = null;

let notInitialize: undefined;
notInitialize = undefined;

let callback = (a: number) => { Number };
callback = (a) => { return 100 + a };
console.log(callback(10));

// ======================================================


let anything: any;
anything = -20;
anything = 'Text';
anything = {};
console.log(anything)

// =========================================

let some:unknown;
some = 'Text';
let str: string;
if (typeof some === "string") {
  str = some;
}

// =========================================

// Tuple (незмінний масив):

let person: [string, number];
person = ['Max', 21];
console.log(person)

// =========================================

// Enum (змінна з великої літери):

enum StatusLoad {LOADING, READY}
const load = {
  statusLoad: StatusLoad.READY,
}

if (load.statusLoad === StatusLoad.LOADING) {
  console.log('StatusLoad: ', StatusLoad.LOADING);
}

if (load.statusLoad === StatusLoad.READY) {
  console.log('StatusLoad: ', StatusLoad.READY);
}

// =========================================

// Union Type (змінна може бути дек. типів):

let union: string | number;
union = 'Text';
union = 10;
console.log(union)

// =========================================

// Literal Type (або те або те):

let literal: 'enable' | 'disable'
literal = 'enable';
console.log(literal)
// =========================================

// Return Type (методи для ф.):

function showMessage(message: string):void {
  console.log(message);
}


function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}

// =========================================

// Custom Types (команда type, ім'я типу задається з великої літери):

type PageBase = {
  title: string,
  likes: number,
  accounts: string[],
  status: 'open' | 'close',
  details?: {
    createAt: string,
    updateAt: string,
  }
}

const page1: PageBase = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: '2021-01-01',
    updateAt: '2021-05-01',
  }
}


const page2: PageBase = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}

console.log(page1)
console.log(page2)
// ===========================

let arrObj: { name: string, ale?: string }[];

arrObj = [{name: "Dim"}, {name: "Dim", ale: "ава"}]

