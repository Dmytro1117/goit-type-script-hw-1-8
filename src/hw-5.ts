// Є функція, яка повертає Promise, він повертає масив рядків і чисел, опишіть правильно тип.

function getPromise (): Promise<Array<string | number>> {
   return  new Promise((resolve) => {
    resolve(['Text', 80]);
  });
}


getPromise ()
.then((data) =>  {
  console.log(data);
});

// У вас є наступний тип даних

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}

// Є функція, вона приймає два аргументи, в один потрапляє name і color, в іншу частину - position і weight. Потрібно явно вказати, що ці поля з AllType. І сама функція повертає AllType. Скористайтеся Pick.

function compare (top: Pick<AllType, 'name' | 'color'>, bottom: Pick<AllType, 'position' | 'weight'>): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  }
}

const res = compare({
  "name": "Jon",
  "color": "green"
}, {
  "position": 10,
  "weight": 70
})

console.log(res);

// Вкажіть дженерики для функції об'єднання об'єктів.

function merge <T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
const merged = merge({name: 'Alisa'}, {age: 28});

merged.name;

console.log(merged.name);
console.log(merged);


// У вас є наступні класи

class Component<T> {
  constructor (public props:T) {
  }
}

interface IPerson {
  title: string;
  name: string;
  age: number;
}

class Page extends Component<IPerson>  {
  pageInfo () {
    console.log(this.props.title);
  }
}

const compo = new Component("Awesome!")
const compo2 = new Component(40)
const page = new Page({ title: "Robin Hood", name: "Robin", age: 30})
const page2 = new Page({ title: "William Wood", name: "William", age: 45 })

console.log(compo);
console.log(compo.props);

console.log(compo2);
console.log(compo2.props);

console.log(page);
console.log(page.props.title);
page.pageInfo()

console.log(page2);
console.log(page2.props.title);
page2.pageInfo()



// Тільки додаючи дженерики для класів та інтерфейс, приберіть помилку.