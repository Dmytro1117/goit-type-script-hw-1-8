"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function ControllerDecoration(config) {
    return function (constructor) {
        const current = new constructor();
        console.log(current);
        const getParent = document.getElementById(config.parent);
        console.log(getParent);
        const createElement = document.createElement(config.template);
        console.log(createElement);
        createElement.innerHTML = current.content;
        constructor.prototype.element = createElement;
        constructor.prototype.parent = getParent;
        getParent.appendChild(createElement);
    };
}
let Controller = class Controller {
    constructor() {
        this.content = 'My custom controller';
    }
};
Controller = __decorate([
    ControllerDecoration({
        parent: 'conteiner',
        template: 'H2',
    })
], Controller);
function ShowMeParams(target, name, descriptor) {
    console.log('target:', target);
    console.log('name:', name);
    console.log('descriptor:', descriptor);
}
class Notifier {
    showMessage() {
        console.log('Show message');
    }
}
__decorate([
    ShowMeParams
], Notifier.prototype, "showMessage", null);
function AutoBind(_, _2, descriptor) {
    const method = descriptor.value;
    return {
        configurable: true,
        enumerable: false,
        get() {
            return method.bind(this);
        }
    };
}
class Notifier2 {
    showMessage2() {
        console.log('Show message');
    }
}
__decorate([
    AutoBind
], Notifier2.prototype, "showMessage2", null);
const notifier2 = new Notifier2();
const showMessage2 = notifier2.showMessage2;
notifier2.showMessage2();
showMessage2();
function AddTax(taxPercent) {
    return (_, _2, descriptor) => {
        const method = descriptor.value;
        return {
            configurable: true,
            enumerable: false,
            get() {
                return (...properties) => {
                    const result = method.apply(this, properties);
                    return result + (result / 100 * taxPercent);
                };
            }
        };
    };
}
class Payment {
    pay(money) {
        return money;
    }
}
__decorate([
    AddTax(10)
], Payment.prototype, "pay", null);
const payment = new Payment();
console.log('Amount with tax: ', payment.pay(70));
function CheckEmail(target, name, position) {
    if (!target[name].validation) {
        target[name].validation = {};
    }
    Object.assign(target[name].validation, {
        [position]: (value) => {
            if (value.includes('@') || value.includes('@i.ua') || value.includes('@ukr.net')) {
                return value;
            }
            throw new Error('No valid field');
        }
    });
}
function Validation(_, _2, descriptor) {
    const method = descriptor.value;
    return {
        configurable: true,
        enumerable: false,
        get() {
            return (...args) => {
                if (method.validation) {
                    args.forEach((item, index) => {
                        if (method.validation[index]) {
                            args[index] = method.validation[index](item);
                        }
                    });
                }
                return method.apply(this, args);
            };
        }
    };
}
class Person {
    setEmail(email) {
        console.log(email);
    }
}
__decorate([
    Validation,
    __param(0, CheckEmail)
], Person.prototype, "setEmail", null);
const person = new Person();
person.setEmail('test@i.ua');
function Required(target, propertyName) {
    console.log('Required');
    console.log(target, propertyName);
}
function PositiveNumber(target, propertyName) {
    console.log('PositiveNumber');
    console.log(target, propertyName);
}
class Person3 {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
}
__decorate([
    Required
], Person3.prototype, "name", void 0);
__decorate([
    PositiveNumber
], Person3.prototype, "age", void 0);
const registeredValidators = {};
function Requiredd(target, propName) {
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propName]: ['required'] });
}
function PositiveNumberr(target, propName) {
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propName]: ['positive'] });
}
function validate(obj) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig) {
        return true;
    }
    let isValid = true;
    for (const prop in objValidatorConfig) {
        for (const validator of objValidatorConfig[prop]) {
            switch (validator) {
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}
class Person4 {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
}
__decorate([
    Required
], Person4.prototype, "name", void 0);
__decorate([
    PositiveNumber
], Person4.prototype, "age", void 0);
const person4 = new Person4('Alex', 30);
if (!validate(person4)) {
    console.log('Validation error!');
}
else {
    console.log('Validation ok!');
}
//# sourceMappingURL=hw-6.js.map