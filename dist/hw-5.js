"use strict";
function getPromise() {
    return new Promise((resolve) => {
        resolve(['Text', 80]);
    });
}
getPromise()
    .then((data) => {
    console.log(data);
});
function compare(top, bottom) {
    return {
        name: top.name,
        color: top.color,
        position: bottom.position,
        weight: bottom.weight,
    };
}
const res = compare({
    "name": "Jon",
    "color": "green"
}, {
    "position": 10,
    "weight": 70
});
console.log(res);
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const merged = merge({ name: 'Alisa' }, { age: 28 });
merged.name;
console.log(merged.name);
console.log(merged);
class Component {
    constructor(props) {
        this.props = props;
    }
}
class Page extends Component {
    pageInfo() {
        console.log(this.props.title);
    }
}
const compo = new Component("Awesome!");
const compo2 = new Component(40);
const page = new Page({ title: "Robin Hood", name: "Robin", age: 30 });
const page2 = new Page({ title: "William Wood", name: "William", age: 45 });
console.log(compo);
console.log(compo.props);
console.log(compo2);
console.log(compo2.props);
console.log(page);
console.log(page.props.title);
page.pageInfo();
console.log(page2);
console.log(page2.props.title);
page2.pageInfo();
//# sourceMappingURL=hw-5.js.map