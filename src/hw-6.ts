// Декоратори класів:

interface IDecoration {
  parent: string;
  template: string;
}

function ControllerDecoration (config: IDecoration) {
  return function(constructor: any) {
    const current = new constructor();
    console.log(current)
    const getParent = document.getElementById(config.parent)!;
    console.log(getParent)
    const createElement = document.createElement(config.template);
console.log(createElement)
    createElement.innerHTML = current.content;

    constructor.prototype.element = createElement;
    constructor.prototype.parent = getParent;

    getParent.appendChild(createElement);
  };
}

@ControllerDecoration({
  parent: 'conteiner',
  template: 'H2',
})
class Controller {
  public content = 'My custom controller';
}

// ===========================================================
// Декоратори методів:

function ShowMeParams (target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('target:',target);
  console.log('name:', name);
  console.log('descriptor:', descriptor);
}

class Notifier {
  @ShowMeParams
  showMessage () {
    console.log('Show message');
  }
}

    //========================

function AutoBind (_: any, _2: string, descriptor: PropertyDescriptor) {
  const method = descriptor.value;

  return {
    configurable: true,
    enumerable: false,
    get() {
      return method.bind(this);
    }
  }
}

class Notifier2 {
  @AutoBind
  showMessage2 () {
    console.log('Show message');
  }
}

const notifier2 = new Notifier2();

const showMessage2 = notifier2.showMessage2;
notifier2.showMessage2()

showMessage2();


//=========================================

function AddTax (taxPercent: number) {
  return (_: any, _2: string, descriptor: PropertyDescriptor) => {
    const method = descriptor.value as Function;
  
    return {
      configurable: true,
      enumerable: false,
      get() {
        return (...properties: any[]) => {
          const result = method.apply(this, properties);

          return result + (result / 100 * taxPercent)
        } 
        
      }
    }
  };
}

class Payment {
  @AddTax(10)
  pay (money: number):number {
    return money;
  }
}

const payment = new Payment();

console.log('Amount with tax: ', payment.pay(70));


//===================================================
//Декоратори параметрів:

function CheckEmail (target: any, name: string, position: number) {
  if (!target[name].validation) {
    target[name].validation = {};
  }
  Object.assign( target[name].validation, {
    [position]: (value:string) => {
      if (value.includes('@')||value.includes('@i.ua')||value.includes('@ukr.net')) {
        return value;
      }
      throw new Error('No valid field');
    }
  });
}

function Validation (_: any, _2: string, descriptor: PropertyDescriptor) {
  const method = descriptor.value;

  return {
    configurable: true,
    enumerable: false,
    get() {
      return (...args: any[]) => {
        if (method.validation) {
          args.forEach((item, index) => {
            if (method.validation[index]) {
              args[index] = method.validation[index](item);
            }
          });
        }
        return method.apply(this, args);
      } 
      
    }
  }
}

class Person {
  @Validation
  setEmail (@CheckEmail email: string) {
    console.log(email);
  }
}

const person = new Person();

person.setEmail('test@i.ua');


//=====================================
//Декоратори властивостей:

function Required(target: any, propertyName: string | Symbol) {
  console.log('Required');
  console.log(target, propertyName);
}

function PositiveNumber(target: any, propertyName: string | Symbol) {
  console.log('PositiveNumber');
  console.log(target, propertyName);
}

class Person3 {
  @Required
  name: string;
  @PositiveNumber
  age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }
}

//=====================================

interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[]; // ['required', 'positive']
  };
}

const registeredValidators: ValidatorConfig = {};

function Requiredd(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ['required']
  };
}

function PositiveNumberr(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ['positive']
  };
}

function validate(obj: any) {
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
  @Required
  name: string;
  @PositiveNumber
  age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }
}

const person4 = new Person4('Alex', 30);

if (!validate(person4)) {
  console.log('Validation error!');
} else {
  console.log('Validation ok!');
}