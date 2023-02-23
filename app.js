var age;
age = 50;
age = -10;
age = 50.5;
var names;
names = "Max";
var toggle;
toggle = true;
toggle = false;
var empty;
empty = null;
var notInitialize;
notInitialize = undefined;

// =========================================

//  Стрелка:
var callback = function (a) {
  Number;
};
callback = function (a) {
  return 100 + a;
};
console.log(callback(10));
// ======================================================
var anything;
anything = -20;
anything = "Text";
anything = {};
console.log(anything);
// =========================================
var some;
some = "Text";
var str;
if (typeof some === "string") {
  str = some;
}
// =========================================
// Tuple (незмінний масив):
var person;
person = ["Max", 21];
console.log(person);
// =========================================
// Enum (змінна з великої літери):
var StatusLoad;
(function (StatusLoad) {
  StatusLoad[(StatusLoad["LOADING"] = 0)] = "LOADING";
  StatusLoad[(StatusLoad["READY"] = 1)] = "READY";
})(StatusLoad || (StatusLoad = {}));
var load = {
  statusLoad: StatusLoad.READY,
};
if (load.statusLoad === StatusLoad.LOADING) {
  console.log("StatusLoad: ", StatusLoad.LOADING);
}
if (load.statusLoad === StatusLoad.READY) {
  console.log("StatusLoad: ", StatusLoad.READY);
}
// =========================================
// Union Type (змінна може бути дек. типів):
var union;
union = 10;
union = "Text";
console.log(union);
// =========================================
// Literal Type (або те або те):
var literal;
literal = "enable";
console.log(literal);
// =========================================
// Return Type (методи для ф.):
function showMessage(message) {
  console.log(message);
}
function calc(num1, num2) {
  return num1 + num2;
}
function customError() {
  throw new Error("Error");
}
var page1 = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: "2021-01-01",
    updateAt: "2021-05-01",
  },
};
var page2 = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};
console.log(page1);
console.log(page2);
// ===========================
var arrObj;
arrObj = [{ name: "Dim" }, { name: "Dim", ale: "ава" }];
