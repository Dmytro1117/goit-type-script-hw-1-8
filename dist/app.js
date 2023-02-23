"use strict";
let age;
age = 50;
age = -10;
age = 50.5;
let names;
names = 'Max';
let toggle;
toggle = true;
toggle = false;
let empty;
empty = null;
let notInitialize;
notInitialize = undefined;
let anything;
anything = -20;
anything = 'Text';
anything = {};
console.log(anything);
let some;
some = 'Text';
let str;
if (typeof some === "string") {
    str = some;
}
let person;
person = ['Max', 21];
console.log(person);
var StatusLoad;
(function (StatusLoad) {
    StatusLoad[StatusLoad["LOADING"] = 0] = "LOADING";
    StatusLoad[StatusLoad["READY"] = 1] = "READY";
})(StatusLoad || (StatusLoad = {}));
const load = {
    statusLoad: StatusLoad.READY,
};
if (load.statusLoad === StatusLoad.LOADING) {
    console.log('StatusLoad: ', StatusLoad.LOADING);
}
if (load.statusLoad === StatusLoad.READY) {
    console.log('StatusLoad: ', StatusLoad.READY);
}
let union;
union = 'Text';
union = 10;
console.log(union);
let literal;
literal = 'enable';
console.log(literal);
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
const page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: '2021-01-01',
        updateAt: '2021-05-01',
    }
};
const page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
};
console.log(page1);
console.log(page2);
let arrObj;
arrObj = [{ name: "Dim" }, { name: "Dim", ale: "ава" }];
//# sourceMappingURL=app.js.map